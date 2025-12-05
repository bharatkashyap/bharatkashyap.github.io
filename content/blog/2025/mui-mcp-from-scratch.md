---
title: 'Building @mui/mcp from Scratch: An MCP Server for Material-UI Documentation'
date: '2025-01-27'
description: 'How I created and published an MCP server for MUI documentation, complete with usage analytics using nginx reverse proxy and Axiom'
tags:
  [
    'mcp',
    'mui',
    'material-ui',
    'claude',
    'nginx',
    'axiom',
    'analytics',
    'typescript',
    'open-source',
  ]
---

Building developer tools that integrate with AI assistants is becoming increasingly important. When Anthropic announced the Model Context Protocol (MCP), I saw an opportunity to make MUI's extensive documentation more accessible to Claude and other AI assistants. Here's how I built and published `@mui/mcp` from scratch, including setting up comprehensive usage tracking.

## What is MCP?

The Model Context Protocol (MCP) is an open standard that enables AI assistants to securely access external data sources and tools. Think of it as a bridge between AI models and the resources they need to provide better assistance.

For MUI's case, this means Claude can now directly access our component documentation, API references, and examples instead of relying on potentially outdated training data.

## Building the MCP Server

### Project Setup

The key decision was choosing Mastra's MCP framework over the raw MCP TypeScript SDK. Mastra provides elegant abstractions that handle the low-level MCP protocol details, letting you focus on business logic.

Rather than building documentation integration from scratch, I leveraged MUI's existing `@mui-chat/tools` package - the same tools that power MUI's AI chat interface. This gave me immediate access to:

- Pre-built documentation fetching logic
- Multi-version package support
- Caching mechanisms
- Error handling

The architecture centers around creating wrapper tools that add performance monitoring and logging to the existing MUI tools, then registering them with a Mastra MCP server instance.

### Documentation Integration

The core challenge was making MUI's documentation accessible through MCP's tool system. The `@mui-chat/tools` package provides two essential tools:

1. **useMuiDocs**: Discovers available MUI packages and their documentation URLs
2. **fetchDocs**: Retrieves actual documentation content from provided URLs

The implementation required building a package discovery mechanism that fetches the list of available MUI packages from their backend API. This enables dynamic support for new packages without hardcoding package names.

Each tool was configured with:

- **Concurrency control**: Limiting simultaneous documentation fetches to 10 to avoid overwhelming the servers
- **Caching enabled**: Reducing redundant API calls for the same documentation
- **Performance monitoring**: Wrapping each tool execution with timing logs for optimization insights

The tools are then wrapped in Mastra's `createTool` helper, which standardizes the interface and adds execution logging. This wrapper pattern allows adding cross-cutting concerns like performance monitoring without modifying the underlying tools.

### Key Architectural Decisions

The implementation leverages several smart design choices:

1. **Built-in Performance Monitoring**: Each tool execution is wrapped with timing logs for debugging and optimization
2. **Concurrent Request Handling**: The queue configuration allows up to 10 concurrent documentation fetches
3. **Intelligent Caching**: Both tools use caching to avoid redundant API calls
4. **Dynamic Package Discovery**: The server fetches available packages from MUI's backend API

The server startup includes comprehensive error handling with user-friendly messaging. Instead of cryptic error messages, users get clear guidance including:

- Colored, formatted error messages that stand out in terminal output
- Specific instructions on where to get help (Discord community)
- Graceful process exit with appropriate error codes
- Both promise chain and async/await error catching for robustness

This attention to developer experience details makes the difference between a tool that frustrates users and one they want to recommend to others.

## Publishing to npm

Publishing the MCP server was straightforward thanks to Mastra's streamlined architecture. The package structure focuses on simplicity:

- **Single entry point**: The entire server fits in one compiled file
- **CLI-first design**: Configured as a binary that users can run directly
- **Minimal dependencies**: Only the essential Mastra framework and MUI tools
- **Node.js version requirement**: Set to 18+ to ensure compatibility with modern JavaScript features

The key insight was that MCP servers work best as simple CLI tools rather than complex libraries. Users just want to install and run them - they don't need to import and configure them programmatically.

## Setting Up Usage Tracking

To understand how the MCP server was being used, I set up comprehensive analytics using nginx as a reverse proxy and Axiom for log analysis.

### nginx Reverse Proxy Configuration

The nginx setup employs several advanced techniques to create a transparent proxy with comprehensive logging:

**JSON Structured Logging**: Instead of traditional log formats, I configured nginx to output JSON logs with all relevant fields (timestamp, IP, request details, response codes, timing). This makes parsing much easier in log analysis systems.

**Body Substitution**: The most critical feature is using nginx's `sub_filter` module to automatically replace hostname references in responses. This ensures that any URLs in the documentation that point to the original domain get rewritten to point to our proxy domain, making the proxy completely transparent.

**Header Management**: The proxy configuration carefully preserves client information while ensuring the upstream server receives the correct Host header. It also disables compression during proxying so the body substitution can work properly.

**Performance Optimizations**:

- HTTP/1.1 keep-alive connections to the upstream
- Appropriate timeouts to handle slow documentation requests
- Buffered logging to reduce I/O overhead

**Health Monitoring**: A simple health check endpoint for load balancers and monitoring systems.

### Vector Integration for Log Shipping

Vector acts as the bridge between nginx logs and Axiom, with a sophisticated processing pipeline:

**Multiple Log Sources**: Vector monitors both access and error logs separately, allowing for different processing rules and retention policies.

**Environment Enrichment**: All logs get tagged with environment information (production, staging, etc.) for easier filtering in analytics dashboards.

**JSON Log Processing**: The access logs (already in JSON format from nginx) get parsed and merged into the event structure, while error logs are tagged appropriately.

**Robust Error Handling**: If JSON parsing fails, Vector logs the error but continues processing, ensuring resilient operation.

**Efficient Shipping**: Logs are batched (1000 events) and compressed before sending to Axiom, reducing bandwidth and API calls. The 5-second timeout ensures logs aren't held too long.

**HTTP Sink Configuration**: Uses Axiom's HTTP API with bearer token authentication, making it compatible with their ingestion system.

### Advanced Proxy Features

This setup includes several sophisticated features that make it production-ready:

1. **JSON Structured Logging**: Instead of traditional log formats, JSON logs are much easier to parse and query in analytics systems
2. **Body Substitution**: The `sub_filter` directives automatically replace hostnames in responses, making the proxy transparent to clients
3. **Separate Log Streams**: Access and error logs are handled separately, allowing for different retention policies and processing rules
4. **Environment-Based Configuration**: Vector adds environment context to all logs, making it easy to filter between staging/production
5. **Efficient Batching**: Logs are batched (1000 events) and compressed before shipping to reduce network overhead
6. **Health Monitoring**: A simple `/healthz` endpoint for load balancer health checks

The combination of nginx's powerful proxy capabilities with Vector's flexible log processing creates a robust observability pipeline.

## The Results

After deploying the tracking infrastructure, I could see detailed analytics about MCP server usage:

![MUI MCP Dashboard showing usage analytics with request volumes, response times, and status codes tracked via Axiom and nginx reverse proxy](/blog/img/mui-mcp-dashboard.png)

The dashboard shows:

- **23,538 total requests** over the tracking period
- **2,350 successful requests** (200 status codes)
- **Average response time of 0.1336 seconds**
- **Peak response time of 9.974 seconds**

### Key Insights

The usage data revealed several interesting patterns:

1. **Popular Documentation Sections**: The most requested resources were component documentation, particularly for `Button`, `TextField`, and `DataGrid`
2. **Usage Patterns**: Most requests came during US business hours, suggesting primary usage by developers
3. **Performance**: The 99th percentile response time stayed under 2 seconds, even during peak usage
4. **Error Patterns**: Most 4xx errors were from requests for non-existent documentation paths

## Lessons Learned

### 1. Don't Reinvent the Wheel

The biggest lesson was leveraging existing, battle-tested tools. Using `@mui-chat/tools` instead of building documentation integration from scratch saved weeks of development time and gave us a much more robust solution.

### 2. Choose the Right Framework

Mastra's MCP implementation was significantly more ergonomic than the raw MCP SDK. The tool wrapper pattern made adding performance monitoring and error handling trivial.

### 3. Performance Monitoring Built-In

Adding timing logs to each tool execution from day one provided immediate insights into bottlenecks and helped optimize the user experience.

### 4. Comprehensive Error Handling

Including user-friendly error messages with clear next steps (like joining the Discord) reduced support burden and improved the developer experience.

### 5. Production-Ready Infrastructure

Setting up structured logging, body substitution, and health checks from the start made the difference between a proof-of-concept and a production service. The nginx + Vector pipeline provided enterprise-grade observability out of the box.

## What's Next?

The MCP server has already proven valuable for developers using Claude to work with MUI. Future improvements include:

- **Real-time Documentation Updates**: Automatically sync with the latest documentation changes
- **Usage-Based Optimization**: Prioritize caching for the most requested resources
- **Enhanced Search**: Add semantic search capabilities across the documentation
- **Community Extensions**: Allow community-contributed examples and patterns

## Getting Started

The MUI MCP server is available as part of the mui-toolpad repository. To set it up:

1. **Clone and Build**: Get the source code from the mui-toolpad repository and build the MCP server package
2. **Configure Claude Desktop**: Add the built server to your MCP configuration, pointing to the compiled JavaScript entry point
3. **Test the Integration**: Try asking Claude questions about MUI components to verify the server is working

The complete source code is available on [GitHub](https://github.com/mui/mui-toolpad), providing a real-world example of production MCP server implementation. The codebase demonstrates all the concepts discussed in this post - from Mastra integration to error handling to performance monitoring.

Building `@mui/mcp` was a great learning experience in creating developer tools for the AI era. The combination of MCP's flexible architecture, comprehensive logging, and modern analytics tools made it possible to create something genuinely useful while understanding exactly how it's being used.

---

_If you're building MCP servers or working with AI-integrated development tools, I'd love to hear about your experiences. Feel free to reach out on [GitHub](https://github.com/bharatkashyap) or [Twitter](https://twitter.com/bharatkashyap)._

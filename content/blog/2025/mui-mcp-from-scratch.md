---
title: 'Building @mui/mcp from scratch"
date: '2025-07-05'
description: 'A guide to building MCPs that is (probably) outdated by now'
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

In the beginning of this year, I had a new task come my way: MUI needed an MCP since a large number of developers were complaining about it on GitHub and Discord, and I was talking about MCPs enough internally for me to be asked to build one.

## What is MCP?

_(I'm only adding this section in case I'm reading this 10 years later and MCP turned out to be something super ephemeral.)_

The Model Context Protocol (MCP) is an open standard that enables AI assistants to securely access external data sources and tools. Think of it as a bridge between AI models and the resources they need to provide better assistance.

For MUI's case, this means an AI client can now directly access our component documentation, API references, and examples instead of relying on potentially outdated training data or long and rabbit-holey web searches.

## Building the MCP Server

### Project Setup

The key decision was choosing Mastra's MCP framework over the raw MCP TypeScript SDK. Mastra provides elegant abstractions that handle the low-level MCP protocol details, letting you focus on business logic.

The key layer was also building a new `@mui-chat/tools` package, that would abstract away the following tasks:

- Pre-built documentation fetching logic
- Caching mechanisms
- Error handling

### Documentation Integration

The core challenge was making MUI's documentation accessible through MCP's tool system. The `@mui-chat/tools` package would provide two essential tools:

1. **useMuiDocs**: Discovers available MUI packages and their documentation URLs
2. **fetchDocs**: Retrieves actual documentation content from provided URLs

The implementation required building a package discovery mechanism that fetches the list of available MUI packages from a backend API. This enables dynamic support for new packages without hardcoding package names.

Each tool was configured with:

- **Concurrency control**: Limiting simultaneous documentation fetches to 10 to avoid overwhelming the servers
- **Caching enabled**: Reducing redundant API calls for the same documentation
- **Performance monitoring**: Wrapping each tool execution with timing logs for optimization insights

The tools are then wrapped in Mastra's `createTool` helper, which standardizes the interface and adds execution logging. This wrapper pattern allows adding cross-cutting concerns like performance monitoring without modifying the underlying tools.

## Publishing to npm

I decided to publish a CLI-based MCP, rather than a hosted version, since the audience was primarily developers, and we didn't want to take on the server ingress costs of thousands of requests coming in.

The entire file was compiled into a single file with zero-dependencies.

## Setting Up Usage Tracking

To understand how the MCP server was being used to see if this was a worthwile investment for the company, I set up comprehensive analytics using nginx as a reverse proxy and Axiom for log analysis.

### nginx Reverse Proxy Configuration

Since the MCP makes requests to the MUI's built `llms.txt` file, I needed to set up a reverse proxy to intercept these requests and log them.

The nginx setup employs several advanced techniques to create a transparent proxy with comprehensive logging:

**JSON Structured Logging**: Instead of traditional log formats, I configured nginx to output JSON logs with all relevant fields (timestamp, IP, request details, response codes, timing). This makes parsing much easier in log analysis systems.

**Body Substitution**: The most critical feature is using nginx's `sub_filter` module to automatically replace hostname references in responses. This ensures that any URLs in the documentation that point to the original domain get rewritten to point to our proxy domain, making the proxy completely transparent.

## The Results

After deploying the tracking infrastructure, I could see detailed analytics about MCP server usage

The dashboard shows:

- **23,538 total requests** over the tracking period
- **Average response time of 0.1336 seconds**
- **Peak response time of 9.974 seconds** (probably an error/outage)

### Key Insights

The usage data revealed several interesting patterns:

1. **Popular Documentation Sections**: The most requested resources were component documentation, particularly for `Button`, `TextField`, and `DataGrid`
2. **Usage Patterns**: Most requests came during US business hours, suggesting primary usage by developers
3. **Performance**: The 99th percentile response time stayed under 1 second, even during peak usage
4. **Error Patterns**: Most 4xx errors were from requests for non-existent documentation paths

## Update

As of writing, the MCP is still seeing ~1k downloads/week (I didn't expect a ton of new downloads since this is a one-time download and forget thing).

<script setup lang="ts">
import { useState } from '#app'

interface TestResult {
  name: string
  time: number
  relativeSpeed: number
}

const results = useState<TestResult[]>('results', () => [])
const isLoading = useState<boolean>('isLoading', () => false)
const maxKeys = 1000
const iterations = 5000

const runTest = async () => {
  isLoading.value = true

  // Wrap in Promise and setTimeout to ensure UI updates
  await new Promise((resolve) => setTimeout(resolve, 0))

  // Test functions
  const isObjE1 = (obj: Object) => {
    for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
        return false
      }
    }
    return true
  }

  const isObjE2 = (obj: object) => Object.keys(obj).length === 0
  const isObjE3 = (obj: object) => Object.getOwnPropertyNames(obj).length === 0

  // Box-Muller transform for normal distribution
  function normalRandom(mean: number, stdDev: number): number {
    const u1 = Math.random()
    const u2 = Math.random()
    const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2)
    return Math.round(mean + z * stdDev)
  }

  // Benchmark function with random sized objects
  function runBenchmark(fn: (obj: object) => boolean) {
    const start = performance.now()
    for (let i = 0; i < iterations; i++) {
      // Generate size from normal distribution (mean: maxKeys/2, stdDev: maxKeys/6)
      // This ensures ~99.7% of values fall between 0 and maxKeys
      const size = Math.max(
        0,
        Math.min(maxKeys, normalRandom(maxKeys / 2, maxKeys / 6))
      )

      // Create test object with random number of keys
      const testObj: Record<string, number> = {}
      for (let j = 0; j < size; j++) {
        testObj[`key${j}`] = j
      }

      fn(testObj)
    }
    const end = performance.now()
    return end - start
  }

  const testResults = [
    { name: 'for...in', time: runBenchmark(isObjE1) },
    { name: 'Object.keys().length', time: runBenchmark(isObjE2) },
    {
      name: 'Object.getOwnPropertyNames().length',
      time: runBenchmark(isObjE3),
    },
  ].sort((a, b) => a.time - b.time)

  results.value = testResults.map((result) => ({
    ...result,
    relativeSpeed: result.time / testResults[0].time,
  }))

  isLoading.value = false
}
</script>

<template>
  <div class="my-8 font-mono">
    <div class="info-callout">
      Testing performance of different methods to check if an object is empty.
      Lower time and relative speed (1.00x) indicate better performance.
      <div class="test-conditions">
        Test conditions: Normally distributed object sizes (0-{{
          maxKeys
        }}
        keys), {{ iterations }} iterations
      </div>
    </div>

    <button
      @click="runTest"
      :disabled="isLoading"
      class="test-button"
      :class="{ 'is-loading': isLoading }"
    >
      {{ isLoading ? 'Running test...' : 'Run Performance Test' }}
    </button>

    <div
      class="relative min-h-[50px]"
      :class="{
        'after:absolute after:inset-0 after:bg-white/70 after:backdrop-blur-sm after:rounded-md after:animate-fade-in dark:after:bg-gray-900/70':
          isLoading,
      }"
    >
      <template v-if="results.length > 0">
        <div
          v-for="{ name, time, relativeSpeed } in results"
          :key="name"
          class="my-4"
        >
          <div class="mb-2 font-bold text-gray-900 dark:text-gray-100">
            {{ name }}
          </div>
          <div class="h-5 bg-gray-100 rounded overflow-hidden dark:bg-gray-800">
            <div
              class="h-full bg-gradient-to-r from-green-500 to-green-400 origin-left animate-expand dark:from-green-600 dark:to-green-500"
              :style="{
                width: `${(1 / relativeSpeed) * 100}%`,
                animationDuration: `${relativeSpeed}s`,
              }"
            />
          </div>
          <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {{ time.toFixed(2) }}ms ({{ relativeSpeed.toFixed(2) }}x)
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 2rem 0;
  font-family: ui-monospace, monospace;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.result-row {
  margin: 1rem 0;
}

.method-name {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.bar-container {
  background: #eee;
  border-radius: 4px;
  height: 20px;
  overflow: hidden;
}

.bar {
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  transform-origin: left;
  animation: loadBar 1s ease-out forwards;
}

.metrics {
  margin-top: 0.25rem;
  font-size: 0.9rem;
  color: #666;
}

@keyframes loadBar {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.test-button {
  display: block;
  margin: 0 auto 2rem;
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  font-size: 1rem;
  color: #fff;
  background: #4caf50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
}

.test-button.is-loading {
  background: #45a049;
}

.test-button.is-loading::after {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 25%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 100%
  );
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
}

.test-button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.info-callout {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #1565c0;
  border-radius: 0 4px 4px 0;
}

.info-callout .test-conditions {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.8;
}

.controls {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.size-input {
  padding: 0.5rem;
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.size-input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.results-container {
  position: relative;
  min-height: 50px;
}

.results-container.is-loading::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(3px);
  border-radius: 4px;
  animation: fadeIn 0.3s ease-out;
  z-index: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

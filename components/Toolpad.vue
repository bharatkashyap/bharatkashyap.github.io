<template>
  <div
    id="toolpad"
    @pointerleave="handlePointerLeave()"
    @touchstart="handlePointerLeave()"
  >
    <div class="container">
      <div v-for="(icon, index) in icons" :key="index">
        <NuxtLink
          v-if="icon.type === 'route' || icon.type === 'external'"
          :key="index"
          :to="icon.route"
          :class="{
            selected: isSelected(icon.route),
            bouncing: bouncingIcon === index,
          }"
          :target="icon.type === 'external' ? '_blank' : ''"
          @click="isTouchDevice() ? null : triggerBounce(index)"
          @touchend="isTouchDevice() ? triggerBounce(index) : null"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            v-html="icon.svg"
          ></svg>
          <span class="tooltip">{{ icon.name }}</span>
          <span
            v-if="icon.type === 'route' && isSelected(icon.route)"
            class="selected-dot"
          ></span>
        </NuxtLink>
        <button
          v-else-if="icon.type === 'button' && icon.name === 'Theme'"
          :class="{
            bouncing: bouncingIcon === index,
          }"
          @click="toggleTheme(index)"
        >
          <svg
            aria-hidden="true"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            color="hsl(0 0% 52.3%)"
            style="transform: rotate(45deg)"
            v-html="icon.svg"
          ></svg>
          <span class="tooltip">{{ icon.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const bouncingIcon = ref(null)

const { $routes } = useNuxtApp()

const icons = $routes

const isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(hover: none)').matches
  )
}

const isSelected = (iconRoute) => {
  if (iconRoute.startsWith('http')) {
    return false // External links are never selected
  }
  return route.path === iconRoute
}

const triggerBounce = (index) => {
  bouncingIcon.value = index
  setTimeout(() => {
    bouncingIcon.value = null
  }, 300) // Animation duration
}

const baseSize = 40
const maxSize = 80
const affectedButtons = 3

function gaussianDistribution(x, mean, stdDev) {
  return Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
}

function updateButtonSizes(mouseX, mouseY) {
  const buttons = document.querySelectorAll('#toolpad a, #toolpad button')
  buttons.forEach((button, index) => {
    const rect = button.getBoundingClientRect()
    const buttonCenterX = rect.left + rect.width / 2
    const buttonCenterY = rect.top + rect.height / 2

    const distance = Math.sqrt(
      Math.pow(mouseX - buttonCenterX, 2) + Math.pow(mouseY - buttonCenterY, 2)
    )

    const maxDistance = Math.sqrt(
      Math.pow(rect.width * (affectedButtons + 1), 2) + Math.pow(rect.height, 2)
    )

    const size =
      baseSize +
      (maxSize - baseSize) *
        gaussianDistribution(distance / maxDistance, 0, 0.3)

    button.style.width = `${size}px`
    button.style.height = `${size}px`
  })
}

function handlePointerMove(e) {
  const toolbar = document.querySelector('#toolpad')
  if (toolbar.contains(e.target)) {
    updateButtonSizes(e.clientX, e.clientY)
  }
}

function handlePointerLeave() {
  const buttons = document.querySelectorAll('#toolpad a, #toolpad button')
  buttons.forEach((button) => {
    button.style.width = `${baseSize}px`
    button.style.height = `${baseSize}px`
  })
}

function toggleTheme(index) {
  document.body.classList.toggle('dark')
  const themeIcon = document.querySelector('#toolpad button svg')
  if (document.body.classList.contains('dark')) {
    themeIcon.innerHTML = icons[index].svgDark
  } else {
    themeIcon.innerHTML = icons[index].svg
  }
  triggerBounce(index)
}

onMounted(() => {
  document.addEventListener('pointermove', handlePointerMove)
})

onUnmounted(() => {
  document.removeEventListener('pointermove', handlePointerMove)
})
</script>

<style scoped>
/* Add the CSS styles from the original HTML file here */
#toolpad {
  display: flex;
  align-items: flex-end;
  width: auto;
  height: 3.5rem;
  padding-left: 8px;
  padding-right: 8px;
  position: fixed;
  background: var(--toolpad-bg);
  box-shadow: var(--toolpad-shadow);
  border: 1px solid var(--toolpad-border);
  bottom: -8px;
  left: 50%;
  border-radius: 9999px;
  z-index: 10;
  transform: translate(-50%, -50%) translateY(80px);
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: 200ms;
  transition-property: all;
  animation: 500ms ease 200ms 1 normal forwards running fade-rise-bottom;
}

#toolpad .container {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

#toolpad a,
#toolpad button {
  text-decoration: none;
  border: 0px;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 9999px;
  background: var(--link-bg);
  position: relative;
  color: var(--link-color);
  width: 36px;
  height: 36px;
  top: 0px;
  cursor: pointer;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  background-image: linear-gradient(
    45deg,
    var(--gradient-color-1),
    var(--gradient-color-2),
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  background-size: 200% 100%;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: 50ms;
  transition-property: all;
  position: relative; /* Add this to position the dot */
}

#toolpad a svg,
#toolpad button svg {
  width: 50%;
  height: 50%;
  fill: none;
  stroke: var(--link-color);
  pointer-events: none;
  transform-origin: unset;
}

#toolpad a.bouncing,
#toolpad button.bouncing {
  animation: bounce 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fade-rise-bottom {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(80px);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
  }
}

.selected-dot {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background-color: var(--link-color);
  border-radius: 50%;
}

.tooltip {
  visibility: hidden;
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--toolpad-bg);
  color: var(--link-color);
  text-align: center;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--toolpad-border);
}

@media (hover: hover) {
  #toolpad a:hover .tooltip,
  #toolpad button:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
}

@media (hover: none) {
  #toolpad a:active .tooltip,
  #toolpad button:active .tooltip {
    visibility: visible;
    opacity: 1;
  }
}
</style>

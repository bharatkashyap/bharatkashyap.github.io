<template>
  <div
    class="place-items-center grid grid-cols-1 auto-rows-max w-full min-h-screen dark:bg-zinc-900 scrollbar-gutter-stable mb-12 md:mb-0"
  >
    <div class="md:m-auto w-full md:w-2/3 lg:w-1/2">
      <NuxtPage />
    </div>
  </div>
  <Toolpad />
</template>

<style>
:root {
  --gradient-color-1: hsl(0 0% 97.3%);
  --gradient-color-2: hsl(0 0% 90.9%);
  --toolpad-border: hsl(0 0% 0% / 0.071);
  --toolpad-bg: rgba(255, 255, 255);
  --toolpad-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  --toolpad-gray: hsl(0 0% 52.3%) --link-bg: hsl(0 0% 95.1%);
  --link-color: hsl(0 0% 52.3%);
  --button-gap: 15px;
  --push-distance: 10px;
  --scrollbar-bg: #2d3748;
  --scrollbar-thumb: #4a5568;
}

.dark {
  --gradient-color-1: hsl(0 0% 8.5%);
  --gradient-color-2: hsl(0 0% 11%);
  --toolpad-border: hsl(0 0% 100% / 0.1);
  --toolpad-bg: rgba(0, 0, 0, 0.8);
  --toolpad-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  --link-bg: hsl(0 0% 14.9%);
  --link-color: hsl(0 0% 63.9%);
}

/* Add any global styles here */
/** LINKS */
.link {
  text-decoration-line: underline;
  text-decoration-color: black;
  text-decoration-style: dotted;
  text-decoration-thickness: from-font;
  text-underline-position: under;
  font-weight: bolder;
  -webkit-font-smoothing: antialiased;
}

.dark .link {
  text-decoration-color: gray;
}

.link:hover,
.link:focus {
  outline: 0;
  cursor: pointer;
}

.scrollbar-gutter-stable {
  scrollbar-gutter: stable;
}

/** FONTS */
.crimson-text {
  font-family: 'Crimson Text';
}
.public-sans {
  font-family: 'Public Sans';
}

/** ANIMATIONS */
.animation-forwards {
  animation-fill-mode: forwards;
}
.animation-delay-50 {
  animation-delay: 50ms;
}
.animation-delay-100 {
  animation-delay: 100ms;
}

/** MEDIA QUERIES */
@media screen and (max-width: 768px) {
  .min-h-0\.1 {
    min-height: 0.1rem;
  }
}
</style>

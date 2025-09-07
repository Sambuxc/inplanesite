<script setup>

</script>

<template>
  <nav class="portfolio-sidebar__nav flex-1 p-4">
    <ul class="space-y-2">
      <li>
        <button
            class="portfolio-sidebar__nav-item w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors relative bg-sidebar-accent text-sidebar-accent-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-house w-5 h-5">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path
                d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
          <span class="font-medium">Home</span></button>
      </li>
      <li>
        <button
            class="portfolio-sidebar__nav-item w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors relative text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-book-open w-5 h-5">
            <path d="M12 7v14"></path>
            <path
                d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
          </svg>
          <span class="font-medium">Portfolio</span></button>
      </li>
      <li>
        <button
            class="portfolio-sidebar__nav-item w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors relative text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-user w-5 h-5">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span class="font-medium">About</span></button>
      </li>
      <li>
        <button
            class="portfolio-sidebar__nav-item w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors relative text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-shopping-bag w-5 h-5">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span class="font-medium">Shop</span></button>
      </li>
      <li>
        <button
            class="portfolio-sidebar__nav-item w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors relative text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-mail w-5 h-5">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <span class="font-medium">Contact</span></button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
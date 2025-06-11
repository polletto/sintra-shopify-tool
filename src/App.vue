<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <Sidebar />
    <main class="flex-1 bg-gray-100 dark:bg-zinc-900 text-zinc-800 dark:text-gray-100 p-4 overflow-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <nav class="bg-gray-100 text-black dark:text-white dark:bg-orange-400 min-h-screen w-64 p-4 flex flex-col">
    <h1 class="text-2xl font-bold mb-6 text-center">Sintra Shopify Tools</h1>
    <router-link
        v-for="item in links"
        :key="item.name"
        :to="item.to"
        class="flex items-center p-2 rounded hover:bg-orange-500 mb-1"
        active-class="bg-orange-600"
    >
      <span class="mr-2">{{ item.icon }}</span>{{ item.name }}
    </router-link>

    <button @click="toggle" class="mt-auto bg-black text-sm p-2 rounded hover:bg-orange-600">
      Cambia Tema: {{ isDark ? '🌙 Scuro' : '☀️ Chiaro' }}
    </button>
  </nav>
</template>

<script setup>
import { useDarkMode } from '../scripts/useDarkMode.js'

const { isDark, toggle } = useDarkMode()
const links = [
  { name: 'Home', to: '/', icon: '🏠' },
  { name: 'Stores', to: '/stores', icon: '🏬' },
  { name: 'Metafields', to: '/metafields', icon: '🧩' }
]
</script>

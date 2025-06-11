<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Lista Store</h1>
      <button class="bg-green-800 hover:bg-green-600 text-white px-4 py-2 rounded mb-2">
        Aggiungi Store
      </button>
    </div>

    <div class="overflow-x-auto rounded shadow bg-white dark:bg-zinc-800">
      <table class="min-w-full">
        <thead class="bg-gray-200 dark:bg-zinc-700 text-zinc-700 dark:text-gray-200">
        <tr>
          <th class="text-left px-4 py-2">ID</th>
          <th class="text-left px-4 py-2">Nome</th>
          <th class="text-left px-4 py-2">Dominio</th>
          <th class="text-left px-4 py-2">Azioni</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="store in stores" :key="store.id" class="border-b border-gray-200 dark:border-zinc-700">
          <td class="px-4 py-2">{{ store.id }}</td>
          <td class="px-4 py-2">{{ store.name }}</td>
          <td class="px-4 py-2">{{ store.shopify_domain }}</td>
          <td class="px-4 py-2 space-x-2">
            <button class="bg-yellow-200 hover:bg-yellow-100 px-2 py-1 rounded">✏️</button>
            <button class="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded">🗑️</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import storesData from '../data/stores.json'
import { ref } from 'vue'

const stores = ref(storesData)
</script>

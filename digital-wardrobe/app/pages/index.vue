<template>
  <div class="min-h-screen bg-stone-50 text-stone-800 font-sans">
    <header class="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center border-b border-stone-200">
      <h1 class="text-2xl font-light tracking-wide">Mi Armario</h1>
      <button class="bg-stone-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-700 transition">
        + Añadir Prenda
      </button>
    </header>

    <main class="max-w-6xl mx-auto px-6 py-8">
      <!-- Filtros de Categoría -->
      <nav class="flex gap-6 mb-8 text-sm font-medium text-stone-500">
        <button class="text-stone-900 border-b-2 border-stone-900 pb-1">Todo</button>
        <button class="hover:text-stone-800">Tops</button>
        <button class="hover:text-stone-800">Bottoms</button>
        <button class="hover:text-stone-800">Calzado</button>
      </nav>

      <!-- Grid de Inventario -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <!-- Tarjeta Placeholder -->
        <div v-for="i in 10" :key="i" class="aspect-[3/4] bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center p-4 group cursor-pointer hover:shadow-md transition">
          <div class="w-full h-full bg-stone-50 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Aquí integraremos el composable de Firebase en el siguiente paso
</script>
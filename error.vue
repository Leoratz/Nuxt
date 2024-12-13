<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <div class="flex flex-col items-center justify-center flex-grow px-4 md:px-8">
      <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight my-8 text-center text-red-600">
        Oups! Page introuvable
      </h1>

      <div class="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
        <p class="text-lg md:text-xl font-medium text-gray-700 mb-4">
          Cette page n'est pas disponible.
        </p>

        <NuxtLink
          to="/"
          class="block mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium text-center"
        >
          Retour à l'accueil
        </NuxtLink>

        <NuxtLink
          to="/"
          class="block mt-4 text-blue-500 hover:underline text-sm md:text-base"
        >
          Voir les autres quizs
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
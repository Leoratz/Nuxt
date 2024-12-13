
<template>
  <div>
    <Header />
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-bold my-8">Quiz</h1>
      <div class="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <div class="mb-6">
          <p class="text-lg font-semibold mb-2">
            This page is not available
          </p>
          <NuxtLink to="/" class="text-blue-500 hover:underline">Accueil</NuxtLink>
        </div>
        <NuxtLink
          to="/"
          class="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg transition-colors duration-300 hover:bg-blue-600 text-center"
        >
          Voir les autres quizs
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
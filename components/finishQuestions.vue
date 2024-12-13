<script setup>
    const quiz = inject('quiz');
</script>

<template>
  <div class="flex flex-col items-center px-4 md:px-8">
    <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight my-8 text-center text-blue-700">
      {{ quiz.title }}
    </h1>

    <div class="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div class="mb-6">
        <p class="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Votre score est de {{ quiz.score.value.toFixed(3) }} / {{ quiz.questions.length * 5 }}
        </p>

  
        <div class="flex justify-between gap-4">
          <button
            class="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 font-medium text-center"
            @click="quiz.reset"
          >
            Recommencer
          </button>

          <NuxtLink
            to="/"
            class="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-center font-medium"
          >
            Voir les autres quizs
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
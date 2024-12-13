<script setup>
  const { gettAllQuizs } = useQuizs();

  const quizs = await gettAllQuizs();
</script>

<template>
  <div class="flex flex-col items-center px-4 md:px-8">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight my-8 text-center text-blue-700">
      Liste des Quiz
    </h1>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
      <NuxtLink 
        v-for="quiz in quizs"
        :key="quiz._path"
        :to="`/quiz/${quiz.slug}`"
        class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-500"
      >
        <h2 class="text-xl md:text-2xl font-bold mb-2 text-gray-800">
          {{ quiz.title }}
        </h2>
        <p class="text-sm md:text-base text-gray-500">
          Slug: {{ quiz.slug }}
        </p>
      </NuxtLink>
    </section>
  </div>
</template>
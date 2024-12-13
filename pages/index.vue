<script setup>
  const quizs = await queryContent('quizs').find();
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl font-bold my-8">Liste des Quiz</h1>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      <NuxtLink 
        v-for="quiz in quizs"
        :key="quiz._path"
        :to="`/quiz/${quiz.slug}`"
        class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <h2 class="text-xl font-semibold mb-2">{{ quiz.title }}</h2>
        <p class="text-gray-500">Slug: {{ quiz.slug }}</p>
      </NuxtLink>
    </section>
  </div>
</template>
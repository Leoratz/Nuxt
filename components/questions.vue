<script setup>
  const quiz = inject('quiz');
</script>

<template>
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-bold my-8">{{ quiz.title }}</h1>
      <div class="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <div class="mb-6">
          <p class="text-sm font-semibold mb-2 text-gray-500"> Question {{ quiz.currentQuestionIndex.value + 1 }} sur {{ quiz.questions.length }}</p>
          <p class="text-lg font-semibold mb-2">
          {{ quiz.questions[quiz.currentQuestionIndex.value].text }}
          </p>
          <button
            v-for="(option, idx) in quiz.questions[quiz.currentQuestionIndex.value].options"
            :key="idx"
            class="mx-2 py-2 px-4 rounded-lg transition-colors duration-300"
            @click="quiz.checkAnswer(option)"
          >
            {{ option }}
          </button>
        </div>
      </div>
    </div>
  </template>
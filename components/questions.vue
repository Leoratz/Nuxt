<script setup>
  const quiz = inject('quiz');
</script>

<template>
  <div class="flex flex-col items-center px-4 md:px-8">
    <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight my-8 text-center text-blue-700">
      {{ quiz.title }}
    </h1>

    <div class="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div class="mb-6">
        <p class="text-sm md:text-base font-medium text-gray-500 mb-4">
          Question {{ quiz.currentQuestionIndex.value + 1 }} sur {{ quiz.questions.length }}
        </p>

        <p class="text-lg md:text-xl font-semibold mb-6 text-gray-800">
          {{ quiz.questions[quiz.currentQuestionIndex.value].text }}
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="(option, idx) in quiz.questions[quiz.currentQuestionIndex.value].options"
            :key="idx"
            class="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium text-center"
            @click="quiz.checkAnswer(option)"
          >
            {{ option }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
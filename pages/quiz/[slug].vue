<script setup>
  const { params } = useRoute();
  const data = await queryContent(`quizs/${params.slug}`).findOne();

  const quiz = useQuiz(data);
  provide('quiz', quiz);
</script>

<template>
  <div>
    {{ quiz.isFinished() }}
    <Questions v-if="!quiz.isFinished()" :quiz="quiz" />
    <FinishQuestions v-else :quiz="quiz" />
  </div>
</template>
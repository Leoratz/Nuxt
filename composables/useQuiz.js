export default function (quiz) {
    const score = ref(0);
    const currentQuestionIndex = ref(0);
    const startTime = ref(Date.now());

    function nextQuestion() {
        currentQuestionIndex.value++;
    }

    function checkAnswer(answer) {
        const endTime = Date.now();
        const timeTaken = (endTime - startTime.value) / 1000; 

        let points = 1;
        if (timeTaken < 1) {
            points = 5;
        } else if (timeTaken < 5) {
            points = 5 - (timeTaken - 1) * (4 / 4); 
        }

        if (answer === quiz.questions[currentQuestionIndex.value].answer) {
            score.value += parseFloat(points);
        }

        nextQuestion();
    }

    function isFinished() {
        return currentQuestionIndex.value >= quiz.questions.length;
    }

    function reset() {
        score.value = 0;
        currentQuestionIndex.value = 0;
        startTime.value = Date.now();
    }

    return {
        title: quiz.title,
        questions: quiz.questions,
        score,
        currentQuestionIndex,
        checkAnswer,
        isFinished,
        reset
    }
}
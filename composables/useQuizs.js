export default function () {
    const gettAllQuizs = async() => {
        const quizs = await queryContent('quizs').find();
        return quizs;
    }

    return { gettAllQuizs }
}
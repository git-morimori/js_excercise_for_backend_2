const axios = require('axios').default;
const API_URL = 'https://opentdb.com/api.php?amount=10';

// axios.get(API_URL)
//     .then((response) => {
//         const quizData = response.data.results;
//         console.log('クイズデータ : ', quizData);
//     });

async function asyncFunc() {

    try {
        const response = await axios.get(API_URL);
        const quizData = response.data.results;
        console.log('クイズデータ : ', quizData);
    } catch (error) {
        console.log(error.message);
    }
}
asyncFunc();
'use strict';

const numberOfFolms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFolms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {

    let firstQuestion = prompt('Один из последних фильмов?', '');
    let secondQuestion = prompt('На скольколо оцениваете его?', '');

    if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
        personalMovieDB.movies[firstQuestion] = secondQuestion;
        console.log('Done');
    } else {
        i--;
        console.log('Error');
    }
}

console.log(personalMovieDB);
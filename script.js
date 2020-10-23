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

    let fq = prompt('Один из последних фильмов?', '');
    let sq = prompt('На скольколо оцениваете его?', '');

    if (fq != null && sq != null && fq != '' && sq != '' && fq.length < 50) {
        personalMovieDB.movies[fq] = sq;
        console.log('Done');
    } else {
        i--;
        console.log('Error');
    }
}

console.log(personalMovieDB);
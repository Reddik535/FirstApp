'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let a = prompt('Один из последних фильмов?', '');
        let b = prompt('На скольколо оцениваете его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            i--;
            console.log('Error');
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    
    } else {
        console.log('Произошла ошибка');
    }
    
    function showMyDB(obj) {
        if (obj.privat === false) {
            console.log(personalMovieDB);
        }
    }
}

detectPersonalLevel();

function writeYourGenres(obj) {
    for (let i = 1; i < 4; i++) {
        obj.genres.push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
    }
}

writeYourGenres(personalMovieDB);
console.log(personalMovieDB);
'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        this.count = numberOfFilms;
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {

            let a = prompt('Один из последних фильмов?', '');
            let b = prompt('На сколько оцениваете его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                i--;
                console.log('Error');
            }
        }
    },

    detectPersonalLevel() {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');

        } else if (this.count > 30) {
            console.log('Вы киноман');

        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function () {
        if (this.privat === false) {
            console.log(personalMovieDB);
        }
        return this.privat;
    },

    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let ganre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            while (ganre == '' || ganre == null) {
                ganre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            }

            this.genres.push(ganre);
            //numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null
        }
    },

    toggleVisibleMyDB: function () {
        console.log(this.privat);
        this.privat = !this.showMyDB();
        console.log(this.privat);
    },

    showGanres: function () {
        this.genres.forEach(function (item, i, arr) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    }
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.showGanres();
//personalMovieDB.toggleVisibleMyDB();
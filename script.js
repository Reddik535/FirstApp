const numberOfFolms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFolms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[prompt('Один из последних фильмов?', '')] =
    prompt('На скольколо оцениваете его?', '');

personalMovieDB.movies[prompt('Один из последних фильмов?', '')] =
    prompt('На скольколо оцениваете его?', '');

console.log(personalMovieDB);

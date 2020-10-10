let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    
for (let i = 0; i < 2; i++) {
    let nameFilms = prompt('Один из последних просмотренных фильмов?'),
        ratingFilms = prompt('На сколько оцените его?');
    personalMovieDB.movies[nameFilms] = ratingFilms;
}

console.log(personalMovieDB.movies);
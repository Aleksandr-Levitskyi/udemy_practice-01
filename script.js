"use strick";

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let numberOfFilms; // нужно было использовать CONST

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (i = 0; i <= 2; i++) {
    let a = prompt("Ваш последний фильм?", "");
    if (a != null && a != "" && a.length < 50) {
      let b = prompt("На сколько вы его оцените?", "");
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы киноман!");
  } else {
    alert("Произошла ошибка");
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) console.log(personalMovieDB);
}

showMyDB(personalMovieDB["privat"]);

function writeYourGenres(genres) {
  for (let i = 1; i <= 3; i++) {
    //при работе с пользователем работать с !
    genres[i - 1] = prompt(`Ваш любымый жанр под номером ${i}`);
  }
}

writeYourGenres(personalMovieDB["genres"]);

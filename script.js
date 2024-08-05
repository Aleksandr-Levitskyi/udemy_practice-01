"use strick";

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", ""); // нужно было использовать CONST

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (i = 0; i <= 2; i++) {
  let a = prompt("Ваш последний фильм?", "");
  //лучше использовать тиехнические имена типа 'a', вместо имен типа 'movieTitle'

  //если пользователь в окне prompt нажимает отмена, то в переменную записывается null
  //проверка на null => a != null

  //мой вариант

  //   if (a === "" || a.length > 50 || null) {
  //     a = prompt("Ваш последний фильм?", "");
  //   } else {
  //     let b = prompt("На сколько вы его оцените?", "");
  //     personalMovieDB.movies[a] = b;
  //   }
  // }

  // вариант с курса
  if (a != null && a != "" && a.length < 50) {
    let b = prompt("На сколько вы его оцените?", "");
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10) {
  alert("Просмотрено мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  alert("Вы киноман!");
} else {
  alert("Произошла ошибка");
}

console.log(personalMovieDB);

// let movieTitle = prompt("ОДин из последних фильмов?", "");
// let movieRate = prompt("На сколько его оцените?", "");

// // лучше создавать однотипные переменные через запятую
// let a = prompt("Your the last movie?", ""),
//   b = prompt("Rate the movie", ""),
//   c = prompt("Your the last movie?", ""),
//   d = prompt("Rate the movie", "");

// // personalMovieDB.movies[movieTitle] = movieRate;
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// const num = "coon00";

// if (num === "" || num.length > 6) {
//   console.log("error");
// } else {
//   console.log("congratulation");
// }

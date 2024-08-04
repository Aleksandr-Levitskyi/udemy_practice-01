"use strick";

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const numberOfFilms = +prompt("How much films you wacthed?", ""); // нужно было использовать CONST

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// let movieTitle = prompt("ОДин из последних фильмов?", "");
// let movieRate = prompt("На сколько его оцените?", "");

// лучше создавать однотипные переменные через запятую
let a = prompt("Your the last movie?", ""),
  b = prompt("Rate the movie", ""),
  c = prompt("Your the last movie?", ""),
  d = prompt("Rate the movie", "");

// personalMovieDB.movies[movieTitle] = movieRate;
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const director = movies.map(function (element) {
    return element.director;
  });
  return director;
}
console.log(getAllDirectors(movies)),
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies(dramaMovie) {
    return dramaMovie.filter(
      (list) =>
        list.genre.includes('drama') && list.director === 'Steven Spielberg'
    ).lenght;
  };
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const movieScore = movies.reduce(function (x, y) {
    return x + y.score;
  }, 0);
  return (movieScore / movies.length).toFixed(2);
  return parseInt((movieScore / movies.length).toFixed(2));
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaMovie) {
  return averageRating(
    dramaMovie.filter((movie) => movie.genre.includes('Drama'))
  );
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie) {
  const sortYear = (a, b) => {
    return a.year - b.year;
  };
  return movie.sort(sortYear);
}
const sortedMovies = JSON.parse(JSON.stringify(movies));
console.log(orderByYear(sortedMovies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  function compare(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  }
  const orderedTitles = movies.sort((x, y) => compare_ab(x.title, y.title));
  return orderedTitles.slice(20);
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}

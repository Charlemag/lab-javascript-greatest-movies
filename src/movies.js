// Iteration 1: All directors? - Get the array of all directors.
//Bonus_: It seems some of the directors had directed multiple 
//movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => {
        return movie.director;
      });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
let newArray = moviesArray.filter((element) => {
    if (element.genre.includes("Drama")) {
      return element.director === "Steven Spielberg";
    }
  });
  return newArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!lotsOfMovies.length) {
        return 0;
      }
    
      let total = lotsOfMovies.reduce((a, b) => {
        if (b.rate) {
          return a + b.rate;
        } else {
          return a;
        }
      }, 0);
    
      return Number((total / lotsOfMovies.length).toFixed(2));
    }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArr = moviesArray.filter((element) => {
        return element.genre.includes('Drama')
    })
    return scoresAverage(dramaArr)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}
     let yearsArr = moviesArray.map((element) => {
            return element;
        })
        return yearsArr.sort((a, b) => {
            return a.year - b.year || a.title.localeCompare(b.title)
        })
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}
let titleArr = moviesArray.map((element) => {
    return element.title;
})
return titleArr.sort().slice(0,20);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let movieArr = [];
  for (let movie of movies){
    movieArr.push(movie.title);
  }
return movieArr;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  /*think of getLongestDinosaur.
  function getLongestDinosaur(dinosaurs) {
  let object = {};
  let length = 0; //<- will be converted to feet in for loop
  //Length must be converted to feet.
  if (dinosaurs.length === 0) {
    return object;
    //if there are no dinosaurs return an empty object
  } for (let i = 0; i < dinosaurs.length; i++) {
    if (dinosaurs[i].lengthInMeters > length) {
      length = dinosaurs[i].lengthInMeters;
      dinoKey = dinosaurs[i].name;
      lengthInFeet = length * 3.281;
    }
  } object[dinoKey] = lengthInFeet;
  return object; */
if (!movies.length){
  return movies.length;
}
let highestMetascore = Number(movies[0].metascore)
for (let i = 0; i < movies.length; i++){
if (movies[i].metascore > highestMetascore){
  highestMetascore = movies[i].metascore;
}
} return Number(highestMetascore)

}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let sum = 0;
  if (!movies.length){
    return movies.length;
  }
  for (const rating of movies){
    sum += Number(rating.imdbRating) //the average is the sum of all numbers divided by the quantity of numbers added together
    averageRating  = sum / movies.length //divide by the amount of movies because they each have one imdb rating value
  } return averageRating;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let obj = {};
  if (!movies.length){
    return obj;
  } else {
    for (const movie of movies){
      const rated = movie.rated; //we will assign this as the key in obj{};
      if (rated in obj) {
        obj[rated]++;
      } else {
        obj[rated] = 1
      }
    }
  } return obj
}
//       if (movie.rated.includes(rated)){
//         obj[rated] += 1
//       } else{
//         obj[rated = 1]
//       }
//     }
//   } return obj
// }

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
let matching = null;//if array is empty, return null
if (!movies.length){
return null; 
} for (let i = 0; i < movies.length; i++){
  if (movies[i].imdbID === id) //if movie at index's imdb id matches id param, return the movie object that matched the id param.
  matching = movies[i]
}

return matching
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let arr = [];
let genresFormatted = genre[0].toUpperCase() + genre.slice(1).toLowerCase(); 
//genre: "FANTASY" //> "Fantasy"
for (let movie of movies){
  if (movie.genre.includes(genresFormatted)){
    arr.push(movie)
  }
} return arr

}
  
  //  function formatGenre(genre){
  //    genresFormatted = genre[0].toUpperCase() + genre.slice(1).toLowerCase();
  // return genresFormatted
  // }
  // //console.log(formatGenre(genre))
  //  if (!movies.length || !movies.includes(formatGenre(genre))){
  // return arr
  //  } else {
  //  for (const movie of movies){
  //  moviesFormatted = movie.genre[0]+movie.slice(1).toLowerCase();
  //  if (moviesFormatted.includes(formatGenre(genre))){
  //   arr.push(movie)
  //  }
  // }
  // }return arr
  // }
  //   for (const movie of movies){
    //     genresFormatted = movie.genre.toLowerCase();
//   for (let i = 0; i < movie.length; i++){
//     if (genresFormatted[i].includes(genre)){
//       arr.push(movies[i])
//     }
//   }
  
//   return arr
// }

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let arr = [];
  //movies.released = "NumNum Str NumNumNumNum" and length is always 11.
  //Number x2(1,2), space (3), stringMonth(4,5,6), space(7), year(8,9,10,11)
  //use slice() method to get just the year.
  // for (movie of movies){
  // console.log(movie.released.length)
  
for (const movie of movies){
  if(movie.released.slice(7) <= year) //at or before. lesser or equal
arr.push(movie)
}
return arr
}


/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() {}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};

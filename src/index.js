const $ = require('jquery');
/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies, postMovie} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  $('.container').html("");
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
    $('.container').append(`<h1>id#${id} - ${title} - rating: ${rating}</h1>`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});


$('#post-movie').click(
  postMovie($('#movie-title-submit'), 5)
)

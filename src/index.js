const $ = require('jquery');
/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies, postMovie, editMovie, deleteMovie} = require('./api.js');
function renderMovie() {
  getMovies().then((movies) => {
    console.log('Here are all the movies:');
    $('.container').html("");
    $('#movie-dropdown').html("");
    $('#movie-deletion-dropdown').html("");
    movies.forEach(({title, rating, id}, ind) => {
      console.log(ind);
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      $('.container').append(`
        <h1 class="movie-listing">${title} - rating: ${rating}</h1>
<!--        <hr style="color: whitesmoke">-->
        `);
      $('#movie-dropdown').append(`<option name="movieId" value="${id}">${title}</option>`);
      $('#movie-deletion-dropdown').append(`<option name="movieId" value="${id}">${title}</option>`);
    });
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });
}
  renderMovie();


$('#post-movie').click(function(e) {
  e.preventDefault();
  $('.container').html("<h1 style='color: whitesmoke'>Loading...</h1>");
  postMovie($('#movie-title-submit').val(), $('input[name="rating-button"]:checked').val());
  renderMovie();
});

$('#edit-movie').click(function() {
  editMovie($('#movie-title-edit').val(), $('input[name="rating-edit"]:checked').val(),parseInt($('#movie-dropdown').val()));
  renderMovie();
});

$('#delete-movie-button').click(function() {
  deleteMovie(parseInt($('#movie-deletion-dropdown').val()));
  renderMovie();
});

$('#toggle-add').click(function() {
  $('#add-form').toggleClass('hidden-form');
  $('#edit-form').addClass('hidden-form');
  $('#delete-form').addClass('hidden-form');
})
$('#toggle-edit').click(function() {
  $('#edit-form').toggleClass('hidden-form');
  $('#delete-form').addClass('hidden-form');
  $('#add-form').addClass('hidden-form');
})
$('#toggle-delete').click(function() {
  $('#delete-form').toggleClass('hidden-form');
  $('#edit-form').addClass('hidden-form');
  $('#add-form').addClass('hidden-form');
})



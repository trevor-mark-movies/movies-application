module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
        .then(response => response.json());
  },

  postMovie: (title, rating) => {
    const moviePost = {title, rating};
    const url = 'api/movies';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moviePost),
    };
    fetch(url, options)
        .then(console.log('success'))
        .catch(error => console.log(error));
  },
  editMovie: (title, rating, id) => {
    const moviePost = {title, rating};
    const url = `api/movies/${id}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moviePost),
    };
    fetch(url, options)
        .then(console.log('success'))
        .catch(error => console.log(error));
  },
  deleteMovie: (id) => {
    const url = `api/movies/${id}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    fetch(url, options)
        .then(console.log('success'))
        .catch(error => console.log(error));
  }

};
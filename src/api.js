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
  }
};

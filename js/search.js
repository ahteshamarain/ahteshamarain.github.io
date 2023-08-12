        document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("search-form");
            const detailsDiv = document.getElementById("movie-details");
            const trailerModal = new bootstrap.Modal(document.getElementById("trailerModal"));

            form.addEventListener("submit", function (event) {
                event.preventDefault();

                const apiKey = "81bdec9c59454b58b39a05956af722b1";
                const movieTitle = document.getElementById("movie-title").value;
                const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieTitle)}`;

                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (data.results && data.results.length > 0) {
                            const movie = data.results[0];
                            displayMovieDetails(movie);
                        } else {
                            detailsDiv.innerHTML = "<p>No movie found with that title.</p>";
                        }
                    })
                    .catch(error => console.error("Error fetching data:", error));
            });

            function displayMovieDetails(movie) {
                detailsDiv.innerHTML = `
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-fluid" alt="${movie.title} Poster">
                        </div>
                        <div class="col-md-8">
                            <h2>${movie.title}</h2>
                            <p>Release Date: ${movie.release_date}</p>
                            <p>Overview: ${movie.overview}</p>
                            <button class="btn btn-primary" id="watch-trailer-button">Watch Trailer</button>
                        </div>
                    </div>
                `;

                const watchTrailerButton = document.getElementById("watch-trailer-button");
                watchTrailerButton.addEventListener("click", function () {
                    fetchTrailer(movie.id);
                });
            }

            function fetchTrailer(movieId) {
                const apiKey = "81bdec9c59454b58b39a05956af722b1";
                const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (data.results && data.results.length > 0) {
                            const trailerKey = data.results[0].key;
                            const trailerContent = `
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/${trailerKey}" frameborder="0" allowfullscreen></iframe>
                            `;

                            const trailerContentElement = document.getElementById("trailer-content");
                            trailerContentElement.innerHTML = trailerContent;

                            // Open the trailer modal
                            trailerModal.show();
                        } else {
                            console.error("No trailer data available for this movie.");
                        }
                    })
                    .catch(error => console.error("Error fetching trailer data:", error));
            }
        });


        
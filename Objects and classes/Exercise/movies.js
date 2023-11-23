function movies(inputArr) {
    let movies = [];

    inputArr.forEach(element => {
        if (element.includes('addMovie')) {
            let currentMovie = element.split('addMovie ')[1];

            movies.push({ name: currentMovie })
        } else if (element.includes('directedBy')) {
            let [currentMovie, director] = element.split(' directedBy ');

            let searching = movies.find((el) => el.name === currentMovie);

            if (searching) {
                searching['director'] = director;
            }
        } else if (element.includes('onDate')) {
            let [currentMovie, date] = element.split(' onDate ');

            let searching = movies.find((el) => el.name === currentMovie);

            if (searching) {
                searching['date'] = date;
            }
        }
    });

    movies.forEach((movie) => {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)
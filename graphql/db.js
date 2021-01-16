export let movies = [
    {
        id: "1",
        name: "Star Wars",
        score: 4
    },
    {
        id: "2",
        name: "Avengers",
        score: 5
    },
    {
        id: "3",
        name: "Spiderman",
        score: 5
    },
    {
        id: "4",
        name: "Logan",
        score: 2
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => String(id) === movie.id);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = { 
        id: `${movies.length + 1}`,
        name, score};

        movies.push(newMovie);
        return newMovie;
}
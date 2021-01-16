
// import { getMovies, getById, addMovie, deleteMovie } from './db.js';

import {getMovies} from './yts.js';

const resolvers = {
    //db.js
    // Query: {
    //     movies: () => getMovies(),
    //     movie: (_, { id }) =>
    //         getById(id)
    // },
    // Mutation: {
    //     addMovie: (_, {name, score}) => addMovie(name, score),
    //     deleteMovie: (_,  {id}) => deleteMovie(id)
    // }
    //yts.js

    Query : {
        movies: (_, {limit, rating}) => getMovies(limit, rating)
    }
}

export default resolvers;
// import { getMovies, getById, addMovie, deleteMovie } from './db.js';

import { getMovies, getMovie, getSuggestions } from "./yts.js";

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

  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;

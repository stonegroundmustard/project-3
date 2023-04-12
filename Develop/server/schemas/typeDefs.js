const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedMovies: [Movie]!
}
type Movie {
    movieId: String!
    title: String!
    link: String!
    genre: [String]!
    image: String!
}

  type Query {
     user: User
  }

  type Mutation {
    createUser(email: String!, username: String!, password: String!): User
    savedMovies(_id: ID!, movie: Movie! ): User
    deleteMovie(movieId: String!, _id: ID!): User
  }
`;

module.exports = typeDefs;
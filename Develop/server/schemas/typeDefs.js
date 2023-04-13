const { gql } = require("apollo-server-express");

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
        description: String!
        link: String!
        genres: [String]!
        image: String!
    }

    input MovieInput {
        movieId: String!
        title: String!
        description: String!
        link: String!
        genres: [String]!
        image: String!
    }

    type Query {
        users: [User]
    }

    type Mutation {
        createUser(email: String!, username: String!, password: String!): User
        addMovie(_id: ID!, movie: MovieInput!): User
        deleteMovie(movieId: String!, _id: ID!): User
    }
`;

module.exports = typeDefs;

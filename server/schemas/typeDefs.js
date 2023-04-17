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
        movieId: Int!
        title: String!
        link: String!
        genres: [String]!
        image: String!
    }

    type Auth {
        token: ID!
        user: User
        }

    input MovieInput {
        movieId: Int!
        title: String!
        link: String!
        genres: [String]!
        image: String!
    }

    type Query {
        users: [User]
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(email: String!, username: String!, password: String!): Auth
        addMovie(movie: MovieInput!): User
        deleteMovie(movieId: Int!): User
    }
`;

module.exports = typeDefs;

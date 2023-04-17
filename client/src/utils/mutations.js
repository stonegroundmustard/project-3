import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser(
        $email: String!
        $username: String!
        $password: String!
    ) {
        createUser(email: $email, username: $username, password: $password) {
            token
            user {
                _id
                email
                username
            }
        }
    }
`;

export const ADD_MOVIE = gql`
    mutation AddMovie($movie: MovieInput!) {
        addMovie(movie: $movie) {
            _id
            email
            username
            password
            savedMovies {
                movieId
                title
                link
                genres
                image
            }
        }
    }
`;

export const DELETE_MOVIE = gql`
    mutation DeleteMovie($movieId: Int!) {
        deleteMovie(movieId: $movieId) {
            _id
            savedMovies {
                title
                movieId
            }
        }
    }
`;

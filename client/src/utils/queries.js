import { gql } from "@apollo/client";

export const GET_ME = gql`
    query Me {
        me {
            _id
            username
            email
            password
            savedMovies {
                title
                movieId
                link
                image
                genres
            }
        }
    }
`;

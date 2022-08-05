import { gql } from "@apollo/cliet";

// Query User
export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            thoughts {
                _id
                thoughtText
                createdAt
            }
        }
    }
`;

// Query Thoughts
export const QUERY_THOUGHTS = gql`
    query getThoughts {
        thoughts {
            _id
            thoughtText
            thoughtAuthor
            createdAt
        }
    }
`;

// Query Single Thought of User
export const QUERY_SINGLE_THOUGHT = gql`
    query getSingleThought($thoughtId: ID!) {
        thought(thoughtId: $thoughtId) {
            _id
            thoughtText
            thoughtAuthor
            createdAt
            comments {
                _id
                commentText
                commentAuthor
                createdAt
            }
        }
    }
`;

// Query Thoughts of User
export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            thoughts {
                _id
                thoughtText
                thoughtAuthor
                createdAt
            }
        }
    }
`;
import { gql } from '@apollo/client';

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
        comments {
          _id
          commentText
          author
          createdAt
        }
      }
    }
  }
`;

// Query Checkout
export const QUERY_CHECKOUT = gql`
  query getCheckout($drinks: [ID]!) {
    checkout(drinks: $drinks) {
      session
    }
  }
`;

// Query Thoughts
export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      username
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
      username
      createdAt
      comments {
        _id
        commentText
        author
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
        username
        createdAt
      }
    }
  }
`;

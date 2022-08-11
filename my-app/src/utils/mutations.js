import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        password
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation createThought($thoughtText: String!) {
    createThought(content: $content) {
      _id
      content
      username
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation createComment($thoughtId: ID!, $commentText: String!) {
    createComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      content
      username
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

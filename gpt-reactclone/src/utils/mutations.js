import { gql } from '@apollo/client';

// export const ADD_USER = gql`
//   mutation addUser($email: String!, $username: String!, $password: String!) {
//     addUser(email: $email, username: $username, password: $password) {
//         token
//         username
//         email
//         password
//         history {
//             _id
//         }
//     }
//   }
// `;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $history: [ID]
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      history: $history
    ) {
      token
      user {
        _id
        username
        email
        history
      }
    }
  }
`;

export const GENERATE_RESPONSE = gql`
  mutation generateResponse($inputText: String!) {
    generateResponse(inputText: $inputText) {
      inputText
      answer
    }
  }
`;
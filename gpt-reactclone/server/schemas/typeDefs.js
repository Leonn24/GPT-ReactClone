const typeDefs =`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  type ResponsePayload {
    inputText: String!
    answer: String!
  }

  type Query {
    user: User!
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    generateResponse(inputText: String!): ResponsePayload!
  }
`;

module.exports = typeDefs;

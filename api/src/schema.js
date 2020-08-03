const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type Query {
    pets(input: petInput!): [Pet]!
    pet(input: petInput!): Pet
  }
  type Mutation {
    newPet(input: petInput!): Pet
  }
  input petInput {
    name: String
    type: String
  }
  type User {
    id: ID!
    username: String!
  }
  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    img: String
    buddies: [Pet!]
  }
`;

module.exports = typeDefs;

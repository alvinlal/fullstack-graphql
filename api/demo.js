const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User!
  }
`;

const resolvers = {
  Query: {
    me() {
      return {
        email: "alvinzzz2001@gmail.com",
        avatar: "avatar.jpg",
        friends: [],
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000).then(() => console.log("on port 3000"));

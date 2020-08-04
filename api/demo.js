const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }
  enum shoeType {
    JORDAN
    NIKE
    ADDIDAS
    WOODLAND
  }
  union footwear = sneaker | boots

  interface shoe {
    brand: shoeType!
    size: Int!
  }

  type sneaker implements shoe {
    brand: shoeType!
    size: Int!
    sport: String!
  }
  type boots implements shoe {
    brand: shoeType!
    size: Int!
    hasGrip: Boolean!
  }

  type Query {
    me: User!
    shoes: [shoe]!
  }
`;

const resolvers = {
  Query: {
    shoes() {
      return [
        { brand: "NIKE", size: 9, sport: "football" },
        { brand: "ADDIDAS", size: 12, sport: "basketball" },
        { brand: "WOODLAND", size: 10, hasGrip: true },
      ];
    },
    me() {
      return {
        email: "alvinzzz2001@gmail.com",
        avatar: "avatar.jpg",
        friends: [],
      };
    },
  },
  shoe: {
    __resolveType(shoe) {
      if (shoe.sport) return "sneaker";
      else return "boots";
    },
  },
  footwear: {
    __resolveType(footwear) {
      if (footwear.sport) return "sneaker";
      else return "boots";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000).then(() => console.log("on port 3000"));

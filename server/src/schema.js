const { makeExecutableSchema } = require('graphql-tools');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const typeDefs = `
input CategoriesInput {
    set: [Category!]
  }
  
  enum Category {
    WOMEN
    MEN
    CHILDREN
    HOME
  }
  
  enum Condition {
    NEW
    VG_CONDITION
    G_CONDITION
  }
  
  input ConditionInput {
    set: [Condition!]
  }
  
  scalar DateTime
  
  input ImagesInput {
    set: [String!]
  }

  input ParcelTypeInput {
      set: [ParcelType!]
  }
  
  type Item implements Node {
    id: ID!
    title: String!
    description: String!
    images: [String!]!
    thumbnail: String!
    price: Float!
    user: User
    condition: [Condition!]
    type: [Type!]
    categories: [Category!]
    size: String
    color: String!
    brand: String!
    nbViews: Int
    parcelType: [ParcelType]
    nbInterested: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  
  type Location implements Node {
    id: ID!
    number: Int!
    street: String!
    city: String!
    country: String!
    postalCode: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  
  type Mutation {
    createItem(brand: String!, title: String!, description: String!, categories: CategoriesInput, type: TypeInput, size: String, color: String!, condition: ConditionInput, price: Float!, user: UserInput!, parcelType: ParcelTypeInput, images: ImagesInput!, thumbnail: String!): Item!
    signup(username: String!, email: String!, password: String!, tempToken: String): User!
    verifyAccount(email: String!, tempToken: String!): User!
    signin(email: String!, password: String!): User!
    signout: SuccessMessage
  }
  
  """An object with an ID"""
  interface Node {
    """The id of the object."""
    id: ID!
  }
  
  type Query {
    allItems: [Item]!
    getItemById(id: ID!): Item!
    recentItems: [Item]!
    me: User
  }
  
  type SuccessMessage {
    message: String
  }
  
  enum Type {
    CLOTHES
    SHOES
    ACCESSORIES
    DECORATION
  }

  enum ParcelType {
    SMALL
    MEDIUM
    LARGE
  }
  
  input TypeInput {
    set: [Type!]
  }
  
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    isAdmin: Boolean!
    isVerified: Boolean!
  }
  
  input UserConnectInput {
    username: String
    email: String
  }

  input UserCreateWithoutItemsInput {
      username: String
      email: String
      password: String

  }
  
  input UserInput {
    connect: UserConnectInput
    create: UserCreateWithoutItemsInput,
  }
`

const schema = makeExecutableSchema({
    typeDefs,
    resolvers: {
        Query,
        Mutation
    }
})

module.exports = {
    schema
}
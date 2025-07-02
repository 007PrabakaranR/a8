// import gql from "graphql-tag";

// const typeDefs = gql`
//   type User {
//     fname: String
//     age: Int
//     isMarried: Boolean
//     hobby: [String]
//     id: ID!
//   }
//   input inputUser {
//     fname: String
//     age: Int
//     isMarried: Boolean
//     hobby: [String]
//   }

//   type Query {
//     getUser: [User]
//   }

//   type Mutation {
//     addUser(data: inputUser): User
//     updateUser(id: ID!, data: inputUser): User
//     deleteUser(id: ID!): String
//   }
// `;
// export default typeDefs;











import gql from "graphql-tag";

const typeDefs = gql`

type User{
fname:String
age:Int
isMarried:Boolean
hobby:[String]
id:ID!
}

input inputUser{
fname:String
age:Int
isMarried:Boolean
hobby:[String]
}

type Query{
getUser:[User]
}

type Mutation{
addUser(data:inputUser):User
deleteUser(id:ID!):String
updateUser(id:ID!,data:inputUser):User
}
`;

export default typeDefs;


































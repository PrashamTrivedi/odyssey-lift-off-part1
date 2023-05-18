const gql = require("graphql-tag")

const typeDefs = gql`
"A track is group of module that teaches specific topic"
type Tracks{
    "Track's ID"
    id: ID!
    "Track's Title"
    title: String!
    "Track's Author"
    author: Author! 
    "Image URL of Track's Thumbnail"
    thumbnail:String!
    "Length Of the course"
    length: Int
    "Number of modules"
    modulesClount: Int
}

"Defines the author"
type Author {
    "Author ID"
    id: ID!
    "Author Name"
    name: String!
    "Their photo url"
    photoURL: String!
}
`


module.export=typeDefs
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLEnumType } = require("graphql");
const { GraphQLDateTime } = require("graphql-scalars");

const ProvinsiType = new GraphQLObjectType({
  name: "Provinsi",
  fields: () => ({
    id: {type: GraphQLID},
    nama: {type: GraphQLString},
    kode: {type: GraphQLString},
  }),
});


module.exports = Provinsi


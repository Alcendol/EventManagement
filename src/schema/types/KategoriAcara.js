const { GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql");

const KategoriAcaraType = new GraphQLObjectType({
  name: "KategoriAcara",
  fields: () => ({
    id: {type: GraphQLID},
    provinsi_id: {type: GraphQLID},
    nama: {type: GraphQLString},
    kode: {type: GraphQLString},
  }),
});


module.exports = Kota 




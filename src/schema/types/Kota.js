const { GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql");

const KotaType = new GraphQLObjectType({
  name: "Kota",
  fields: () => ({
    id: {type: GraphQLID},
    provinsi_id: {type: GraphQLID},
    nama: {type: GraphQLString},
    kode: {type: GraphQLString},
  }),
});


module.exports = Kota 



const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");
const EventPermissionType = require("./types/EventPermission");
const EventPermission = require("../models/EventPermission");
const Provinsi = require("../models/Provinsi");
const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getEventPermission: {
      type: new GraphQLList(EventPermissionType),
      resolve(parent, args) {
        return EventPermission.getEventPermission(args);
      },
    },
    getProvinsi: {
      type: new GraphQLList(ProvinsiType),
      resolve(parent, args){
        return Provinsi.getProvinsi();
      }
    },
    getKota: {
      type: new GraphQLList(KotaType),
      resolve(parent, args){
        return Provinsi.getKota(args.provinsiId);
      }
    },
  },
});

module.exports = Query

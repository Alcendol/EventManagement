const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLEnumType } = require("graphql");
const { GraphQLDateTime } = require("graphql-scalars");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    role: {type: UserRoleType},
    kode_unit: {type: GraphQLString},
    created_at: {type: GraphQLDateTime},
    updated_at: {type: GraphQLDateTime}
  }),
});

const UserRoleType = new GraphQLEnumType({
  name: "UserRole",
  values: {
    operator: {value: "Operator"},
    verifikator: {value: "Verifikator"}
  }
});

module.exports = {UserType, UserRoleType}

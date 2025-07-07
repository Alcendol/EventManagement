const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
const { GraphQLDateTime } = require("graphql-scalars");

const EventPermissionType = new GraphQLObjectType({
  name: "EventPermission",
  fields: () => ({
    id: { type: GraphQLID },
    nama_acara: { type: GraphQLStringi },
    penyelenggara: { type: GraphQLString },
    jumlah_peserta: { type: GraphQLInt },
    tanggal_mulai: { type: GraphQLString },
    tanggal_selesai: { type: GraphQLString },
    jam_mulai: { type: GraphQLString },
    jam_selesai: { type: GraphQLString },
    lokasi: { type: GraphQLString },
    provinsi_id: { type: GraphQLInt },
    kota_id: { type: GraphQLInt },
    kategori_acara: { type: GraphQLInt },
    biaya: { type: GraphQLString },
    deskripsi: { type: GraphQLString },
    dokumentasi_url: { type: GraphQLString },
    user_id: { type: GraphQLID },
  }),
});

module.exports = EventPermissionType;

import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema({
    rss: {
        type: String,
    },
    nbf: {
        type: Number,
    },
    aud: {
        type: String,
    },
    sub: {
        type: String,
        requred: true,
    },
    email: {
        type: String,
    },
    email_verified: {
        type: Boolean,
    },
    azp: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    given_name: {
        type: String,
    },
    family_name: {
        type: String,
    },
    iat: {
        type: Number,
    },
    exp: {
        type: Number,
    },
    jti: {
        type: String,
    }
});

const user = mongoose.model('whatsapp', mongooseSchema);

export default user;
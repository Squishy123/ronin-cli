exports.MAKE_MIGRATION = `
export default class %MIGRATION% {
    //Migration update
    up() {

    }

    //Migration rollback
    down() {

    }
}`;

exports.MAKE_MODEL = `
import mongoose from 'mongoose';

//Defined Schema
const Schema = mongoose.Schema({});

let %MODEL% = mongoose.model('%MODEL%', Schema);

//Model Functions
%MODEL%.getAll = () => %MODEL%.find({});

export default %MODEL%`;

exports.MAKE_ROUTE = `
export default {
    method: "%METHOD%",
    path: "%PATH%",
    handler: []
}`;

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

export default %MODEL%;`;

exports.MAKE_ROUTE = `
const %ROUTE% = {
    method: "%METHOD%",
    path: "%PATH%",
    handler: []
}

export default %ROUTE%;`;

exports.MAKE_MODULE = `
function %MODULE% () {
    //Module
}

export default %MODULE%;`;

exports.MAKE_MIDDLEWARE = `
function %MIDDLEWARE% (req, res) {
    //Middleware
}

export default %MIDDLEWARE%;`;
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

//SCHEMA
const %MODEL%Schema = mongoose.Schema({});

//STATICS
//Get a list of all %MODEL%'s that satisfy the query(default=null)
%MODEL%Schema.statics.getAll = async function(query) {
    return await this.find(query);
} 

//Get a single %MODEL% that satisfies the query
%MODEL%Schema.statics.getOne = async function(query) {
    return await this.findOne(query);
}

//Update a single %MODEL% that satisfies the filter with doc
%MODEL%Schema.statics.updateOne = async function(filter, doc) {
    let instance = await this.findOne(filter);
    Object.assign(instance, doc);
    await instance.save();
    return instance;
}

let %MODEL% = mongoose.model('%MODEL%', %MODEL%Schema);

export default %MODEL%;`;

exports.MAKE_ROUTE = `
const %ROUTE% = {
    method: "%METHOD%",
    enabled: true,
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

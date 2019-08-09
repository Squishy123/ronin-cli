module.exports = (args) => {
    //null
    if(args[0] == 'list') {
        console.log(
            `Usage: ronin list:[query]
Supported Queries: all, migration, model, route`);
    }

    if(args[0] == 'list:all') {

    }
}
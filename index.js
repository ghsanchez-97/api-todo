'use strict'

const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const app = require('./app');
const port = process.env.PORT || 3000;

mongoose.set('useFindAndModify',false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Ghsanchez:Gh$anchez27@todo.cpfoj.mongodb.net/Todo?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true}, (e, res) => {
    if(e){
        throw e;
    }else{
        console.log('The database is running correctly...');
        app.listen(port, function(){
            console.log('Server API Todo liste ' + port);
        });
    }
});
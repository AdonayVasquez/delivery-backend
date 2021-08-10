import mongoose from 'mongoose';

let servidor = 'localhost:27017';
let db = 'lior';

mongoose.connect(`mongodb://${servidor}/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log("Se conecto a mongo"))
    .catch(error => console.log(error))
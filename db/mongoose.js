const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/';
const dbName = 'galleryDB';


mongoose.set('strictQuery', true)

mongoose.connect(url+dbName).then(()=>console.log('connected to mongodb'))
  .catch(e=>console.log(e));


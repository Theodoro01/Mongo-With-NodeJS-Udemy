const mongoose  = require("mongoose");
const articleModel = require("./models/article")

mongoose.connect('mongodb://localhost:27017/aprendendoMongo');

const Article  = mongoose.model("Article", articleModel);



Article.find({"_id": "62964f65e26839d4e7fc84ae"}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
});


// Article.findByIdAndUpdate("62964f65e26839d4e7fc84ae", {
//     title: "NODE JS",
//     author: "Theodoro Vinicius"
// }).then(() => {
//     console.log("ATUALIZADO!")
// }).catch(err => {
//     console.log(err)
// });


// Article.findByIdAndDelete({"_id":"62964f6cb35a3d01152f9448"}).then( ()=> {
//     console.log("Dado removido!")
// }).catch(err => {
//     console.log(err)
// });

// Article.findOne({"_id":"62964f6cb35a3d01152f9448"}).then(article => {
//     console.log(article)
// }).catch(err => {
//     console.log(err)
// });


// Article.find({"_id":"62964f6cb35a3d01152f9448"}).then(article => {
//     console.log(article)
// }).catch(err => {
//     console.log(err)
// });


// Article.find({}).then(articles => {
//     console.log(articles)
// }).catch(err => {
//     console.log(err)
// });

// const artigo = new Article({title: "Hello World!", 
//     author: "Hello World!",
//     body: "Hello World!", 
//     special: true,
//     resume:{
//         content: "Hello World!",
//         author: "Hello World!"
//     }
// });

// artigo.save().then(() => {
//     console.log("Artigo salvo!");
// }).catch(err => {
//     console.log(err);
// });
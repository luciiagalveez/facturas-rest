const mongoClient = require("mongodb").MongoClient;

const connectionString = "mongodb+srv://admin:lucia@clustercurso.azsoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoClient.connect(connectionString, {useUnifiedTopology:true}, function(err, client){

    if(err){
        console.error(err);
    }

    console.log("Contectados a la base de datos");

});


mongoClient.connect(connectionString, {useUnifiedTopology:true},  function(err, client){

    // ...
    
});

mongoClient.connect(connectionString, {useUnifiedTopology:true}).then(client => {

    //Todo el código de acceso a bases de datos
    console.log("Conectado a la base de datos");
    const db = client.db("myFirstDatabase")

    let facturas = db.collection('facturas')
   

}).catch(error => console.error(err));
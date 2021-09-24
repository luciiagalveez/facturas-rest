const port = 3000;
const express = require("express");
const cors = require("cors");
const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;

const app = express();

app.use(cors());
app.use(express.json());


//Controladores (gestión de facturas)

mongoClient.connect(connectionString, { useUnifiedTopology: true }).then(client => {

    //Todo el código de acceso a bases de datos
    console.log("Conectado a la base de datos");

    const facturas = client.db("myFirstDatabase").collection('facturas');

    //Envío POST, crear
    app.post("/facturas", function (request, response) {

        let factura = request.body;

        // inserta la factura en base de datos
        facturas.insertOne(factura).then(result => {
            console.log(result);
        }).catch(err => {
            console.error(err);
        });

        response.send("ok");

    });

    //Envío GET, listar
    app.get("/facturas/:facturaId", (request, response) => {

        let facturaId = request.params.facturaId;
        let query = {_id: Number.parseInt(facturaId)};

        // recuperar la factura de la base de datos
        facturas.findOne(query).then(factura => {
            response.json(factura);
        }).catch(err => {
            console.error(err);
        });
        

    });


    //Envío PUT, actualizar
    app.put("/facturas/:facturaId", function (request, response) {

        let facturaId = request.params.facturaId;

        // ...
        response.json();

    });


    //Envío DELETE, borrar
    app.delete("/facturas/:facturaId", (request, response) => {

        let facturaId = request.params.facturaId;
        // ...
        response.json();

    });


    // Recuperar facturas
    app.get("/facturas", (request, response) => {

        // recuperar la factura de la base de datos
        facturas.find().toArray().then(facturas => {
            response.json(facturas);
        }).catch(err => {
            console.error(err);
        });
    });


    //Recuperar facturas por id
    app.get("/facturas/:facturaId", (request, response) => {

        let facturaId = request.params.facturaId;

        let o_id = new mongo.ObjectId(facturaId);
        let query = { _id: o_id };

        // recuperar la factura de la base de datos
        facturas.findOne(query).then(factura => {
            response.json(factura);
        }).catch(err => {
            console.error(err);
        });
    });

    

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });


}).catch(error => console.error(err));
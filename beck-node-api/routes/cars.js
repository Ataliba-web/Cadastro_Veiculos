// import required essentials
const express = require('express');
// create new router
const router = express.Router();
// create a JSON data array
let data = [];

// HTTP methods ↓↓ starts here.

// READ
// api end-point retorna array de dados JSON
router.get('/', function (req, res) {

    var fs = require("fs");
    fs.readFile("./beck-node-api/bd/bd_veiculos.json", "utf8", function (err, jsonData) {
        if (err) {
            return console.log("Erro ao ler arquivo");
        }
        var data = JSON.parse(jsonData); // faz o parse para json
        res.status(200).json(data);
    });


});

// READ
// api end-point, pelo ID retorna um objeto do array de dados JSON
router.get('/:id', function (req, res) {

    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// CREATE
//API adiciona um novo objeto à lista de itens
router.post('/', function (req, res) {

    var fs = require('fs');

    try {
        jsonData = fs.readFileSync('./beck-node-api/bd/bd_veiculos.json', 'utf8');
        data = JSON.parse(jsonData)
    }
    catch (err) {
        console.error("Ocorreu um erro ao abrir o arquivo");
        console.log(err);
    }

    let itemIds = data.map(item => item.id);

    // criar um novo id (basicamente +1 do último objeto de item)
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

    // criar um objeto de novo item
    let newItem = {
        id: newId,
        modelo: req.body.modelo,
        marca: req.body.marca,
        placa: req.body.placa,
        renavam: req.body.renavam,
        chassi: req.body.chassi,
        ano: req.body.ano
    };

    // novo objeto de item para array de dados de carros
    data.push(newItem);

    //****Conversão e gravação de dados no arquivo json*****/
    convertJson();

    // retorna com status 201
    // 201 significa Criado. A solicitação foi atendida e
    // resultou na criação de um veículo.
    res.status(201).json(newItem);
});

// UPDATE
//API altera um objeto na lista de itens
router.put('/:id', function (req, res) {

    var fs = require('fs');

    try {
        jsonData = fs.readFileSync('./beck-node-api/bd/bd_veiculos.json', 'utf8');
        data = JSON.parse(jsonData)
    }
    catch (err) {
        console.error("Ocorreu um erro ao abrir o arquivo:");
        console.log(err);
    }

    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let updated = {
            id: found.id,
            modelo: req.body.modelo,
            marca: req.body.marca,
            placa: req.body.placa,
            renavam: req.body.renavam,
            chassi: req.body.chassi,
            ano: req.body.ano
        };

        // encontra o índice do objeto no array de dados
        let targetIndex = data.indexOf(found);

        // substitui o objeto da lista de dados
        data.splice(targetIndex, 1, updated);

        //****Conversão e gravação de dados no arquivo json*****/
        convertJson();

    // retorna com status 204
    // 204 significa alterado. A solicitação foi atendida e
    // resultou na alteração de um veículo.
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

// DELETE
// API deleta um objeto na lista de itens
router.delete('/:id', function (req, res) {

    var fs = require('fs');

    try {
        jsonData = fs.readFileSync('./beck-node-api/bd/bd_veiculos.json', 'utf8');
        data = JSON.parse(jsonData)
    }
    catch (err) {
        console.error("Ocorreu um erro ao abrir o arquivo:");
        console.log(err);
    }

    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1);
    }

    //****Conversão e gravação de dados no arquivo json*****/
    convertJson();

    // retorna com status 204
    // 204 significa deletado. A solicitação foi atendida e
    // resultou na exclusão de um veículo.
    res.sendStatus(204);
});

function convertJson() {
    var fs = require('fs');
    let i = 0;
    let string;
    string = "[";
    while (i < data.length) {
        var veiculos = { id: data[i].id, modelo: data[i].modelo, marca: data[i].marca, placa: data[i].placa, renavam: data[i].renavam, chassi: data[i].chassi, ano: data[i].ano };
        string = string + JSON.stringify(veiculos, null, '\t');
        if (i != (data.length - 1))
            string = string + ",";
        i++;
    }
    string = string + "]";
    fs.writeFileSync("./beck-node-api/bd/bd_veiculos.json", string, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
}

// module.exports/router será exposto como um módulo.
module.exports = router;

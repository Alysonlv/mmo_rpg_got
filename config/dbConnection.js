var mongo = require('mongodb');

var connMongoDB = function() {
    console.log('Entrou na funcao de conexao');
    var db = new mongo.Db(
        'got'
        , new mongo.Server(
            'localhost' //endereco do servidor do banco de dados
            , 27017 //porta do endereco, porta padrao
            , {}
        )
        , {}
    );

    return db;
}
module.exports = function() {
    return connMongoDB;
}
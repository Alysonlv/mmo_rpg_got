function UsuariosDAO(connection) {
    console.log('Acessado UsuariosDAO');
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario) {
    console.log(usuario);
    this._connection.open(function(err, mongoClient) {
        console.log('fazendo os paranaue do Mongo para gravar o usuario');
        mongoClient.collection("usuarios", function(err, collection) {
            collection.insert(usuario);
            mongoClient.close();
        });
    });
}

module.exports = function() {
    return UsuariosDAO;
}
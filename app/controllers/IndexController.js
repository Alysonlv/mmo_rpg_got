module.exports.home = function(application, req, res) {
    res.render('index', {validacao: {}});
};

module.exports.autenticar = function(application, req, res) {
    var dadosForm = req.body;

    req.assert('usuario', 'Usuário não foi informado').notEmpty();
    req.assert('senha', 'Senha não foi informado').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        console.log('erossss = ' + erros);
        res.render('index', {validacao: erros});
        return;
    }

    var connection = application.config.dbConnection;
    var usuariosDAO = new application.app.models.UsuariosDAO(connection);
    usuariosDAO.autenticar(dadosForm, req, res);

    //res.send("tudo certo");
};
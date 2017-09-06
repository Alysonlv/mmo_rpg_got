module.exports.jogo = function(application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('É necessário se logar!');
        return;
    }

    var comando_invalido = 'n';

    if (req.query.comando_invalido == 'yes') {
        comando_invalido = 's';
    }

    var connection = application.config.dbConnection;
    var jogoDAO = new application.app.models.JogoDAO(connection);
    jogoDAO.iniciaJogo(res, req.session.usuario, req.session.casa, comando_invalido);

    
};

module.exports.sair = function(application, req, res) {
    
    req.session.destroy(function(err) {
        res.render('index', {validacao:{}})
    });
    
};

module.exports.suditos = function(application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('É necessário se logar!');
        return
    }
    res.render('aldeoes', {validacao:{}});
};

module.exports.pergaminhos = function(application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('É necessário se logar!');
        return
    }
    res.render('pergaminhos', {validacao:{}});
};

module.exports.ordenar_acao_sudito = function(application, req, res) {
    var dadosForm = req.body;

    req.assert('acao', "Ação deve ser informada").notEmpty();
    req.assert('quantidade', "Quantidade deve ser informada").notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.redirect('jogo?comando_invalido=yes');
        return;
    }
    
    res.send('tudo ok');
};
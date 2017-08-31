module.exports = function(application){
	application.get('/jogo', function(req, res){
		application.app.controllers.JogoController.jogo(application, req, res);
	});
}
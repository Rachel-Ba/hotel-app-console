function Start()
{
	console.log('01. Lister les clients \n 99. Sortir');
}
exports.start = Start;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Commande()
{
	var readline = require('readline');						// création d'un objet `rl` permettant de récupérer la saisie utilisateur

	var rl = readline.createInterface(
	{
	  input: process.stdin,
	  output: process.stdout
	});														// récupération de la saisie utilisateur

	rl.question('Choisissez 1 ou 99 : ', function(saisie) 	// la variable `saisie` contient la saisie effectuée
		{
		  if (saisie == '1')
		  {
		  		console.log(`Liste des clients :`);
		  		rl.close();	
		  }
		  else if (saisie == '99')
		  {
		  		console.log('Au revoir');
		  		rl.close();										// attention, une fois l'interface fermée, la saisie n'est plus possible
		  }
											
		});

}
exports.commande = Commande;


(function (){
	'use strict';

	/**
	* Declaração Simples de Variáveis
	*/
	let x = 22;
	let y = 22;

	console.log(`My position is (x, y): (${x}, ${y})`);

	/** 
	* Desvios condicionais 
	*/

	let name = 'Francis';
	let age = 25;
	let birthDate = '05/11/1991';
	let address = 'Av. 13 de Maio, 2081';
	let neighborhood = 'Benfica';
	let city = 'Fortaleza';
	let scorpioRate = 30;

	if (name == 'Francis'){
		console.log(`Hello {$name}. Nice to meet you!`);

		if (age > 20) {
			console.log("You're not a teen...");
		}
		else {
			console.log("You're a teen <3");
		}
	}
	else {
		console.log("You're not Francis....");
	}

	switch(scorpioRate) {
		case 0:
			console.log("You're a librian...");
			break;

		case 10:
			console.log("You're a little bit bad.");
			break;

		case 20:
			console.log("You're bad");
			break;

		case 30:
			console.log("You're too bad...");
			break;
			
		case 40:
			console.log("You're a daemon!");
			break;

		case 50:
			console.log("Your place in hell is reserved");
			break;
		default:
			console.log('Invalid entry');
	}

	for (let i = age; i >= 0; i--) {
		console.log(`My age is ${i}`);
	}
})();

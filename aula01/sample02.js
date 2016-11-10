(function(){
	'use strict';

	let person = {
		name: 'Francisco Souza',
		age: 25,
		birthDate: '05/11/2011',
		address: 'Av. 13 de Maio, 2081',
		neighborhood: 'Benfica',
		city: 'Fortaleza',
		scorpioRate: 300,
	};

	let buildCompleteAddress = function (person) {
		return `${person.address} - ${person.neighborhood}. ${person.city}.`;
	};

	console.log(buildCompleteAddress(person));

	console.log('person has a name? ', 'name' in person);


	/**
	*
	* Utilização de listas em inteiro.
	*
	*/

	let list = [4, 2, 0, 5];

	list.push(23);
	list.push(14);
	list.push(33);

	list.sort((num1, num2) => {
		return num1 - num2;
	});

	console.log('List: ', list);
	console.log('Removing First: ', list.shift());
	console.log('Removing Last: ', list.pop());

	for (let number in list) {
		console.log(`Magic Number is ${number}`);
	}


})();
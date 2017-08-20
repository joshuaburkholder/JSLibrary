// Array.find eliminates the need to run a for-loop to search an array

//Longhand

const animals = [
	{ species: 'dog', pClass:'mammal' },
	{ species: 'cat', pClass:'mammal' },
	{ species: 'frog', pClass:'amphibian' },
	{ species: 'parrot', pClass:'bird' }
]

function findAnimal(species){
	for(let i=0; i<animals.length; ++i ) {
		if(animals[i].pClass === 'mammal' && animals[i].species === species){
			console.log(animals[i]);
		}
	}
}

findAnimal('cat');

//Shorthand

animalFound = animals.find(animals => animals.pClass === 'mammal' && animals.species === 'cat');

console.log(animalFound);

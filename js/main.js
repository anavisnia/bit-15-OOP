import { Animal } from './animals/Animal.js';
import { Dog } from './animals/Dog.js';
import { Cat } from './animals/Cat.js';

import { Bird } from './animals/Bird.js';
import { Parrot } from './animals/Parrot.js';




const rikis = new Dog('Rikis', 'baltos');
const rainis = new Cat('Rainis', 'juoda');


const kapitonas = new Parrot('Kapitonas', 'margas');
const jack = new Parrot('Jack', 'raudonas');
const lukas = new Parrot('Lukas');

kapitonas.introduce();


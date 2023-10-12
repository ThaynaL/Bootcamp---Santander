"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let on = false;
let nome = "Senhorita Nome";
let idade = 64;
let nulo = null;
let indefinido = undefined;
let retornaVazio;
let retornaQualquerCoisa = 1222;
let cliente = {
    name: "Nome Sobrenome",
    cidade: "Cidade Fantasma",
    tel: 24999999999,
    idade: 30,
};
let produto = {
    cod: 459,
    nome: "Sapato",
    fornecedor: "Daniel",
    preco: 96.99,
    quantidade: 10
};
let dados = ['Aline', 'Ana', 'Felipe'];
let dados2 = ['Aline', 'Ana', 'Felipe'];
let infos = ["Yasmin", 20, "Zaida", 36, "Tiago", 28];
let boleto = ["Conta de água", 369.99, 639794];
let aniversario = new Date("2003-01-05 07:00");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(5, 9);
console.log(soma);
function addHello(name) {
    return `Hello ${name}`;
}
console.log(addHello("Ada"));
function callPhone(phone) {
    return phone;
}
console.log(callPhone("98876577722"));
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Cristina";
    });
}
;
const bot = {
    id: 1,
    name: "Megan",
    sayHello: function () { throw new Error("Function not implemented."); },
};
console.log(bot);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Olá eu sou ${this.name}`;
    }
}
const t = new Pessoa(20, "Antonio");
console.log(t.sayHello());
class Character {
    constructor(nome, strength, skill) {
        this.nome = nome;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points in 15`);
    }
}
const personagem1 = new Character("Gothorita", 3, "Psychic");
console.log(personagem1);
class Aniversariante {
    constructor(nome, diaNasc, anoNasc) {
        this.nome = nome;
        this.diaNasc = diaNasc;
        this.anoNasc = anoNasc;
    }
}
;
const a1 = new Aniversariante("Gloria", 3, 1991);
console.log(a1.anoNasc);
class Festa extends Aniversariante {
    constructor(nome, diaNasc, anoNasc, dtFesta) {
        super(nome, diaNasc, anoNasc);
        this.dtFesta = dtFesta;
    }
}
const a2 = new Festa("Tiffany", 8, 1981, 15);
console.log(a2);

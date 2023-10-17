// Variaveis - tipos primitivos
let on:boolean = false;
let nome:string = "Senhorita Nome";
let idade:number = 64;

//Tipos especiais
let nulo:null = null;
let indefinido: undefined = undefined;

//Tipos abrangentes
let retornaVazio:void;
let retornaQualquerCoisa: any = 1222;

//Objeto - sem previsibilidade
let cliente:object = {
    name:"Nome Sobrenome",
    cidade:"Cidade Fantasma",
    tel:24999999999,
    idade: 30,
};

//Objeto tipado  - com previsibilidade
type ProdutosLoja ={
    cod: number;
    nome: string;
    fornecedor: string;
    preco: number;
    quantidade: number;
};

let produto: ProdutosLoja ={
    cod: 459,
    nome: "Sapato",
    fornecedor: "Daniel",
    preco: 96.99,
    quantidade: 10
};

//Arrays
let dados: string[] = ['Aline', 'Ana', 'Felipe'];
let dados2: Array<string> = ['Aline', 'Ana', 'Felipe'];

let infos:(string | number)[] = ["Yasmin", 20, "Zaida", 36, "Tiago", 28] ;

//Tulipas
let boleto:[string, number, number] = ["Conta de água", 369.99, 639794];

//Array métodos (conhecimentos já existentes)
//dados.pop();//deleta o último elemento
//dados.filter();//filtrar

//Datas
let aniversario: Date = new Date("2003-01-05 07:00");
console.log(aniversario.toString());

//Funções
function addNumber(x: number, y: number) {
    return x + y;
}
let soma: number = addNumber(5, 9);
console.log(soma);

function addHello(name: string) {
    return `Hello ${name}`;
}
console.log(addHello("Ada"));

function callPhone(phone: string | number): number | string {
    return phone;
}
console.log(callPhone("98876577722"));

async function getDatabase(id:number): Promise<string> {
    return "Cristina";
}

//Interfaces normalmente usada com classes e tem poucas diferenças com type que normalmente usado para tipagem
interface robot{
    readonly id: number | string; //somente ler a variavel
    name: string;
    sayHello(): string;
};

const bot: robot = {
    id: 1,
    name: "Megan",
    sayHello: function (): string {throw new Error("Function not implemented.")},
};

console.log(bot);
// não funciona console.log(bot.id = "4");

class Pessoa implements robot {
    id: string | number;
    name: string;
  
    constructor(id: string | number, name: string) {
      this.id = id;
      this.name = name;
    }
    sayHello(): string {
      return `Olá eu sou ${this.name}`;
    }
  }

const t = new Pessoa(20, "Antonio");
console.log(t.sayHello());

//Classes
class Character{
    nome?: string; // ?: significa opcional
    strength: number;
    skill: string;

    constructor(nome: string, strength: number, skill: string) {
        this.nome = nome;
        this.strength = strength;
        this.skill = skill;
    }

    attack() : void{
        console.log(`Attack with ${this.strength} points in 15`);
        
    }
}

const personagem1 = new Character("Gothorita", 3, "Psychic");
console.log(personagem1);


//modificadores de acesso - Data Modifiers
class Aniversariante{
    private nome: string; // Somente essa classe pode acessar
    protected diaNasc: number; // Pode acessar por essa classe e por suas subclasses
    public anoNasc: number;// Pode ser acessado em qualquer lugar

    constructor(nome: string, diaNasc: number, anoNasc: number) {
        this.nome = nome;
        this.diaNasc = diaNasc;
        this.anoNasc = anoNasc;
    }
};

const a1 = new Aniversariante("Gloria", 3, 1991);
console.log(a1.anoNasc);


//Subclass
class Festa extends Aniversariante{
    dtFesta: number;
    constructor(
        nome: string, 
        diaNasc: number, 
        anoNasc: number, 
        dtFesta: number) {
    super(nome, diaNasc, anoNasc);
    this.dtFesta = dtFesta;
    }
}
const a2 = new Festa("Tiffany", 8, 1981, 15);
console.log(a2);

//Generics - define depois o tipo
function agrupaArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
  }
  
  const numArray = agrupaArray<number[]>([7, 5], [614]);
  const stgArray = agrupaArray<string[]>(["lidia", "vanda"], ["lana"]);
  
  console.log(numArray);
  console.log(stgArray);

  //Decorators
function exibeNome(targat:any) {
    console.log(targat);
    
}
 @exibeNome
  class Funcionario{}

  @exibeNome
  class Alunos{}

  //class decorator - criando nossos validadores de tamanho
  function apiVersion(version: string) {
    return (target: any) => {
      Object.assign(target.prototype, { __version: version, __name: "felipe" });
    };
  }
  
  //attribute decorator
  function minLength(length: number) {
    return (target: any, key: string) => {
      let _value = target[key];
  
      const getter = () => "[Run] " + _value;
      const setter = (value: string) => {
        if (value.length < length) {
          throw new Error(`Tamanho menor do que ${length}`);
        } else {
          _value = value;
        }
      };
  
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
      });
    };
  }
  
  class Api {
    @minLength(7)
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  const api = new Api("muitoUsada");
  console.log(api.name);


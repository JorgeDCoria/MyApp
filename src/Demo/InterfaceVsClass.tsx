// class usado para representar entidades sin tener que replicar codigo,
// es una base para crear objetos
//usamos clases para generar objetos del mismo tipo (funcionalidad y propiedades)

class GentlemanProgrammerToy{
  private moustachePhrase:string;
  constructor(moustachePhase:string){
    this.moustachePhrase = moustachePhase;
  }

  moustachePressed(){
    alert(this.moustachePhrase);
  }
}

const toy = new GentlemanProgrammerToy("hola soy gentleman");
const toy2 = new GentlemanProgrammerToy("hola soy gentleman 2");

toy.moustachePressed();

//Interface
//es como un contrato, son reglas que deben de cumplirse 
//lo vamos a usar para modelar nuetros datos, generalmente usado cuando recibimos
//datos de un enpoint vamos a querer que se respete la estructura, es ahi donde es
//conveniente usar los mismos
//poner nombre de las interfaces en singular

interface Person{
  name: string;
  lastName: string;
  age: number;
  breath:() => void;
}
//al instanciar una interface debe de cumplir con todos los atributos, TODOS
const person: Person = {
  name:'Gentleman',
  lastName:"Programming",
  age: 10,
  breath: () =>{
    console.log("estoy respirando");
  }
}

//funcion definida con un parametro de tipo de persona, por lo tanto esta funcion 
//solo recibe argumentos del tipo person
const sayHi= (person: Person) =>{
  console.log(`hola como andas ? ${person.name}`)
}

//sayHi({name:"jorge"}); error: el argumento debe ser de tipo person
sayHi(person); //person -> objeto instanciado anteriomente


//una interface puede extender de otra y esta nueva contiene todas las propiedades
//de la interface padre mas las propias
interface FootBallPlayer extends Person{
  preferredFoot:string;
  tshirtNumber:number;
  statistics: FootBallPlayerStatistics;
}

const statisticsPlayer: FootBallPlayerStatistics = {
  averageScore: 10,
  shootingAccuracy:5
}
//instancia de FootBallPlayer
const player: FootBallPlayer = {
  name: "Gentleman",
  lastName: "Programming",
  age:29,
  breath: () => {
    console.log("Im respirando");
  },
  preferredFoot:"left",
  tshirtNumber:10,
  statistics: statisticsPlayer
 
}

interface FootBallPlayerStatistics{
  averageScore:number;
  shootingAccuracy:number;
}



interface FootballTeam{
  name: string;
  //payers: FootBallPlayer[]  -> otra forma de declarar
  players: Array<FootBallPlayer>;
}

export {}
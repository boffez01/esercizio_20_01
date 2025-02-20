//2
let nome: string = "harshpreet";
let eta: number = 22;
let studioTypeScript: boolean = true;

console.log(`Nome: ${nome}`);
console.log(`Età: ${eta}`);
console.log(`Stai studiando TypeScript? ${studioTypeScript}`);
//3
const greet = (name: string): string => {
  return "Ciao " + name;
};
console.log(greet("Beppe"));
//4
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(20, 40));
//5
const calcolaPrezzoConIVA = (prezzo: number): number => {
  const iva = 0.22;
  return prezzo + prezzo * iva;
};

const prezzoConIVA = calcolaPrezzoConIVA(100);
console.log(prezzoConIVA);
//6
const concatenaStringhe = (stringa1: string, stringa2: string): number => {
  const concatenato = stringa1 + stringa2;
  return concatenato.length;
};

const lunghezzaTotale = concatenaStringhe("Ciao", "Mondo");
console.log(lunghezzaTotale);
// 7)
let valore: string | number = "Ciao";
valore = 42;
console.log(valore);

// 8)
let variabile: number | null | undefined = 10;
variabile = null;
variabile = undefined;
console.log(variabile);

// 9)
type GiornoDellaSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
let giorno: GiornoDellaSettimana = "Lunedì";
console.log(giorno);

// 10)
const numbers: number[] = [1, 2, 3];
console.log(numbers);

const numbers2: Array<number> = [1, 2, 3];
console.log(numbers2);

// 11) Tupla con 5 elementi
let tupla: [string, string, string, number, number] = ["uno", "due", "tre", 4, 5];
console.log(tupla);

// 12) Differenza tra type e interface
// Type può essere usato per unire più tipi o per tipi complessi come funzioni, mentre interface è specifico per oggetti e può essere esteso con altre interfacce.
// La differenza principale è la sintassi e il fatto che le interfacce possono essere dichiarate più volte e vengono "unite" automaticamente.

// 13)
interface Persona {
  firstname: string;
  lastname: string;
  age: number;
}

let persona: Persona = {
  firstname: "harshpreet",
  lastname: "singh",
  age: 22,
};
console.log(persona);

// 14) 
interface Utente {
  email: string;
  telefono?: string;
}

let utente: Utente = {
  email: "luca.rossi@example.com",
  telefono: "1234567890"
};

console.log(utente);

// 15) 
interface Studente {
  nome: string;
  voto: number;
}

let studenti: Studente[] = [
  { nome: "Marco", voto: 28 },
  { nome: "Anna", voto: 30 },
  { nome: "Giulia", voto: 25 }
];

console.log(studenti);

// 16) 
interface Veicolo {
  marca: string;
  modello: string;
}

interface Auto extends Veicolo {
  numeroDiPorte: number;
}

let auto: Auto = {
  marca: "Fiat",
  modello: "500",
  numeroDiPorte: 4
};

console.log(auto);

// 17) 
let miaAuto: Auto = {
  marca: "Volkswagen",
  modello: "Golf",
  numeroDiPorte: 5
};

console.log(miaAuto);

// 18) Generics in TypeScript
// I Generics permettono di definire tipi variabili che possono essere specificati al momento dell'uso, rendendo il codice più riutilizzabile e flessibile.

function identita<T>(valore: T): T {
  return valore;
}

let risultato = identita("Ciao");
console.log(risultato);

// 19) È possibile avere più tipi generici in un'interfaccia?
// Sì, è possibile. Un'interfaccia può utilizzare più generici per tipizzare più proprietà o parametri.

interface Coppia<T, U> {
  primo: T;
  secondo: U;
}

let coppia: Coppia<string, number> = { primo: "Ciao", secondo: 100 };
console.log(coppia);

// 20) 
interface RispostaAPI<T> {
  dati: T;
  messaggio: string;
}

let risposta: RispostaAPI<{ nome: string; età: number }> = {
  dati: { nome: "Luca", età: 30 },
  messaggio: "Successo"
};

console.log(risposta);

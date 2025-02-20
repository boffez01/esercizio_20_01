//2
var nome = "harshpreet";
var eta = 22;
var studioTypeScript = true;
console.log("Nome: ".concat(nome));
console.log("Et\u00E0: ".concat(eta));
console.log("Stai studiando TypeScript? ".concat(studioTypeScript));
//3
var greet = function (name) {
    return "Ciao " + name;
};
//4
var sum = function (a, b) {
    return a + b;
};
//5
var calcolaPrezzoConIVA = function (prezzo) {
    var iva = 0.22;
    return prezzo + (prezzo * iva);
};

/*var livro = 'Moby Dick';
var anoLançamento = '1952';
var idadeBernardo = '19';
var nome = 'Bernardo';
var sobrenome = 'Brigolini';
var nomeEIdade = `Meu nome é ${nome} e minha idade é ${idadeBernardo}`;
console.log(nomeEIdade);
var nomeCompleto = `Meu nome é ${nome} e meu sobrenome é ${sobrenome}`;
console.log(nomeCompleto);
var frase = 'It\'s study time';
console.log(frase);
console.log(typeof nome);

var idadeTio = '59';
if(idadeBernardo > idadeTio)
{
    console.log('Bernardo é mais velho');
}
else if (idadeBernardo == idadeTio)
{
    onsole.log('Bernardo tem a mesma idaden que seu tio'); 
}
else
{
    console.log('O tio do Bernardo é mais velho'); 
}

//----------------------------------------------------//

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
//Qual o valor da expressão?
//A expressão vai dar 3.

//Verifique se as seguinte variaveis são True ou False
//True
//True
//False
//False
//True

//---------------------------------------------------//

var brasil = 207;
var china = 1340;

if(brasil > china)
{
    console.log('O Brasil é maior que a China');
}
else
{
    console.log('O Brasil é menor que a China');
}

//--------------------------------------------------//

if(('Gato' === 'gato') && (5 > 2))
{
    console.log('Verdadeiro');
}
else
{
    console.log('Falso');
}
//O que irá aparecer no console?
//Falso

//--------------------------------------------------//

if(('Gato' === 'gato') || (5 > 2))
{
    console.log('Gato' && 'Cão');
}
else
{
    console.log('Falso');
}
//O que irá aparecer no console?
//Cão

//--------------------------------------------------//

var scroll = 1000;
scroll += 500;
console.log(scroll);

//--------------------------------------------------//

var possuiCarro = true; var possuiCasa = true; var darCredito = true;

if ((possuiCarro == true) &&  (possuiCasa == true))
{
    darCredito = true;
    console.log(darCredito);
}
else
{
    darCredito = false;
    console.log(darCredito);
}

var imc =   (peso, altura) => {
    const imc = peso / (altura ** 2);
    return imc;
}

imc(80, 1.80);
console.log(imc(80, 1.80));*/

/*function quadradoPerimetro(ladoQuadrado) {
    return ladoQuadrado * 4;
}

console.log(quadradoPerimetro(3))


var nomeCompleto = (nome, sobrenome) =>
{
    return nome + ' ' + sobrenome;
}

addEventListener('scroll', function()
{
    console.log(nomeCompleto('Bernardo','Brigolini'));
    
})*/

var Mariana = {
    quantidade: 10,
    conta() {
        var letra = '';
        for (var i = 1; i <= this.quantidade; i++) {
            letra +=`Mariana conta ${i} \n`+
            `Mariana conta ${i}: `;

            for (var j = 1; j <= i; j++) {
                letra += `é ${j},`;
            }
            letra += `é!\n`
            letra += "Ana, viva Mariana, viva a Mariana \n\n";
        }
        console.log(letra);
    }
}

Mariana.conta();




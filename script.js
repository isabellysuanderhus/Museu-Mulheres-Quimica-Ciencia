const cientistas = {


curie: {

nome:"Marie Curie",

texto:
"Marie Curie (1867-1934) foi uma química e física polonesa naturalizada francesa. " +
"Ela realizou pesquisas pioneiras sobre radioatividade e descobriu os elementos rádio e polônio. " +
"Foi a primeira mulher a ganhar um Prêmio Nobel e a primeira pessoa a receber dois Prêmios Nobel."

},



franklin: {

nome:"Rosalind Franklin",

texto:
"Rosalind Franklin (1920-1958) foi uma química e biofísica britânica. " +
"Suas imagens obtidas pela técnica de difração de raios X foram fundamentais para revelar " +
"a estrutura do DNA."

},



yonath: {

nome:"Ada Yonath",

texto:
"Ada Yonath nasceu em 1939 e é uma química israelense. " +
"Suas pesquisas ajudaram a compreender a estrutura dos ribossomos, estruturas responsáveis " +
"pela produção de proteínas. Recebeu o Prêmio Nobel de Química em 2009."

},



kwolek: {

nome:"Stephanie Kwolek",

texto:
"Stephanie Kwolek (1923-2014) foi uma química americana que criou o Kevlar, " +
"um material extremamente resistente utilizado em equipamentos de proteção, " +
"como coletes à prova de balas."

},




bertha: {

nome:"Bertha Lutz",

texto:
"Bertha Lutz (1894-1976) foi uma cientista brasileira, bióloga e pesquisadora. " +
"Trabalhou no Museu Nacional do Brasil e contribuiu para estudos científicos, " +
"além de defender a participação das mulheres na ciência e na sociedade."

},




katherine: {

nome:"Katherine Johnson",

texto:
"Katherine Johnson (1918-2020) foi uma matemática e cientista americana da NASA. " +
"Seus cálculos foram fundamentais para missões espaciais, incluindo o voo de John Glenn " +
"ao redor da Terra. Ela mostrou a importância das mulheres na ciência e tecnologia."

},




lovelace: {

nome:"Ada Lovelace",

texto:
"Ada Lovelace (1815-1852) foi uma matemática britânica considerada a primeira programadora " +
"da história. Ela criou ideias pioneiras sobre programação de computadores ao trabalhar " +
"com a Máquina Analítica de Charles Babbage."

}


};





// ABRIR MODAL

function abrirModal(cientista){


let modal=document.getElementById("modal");

let nome=document.getElementById("nome");

let texto=document.getElementById("texto");


nome.innerHTML=cientistas[cientista].nome;

texto.innerHTML=cientistas[cientista].texto;


modal.style.display="flex";


}





// FECHAR MODAL

function fecharModal(){


document.getElementById("modal").style.display="none";


}





// FECHAR AO CLICAR FORA

window.onclick=function(event){


let modal=document.getElementById("modal");


if(event.target==modal){

modal.style.display="none";

}


}






// QUIZ

function responder(correta){


let resultado=document.getElementById("resultado");


if(correta){


resultado.innerHTML=
"✅ Correto! Marie Curie descobriu o rádio e o polônio.";


resultado.style.color="#7CFF8A";


}else{


resultado.innerHTML=
"❌ Resposta incorreta. Tente novamente.";


resultado.style.color="#ff8080";


}


}







// ANIMAÇÕES AO ROLAR


const elementos =
document.querySelectorAll(".card, .evento, .curiosidade-box");



elementos.forEach(elemento=>{

elemento.style.opacity="0";

elemento.style.transform="translateY(40px)";

elemento.style.transition="0.8s";

});





function aparecer(){


elementos.forEach(elemento=>{


let topo =
elemento.getBoundingClientRect().top;


let alturaTela =
window.innerHeight;



if(topo < alturaTela - 100){


elemento.style.opacity="1";

elemento.style.transform="translateY(0)";


}


});


}



window.addEventListener("scroll",aparecer);


aparecer();






// EFEITO NO LOGO


let logo=document.querySelector(".logo");


setInterval(()=>{


logo.style.textShadow=
"0 0 15px #d9b3ff";


setTimeout(()=>{

logo.style.textShadow="none";

},500);



},1000);
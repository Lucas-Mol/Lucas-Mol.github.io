const techIcons = document.querySelectorAll('ul li img'); //lista de ícones das tecnologias


//Declaração de valores e criação de evento para digitar texto principal
const mainText = ["Olá,<br>Eu sou <strong>Lucas Mol</strong><br>Desenvolvedor Web"];
var mainTextPosition = 0;
const typingSpeed = 35;

window.addEventListener('load', typingMainText = () => {
    document.querySelector('#mainText').innerHTML = mainText[0].substring(0, mainTextPosition) + "<span>\u25ae</span>";
    if(mainTextPosition++ != mainText[0].length) {
        setTimeout(typingMainText, typingSpeed);
    }
});


//Declaração de valores e criação de evento para digitar texto de habilidades
const skillText = ["Habilidades &<br>Expêriencias"];
var skillTextPosition = 0;

document.querySelector('section#section__skills').addEventListener('mouseenter',typingSkillText = () => {
    document.querySelector('#skillText').innerHTML = skillText[0].substring(0, skillTextPosition);
    if(skillTextPosition++ != skillText[0].length) {
        setTimeout(typingSkillText, typingSpeed);
    }
});

// Atribuindo eventos "onmouseenter" nos ícones de tecnologias e conhecimentos
for(let i = 0; i < techIcons.length; i++) {
    const icon = techIcons[i];
    const noTech = icon.id.substring(5);

    icon.addEventListener('mouseenter', function () {
        const speed = 380;
        switch(noTech){
            case('html'):
                document.querySelector('#demo-box').animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
                document.querySelector('#demo-title').innerHTML = "HTML 5";
                document.querySelector('#demo-description').innerHTML = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.";
                break;
            case('css'):
                document.querySelector('#demo-box').animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
                document.querySelector('#demo-title').innerHTML = "CSS 3";
                document.querySelector('#demo-description').innerHTML = "CSS (Cascading Style Sheets) é um mecanismo para adicionar estilo a um documento Web.";
                break;
            case('js'):
                document.querySelector('#demo-box').animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
                document.querySelector('#demo-title').innerHTML = "JavaScript";
                document.querySelector('#demo-description').innerHTML = "JavaScript é uma linguagem de programação e script, de alto nível com tipagem dinâmica fraca e multiparadigma. Junto ao HTML e CSS, o JavaScript é uma das principais tecnologias Web.";
                break;
            case('java'):
                document.querySelector('#demo-box').animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
                document.querySelector('#demo-title').innerHTML = "Java";
                document.querySelector('#demo-description').innerHTML = "Java é uma linguagem de programação orientada a objetos, imperativa, também com aspectos funcionais. Amplamente utilizada em aplicações Desktop, Mobile e Web.";
                break;
            case('git'):
                document.querySelector('#demo-box').animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
                document.querySelector('#demo-title').innerHTML = "Git";
                document.querySelector('#demo-description').innerHTML = "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software";
                break;
            case('cpp'):
                document.querySelector('#demo-box').animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
                document.querySelector('#demo-title').innerHTML = "C++";
                document.querySelector('#demo-description').innerHTML = "C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. É uma das linguagens comerciais mais populares, reconhecida pelo seu ganho de desempenho e performance.";
                break;
            case('clojure'):
                document.querySelector('#demo-box').animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
                document.querySelector('#demo-title').innerHTML = "Clojure";
                document.querySelector('#demo-description').innerHTML = "Clojure é uma linguagem de programação Lisp, com príncipios de imutabilidade e estruturas de dados persistentes. Baseado em paradigma funcional, Clojure pode também usar classes Java.";
                break;
            case('db'):
                document.querySelector('#demo-box').animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
                document.querySelector('#demo-title').innerHTML = "Banco de Dados";
                document.querySelector('#demo-description').innerHTML = "Bancos de dados são conjuntos de arquivos relacionados entre si com registros sobre diferentes tipos de dados. Comumente gerenciado por SGBDs e utiliza linguagem SQL(Standart Query Language).";
                break;
            case('nodejs'):
                document.querySelector('#demo-box').animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
                document.querySelector('#demo-title').innerHTML = "Node.js";
                document.querySelector('#demo-description').innerHTML = "Node.js é um software open-source, multiplataforma, interpretado pela V8 do Google e que permite a execução de JavaScript fora do browser, podendo utiliza-lo também no Back-end.";
                break;
            case('scrum'):
                document.querySelector('#demo-box').animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
                document.querySelector('#demo-title').innerHTML = "Scrum & Metologias Ágeis";
                document.querySelector('#demo-description').innerHTML = "Metodologias Ágeis são disciplina que estudam comportamentos, processos, práticas e ferramentas utilizados para a criação e gerenciamento de projetos.";
                break;
        }
    })
}

// Atribuindo evento de "onmouseleave" nos ícones de tecnologias e conhecimentos
techIcons.forEach(element => { element.addEventListener('mouseleave', function () {
    const speed = 400;

    document.querySelector('#demo-box').animate([{margin: '15% 0 0 200%'},{margin: '15% 0 0 0'}], speed);
    document.querySelector('#demo-title').innerHTML = "Saiba mais";
    document.querySelector('#demo-description').innerHTML = "Deslize sobre os ícones e descubra mais.";
    });    
});

// Atribuindo evento de "onclick" no botão de enviar
document.querySelector('a#submitButton').addEventListener('click', function () {
    alert("ALERTA: Por hora, o formulário é meramente ilustrativo.");
});

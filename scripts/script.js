var mainText = ["Olá,<br>Eu sou <strong>Lucas Mol</strong><br>Desenvolvedor Web"];
var mainTextPosition = 0;
var skillText = ["Habilidades &<br>Expêriencias"];
var skillTextPosition = 0;
typingSpeed = 35;

typingMainText = () => {
    document.getElementById("mainText").innerHTML = mainText[0].substring(0, mainTextPosition) + "<span>\u25ae</span>";
    if(mainTextPosition++ != mainText[0].length) {
        setTimeout(typingMainText, typingSpeed);
    }
}

typingSkillText = () => {
    document.getElementById("skillText").innerHTML = skillText[0].substring(0, skillTextPosition);
    if(skillTextPosition++ != skillText[0].length) {
        setTimeout(typingSkillText, typingSpeed);
    }
}


function fillDemo(nuImg) {
    var speed = 380;
    switch(nuImg){
        case(1):
            document.getElementById("demo-box").animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
            document.getElementById("demo-title").innerHTML = "HTML 5";
            document.getElementById("demo-description").innerHTML = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.";
            break;
        case(2):
            document.getElementById("demo-box").animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
            document.getElementById("demo-title").innerHTML = "CSS 3";
            document.getElementById("demo-description").innerHTML = "CSS (Cascading Style Sheets) é um mecanismo para adicionar estilo a um documento Web.";
            break;
        case(3):
            document.getElementById("demo-box").animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
            document.getElementById("demo-title").innerHTML = "JavaScript";
            document.getElementById("demo-description").innerHTML = "JavaScript é uma linguagem de programação e script, de alto nível com tipagem dinâmica fraca e multiparadigma. Junto ao HTML e CSS, o JavaScript é uma das principais tecnologias Web.";
            break;
        case(4):
            document.getElementById("demo-box").animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
            document.getElementById("demo-title").innerHTML = "Java";
            document.getElementById("demo-description").innerHTML = "Java é uma linguagem de programação orientada a objetos, imperativa, também com aspectos funcionais. Amplamente utilizada em aplicações Desktop, Mobile e Web.";
            break;
        case(5):
            document.getElementById("demo-box").animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
            document.getElementById("demo-title").innerHTML = "Git";
            document.getElementById("demo-description").innerHTML = "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software";
            break;
        case(6):
            document.getElementById("demo-box").animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
            document.getElementById("demo-title").innerHTML = "C++";
            document.getElementById("demo-description").innerHTML = "C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. É uma das linguagens comerciais mais populares, reconhecida pelo seu ganho de desempenho e performance.";
            break;
        case(7):
            document.getElementById("demo-box").animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
            document.getElementById("demo-title").innerHTML = "Clojure";
            document.getElementById("demo-description").innerHTML = "Clojure é uma linguagem de programação Lisp, com príncipios de imutabilidade e estruturas de dados persistentes. Baseado em paradigma funcional, Clojure pode também usar classes Java.";
            break;
        case(8):
            document.getElementById("demo-box").animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
            document.getElementById("demo-title").innerHTML = "Banco de Dados";
            document.getElementById("demo-description").innerHTML = "Bancos de dados são conjuntos de arquivos relacionados entre si com registros sobre diferentes tipos de dados. Comumente gerenciado por SGBDs e utiliza linguagem SQL(Standart Query Language).";
            break;
        case(9):
            document.getElementById("demo-box").animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
            document.getElementById("demo-title").innerHTML = "Node.js";
            document.getElementById("demo-description").innerHTML = "Node.js é um software open-source, multiplataforma, interpretado pela V8 do Google e que permite a execução de JavaScript fora do browser, podendo utiliza-lo também no Back-end.";
            break;
        case(10):
            document.getElementById("demo-box").animate([{margin: '200% auto'},{margin: '15% auto'}], speed);
            document.getElementById("demo-title").innerHTML = "Scrum & Metologias Ágeis";
            document.getElementById("demo-description").innerHTML = "Metodologias Ágeis são disciplina que estudam comportamentos, processos, práticas e ferramentas utilizados para a criação e gerenciamento de projetos.";
            break;
    }
}

function fillDefaultDemo() {
    var speed = 400;

    document.getElementById("demo-box").animate([{margin: '15% 0 0 200%'},{margin: '15% 0 0 0'}], speed);
    document.getElementById("demo-title").innerHTML = "Saiba mais";
    document.getElementById("demo-description").innerHTML = "Deslize sobre os ícones e descubra mais.";
}

window.addEventListener("load", typingMainText);
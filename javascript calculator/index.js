window.addEventListener('DOMContentLoaded', init);
//keys of calculator
const keys = ['*', '/', '+', '-', '9', '8', '7',
    '6', '5', '3', '2', '1', '0', '.'];
//special keys
const speckeys = ['*', '/', '+', '-'];



function init() {
    document.title = "Javascript calculator";
    const container = document.createElement('div');
    let dec=false;
    let eva=false;
    container.className = 'container';
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    document.body.appendChild(container);
    const output = document.createElement('input');
    output.setAttribute('type', 'text');
    output.className = 'output';
    output.style.width = '100%';
    output.style.fontSize = '1.8em';
    output.style.textAlign = 'right';
    container.appendChild(output);
    const main = document.createElement('div');
    main.style.width = '100%';
    main.className = 'main';
    container.appendChild(main);
    keys.forEach((key) => btnMaker(key, addOutput))
    btnMaker('=',evalOutput);
    btnMaker('C',clrOutput);

    function evalOutput() {
        output.style.border = 'black 1px solid';
        if(output.value === "") {
            output.style.border = 'red 1px solid';
        }
        else if(eva) {
            output.style.border = 'red 1px solid';
        }
        else {
            output.value = eval(output.value);
        }
    }
    function clrOutput(){
      output.style.border = 'black 1px solid';
      output.value = "";
    }

    function btnMaker(txt, myfunction) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.style.width = '23%';
        btn.style.lineHeight = '50px';
        btn.style.margin = '1%';
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myfunction);
        main.appendChild(btn);
    }
    function addOutput(e) {
        output.style.border = '1px solid black'
        let char = e.target.val;
        if(char === '.') {
            if(dec) {
                char = '';
                output.style.border='1px solid red';
            }
            else {
                dec=true;
            }
        }
        eva = speckeys.includes(char)
        if(eva) {
            dec=false;
        }
        output.value += char;
    }
}
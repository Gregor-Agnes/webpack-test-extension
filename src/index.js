import _ from 'lodash';
import printMe from './print.js';
import './style.scss'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const paragraph = document.createElement('p');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    paragraph.innerText = ('hi du')
    element.appendChild(paragraph)

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
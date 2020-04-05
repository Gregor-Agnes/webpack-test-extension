import _ from 'lodash';
import printMe from './print.js';
import Foundation from 'foundation-sites';
import '../Scss/style2.scss';

import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faCircle} from '@fortawesome/pro-solid-svg-icons' // ES Module "as" syntax

// HMR / Hot
if (module.hot)
    module.hot.accept()

// FontAwesome
library.add(faCheck, faCircle)
dom.watch()

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const paragraph = document.createElement('p');

    element.innerHTML = _.join(['Hallo', 'webpack'], ' ');

    paragraph.innerText = ('hi du')
    element.appendChild(paragraph)

    btn.innerHTML = 'cfflick me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}


if (module.hot) {
    module.hot.accept('./print.js', function ($) {
        console.log('Accepting tdhe updated printMe module!');
        printMe($);
    })
}

$(document).foundation()


$(document).ready(function() {
    $('.columns').first().append(component());

    $('.columns').first().append('<p>hot</p>')

})
export default function printMe() {
    console.log('Updatindfasdfg print.js...');
    if (module.hot)
        module.hot.accept()
    $('body').css('background', 'teal')
}
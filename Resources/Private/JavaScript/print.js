export default function printMe() {
    console.log('Updatindfasdfg print.js...');
    if (module.hot)
        module.hot.accept()
    console.log($('body').css('background-color'))
    if ($('body').css('background-color') == 'rgb(0, 128, 128)') {
        $('body').css('background-color', 'yellow')

    } else {
        $('body').css('background-color', 'teal')

    }

}
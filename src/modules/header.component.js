import $ from 'jquery'

$('<h1 />')
    .text('Hello world from jQuery')
    .css({
        textAlign: 'center',
        color: 'blue'
    })
    .appendTo($('header'))
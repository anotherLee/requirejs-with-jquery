requirejs.config({
    baseUrl: './js',
    paths: {
        jquery: 'jquery'
    }
});

require(['jquery'], function($){
    $('div').text('Hello World').css({
        'background': 'red',
        'font-size': '30px'
    })
})
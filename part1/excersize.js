$(document).ready(() => { console.log("Let's get ready to party with jQuery!"); });
$('img').toggleClass('.image-center');
$('p').get(($('p').length)-1).remove();
$('title').css('font-size', `${Math.floor(Math.random() * 100)}px`);
$('h1#title').css('font-size', `${Math.floor(Math.random() * 100)}px`);
$('<li>').text('Super Saiyan 5').appendTo('ol');
$('ol').remove(); // Looks like this will remove children too
$('<p>').text('sorry about the list, ordered lists are especially dumb').appendTo('aside.col-sm-4');
let $inputs = $('input');
$inputs.on('input', (evt) => {
    $('body').css('background-color', `rgb(${$inputs.get(0).value}, ${$inputs.get(2).value}, ${$inputs.get(1).value})`);
});
$('img').on('click', (evt) => {
    evt.target.remove();
});
// $(document).on('click', (evt) => {
//     $('body').css('background-color', 
//         `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`);
// });
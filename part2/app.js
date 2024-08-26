// GLOBALS
const table = $('#tableDiv');
const inputs = $('form > div > input');
// Form submission and handling
$('form').on('submit', function (evt) {
    evt.preventDefault();
    submissionHandler();
});

function submissionHandler() {
    // init table
    if ($('#tableDiv').children().length == 0) {
        makeTable();
    }
    // Make new list element with values

}

function makeTable() {
    // makes new table
    $('<table>').appendTo('#tableDiv');
    // makes table head
    $('<thead>').appendTo('#tableDiv > table');
    $('<tr>').appendTo('#tableDiv > table > thead');
    let nth = $('<th>').attr('scope', 'col').text('movies');
    nth.appendTo('#tableDiv > table > thead > tr');
    nth = $('<th>').attr('scope', 'col').text('rating');
    nth.appendTo('#tableDiv > table > thead > tr');
}
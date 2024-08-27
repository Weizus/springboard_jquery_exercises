// GLOBALS
const table = $('#tableDiv');
const inputs = $('form > div > input');

// Form submission and handling
$('form').on('submit', function (evt) {
    evt.preventDefault();
    submissionHandler();
});

function submissionHandler() {
    if (inputs[0].value.length < 2 || (inputs[1].value > 10 || inputs[1].value < 0)) {
        alert('Invalid Inputs!');
    } else {
        // init table
        if ($('#tableDiv').children().length == 0) {
            makeTable();
            // make the button
            $('<input type="button" value="Delete entries">').on('click', function (evt) {
                $('#tableDiv > table').remove();
                this.remove();
            }).appendTo('#tableDiv');
        }
        // Make new table elements with values
        let newTr = $('<tr>');
        newTr.appendTo('#tableDiv > table > tbody');
        $(`<td scope = "col">${inputs[0].value}</td>`).appendTo(newTr);
        $(`<td scope = "col">${inputs[1].value} Stars</td>`).appendTo(newTr);
    }
}

function makeTable() {
    // makes new table
    $('<table>').appendTo('#tableDiv');
    // makes table head
    $('<thead>').appendTo('#tableDiv > table');
    $('<tr>').appendTo('#tableDiv > table > thead');
    // Fill table head
    let nth = $('<th>').attr('scope', 'col').text('movies');
    nth.appendTo('#tableDiv > table > thead > tr');
    nth = $('<th>').attr('scope', 'col').text('rating');
    nth.appendTo('#tableDiv > table > thead > tr');

    // makes table body
    $('<tbody>').appendTo('#tableDiv > table');
}
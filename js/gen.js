$(document).ready(function() {
    tracery.setRng(getDateSeed());
    var grammar = tracery.createGrammar({
        'noun': objects,
        'adjective': adjectives,
        'phrase': [
            '#adjective.a# #noun#',
            'the smell of #adjective.a# #noun#'
        ],
        'origin': [
            '#phrase.capitalize# and #phrase#',
            '#phrase.capitalize#'
        ]
    });

    grammar.addModifiers(baseEngModifiers);
    $("#gender").text(grammar.flatten('#origin#'));
});

function getDateSeed() {
    let today = new Date();
    return new Math.seedrandom(today.toDateString());
}
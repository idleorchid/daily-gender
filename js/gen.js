$(document).ready(function() {
    tracery.setRng(getDateSeed);
    var grammar = tracery.createGrammar({
        'noun': nouns,
        'adjective': adjectives,
        'origin': ['#adjective.a# #noun#.'],
    });

    grammar.addModifiers(baseEngModifiers);
    $("#gender").text(grammar.flatten('#origin#'));
});

function getDateSeed() {
    let today = new Date();
    let todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0);
    return 1 / todayUtc;
}
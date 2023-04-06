$(document).ready(function() {
    var grammar = tracery.createGrammar({
        'noun': nouns,
        'adjective': adjectives,
        'origin': ['#adjective.a# #noun#.'],
    });

    grammar.addModifiers(baseEngModifiers);
    $("#gender").text(grammar.flatten('#origin#'));
});
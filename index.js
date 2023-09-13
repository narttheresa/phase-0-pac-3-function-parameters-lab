

function introduction(name) {
    return `Hi, my name is ${name}.`;
}

introduction("Aki");


function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introduction("Aki", "Ember.js");
introduction("Samip", "React");




function introductionWithLanguageOptional(name, language) {
    return `Hi, my name is ${name} and I am learning to program ${language? language : "JavaScript"}`
}


function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}




const questions = [
    // A2 (10 questions)
    {
        question: "Choisissez la forme correcte du verbe 'aller' au présent de l'indicatif pour 'nous':",
        choices: ["allons", "allez", "vont", "va"],
        correctAnswer: 0,
        level: "A2"
    },
    {
        question: "Quel est le féminin de 'beau'?",
        choices: ["belle", "beaux", "belles", "bel"],
        correctAnswer: 0,
        level: "A2"
    },
    {
        question: "Complétez la phrase : 'Je _____ du pain tous les jours.'",
        choices: ["achète", "achetez", "achètes", "achètent"],
        correctAnswer: 0,
        level: "A2"
    },
    {
        question: "Quel est le pluriel de 'journal'?",
        choices: ["journaux", "journals", "journales", "journeaux"],
        correctAnswer: 0,
        level: "A2"
    },
    {
        question: "Choisissez la bonne préposition : 'Je vais _____ Paris.'",
        choices: ["à", "en", "au", "dans"],
        correctAnswer: 0,
        level: "A2"
    },
    {
        question: "Quel est le contraire de 'grand'?",
        choices: ["petit", "gros", "large", "haut"],
        correctAnswer: 0,
        level: "A2"
    },
    {
        question: "Complétez : 'Il fait beau, _____ il pleut un peu.'",
        choices: ["mais", "et", "ou", "donc"],
        correctAnswer: 0,
        level: "A2"
    },
    {
        question: "Choisissez le bon article : '_____ table est grande.'",
        choices: ["La", "Le", "Les", "L'"],
        correctAnswer: 0,
        level: "A2"
    },
    {
        question: "Quel est le passé composé de 'finir' à la première personne du singulier?",
        choices: ["J'ai fini", "J'ai finis", "Je suis fini", "Je finissais"],
        correctAnswer: 0,
        level: "A2"
    },
    {
        question: "Complétez : 'Nous _____ au cinéma hier soir.'",
        choices: ["sommes allés", "avons allé", "allons", "irons"],
        correctAnswer: 0,
        level: "A2"
    },
    
    // B1 (10 questions)
    {
        question: "Quel est le pronom relatif correct dans la phrase : 'La personne _____ j'ai parlé est partie.'",
        choices: ["que", "qui", "dont", "à qui"],
        correctAnswer: 3,
        level: "B1"
    },
    {
        question: "Choisissez la bonne forme du verbe : 'Si j'_____ riche, je voyagerais beaucoup.'",
        choices: ["étais", "serais", "suis", "serai"],
        correctAnswer: 0,
        level: "B1"
    },
    {
        question: "Complétez avec le bon pronom : 'Je _____ ai donné le livre.'",
        choices: ["lui", "leur", "le", "la"],
        correctAnswer: 0,
        level: "B1"
    },
    {
        question: "Quel est l'adverbe dérivé de l'adjectif 'lent'?",
        choices: ["lentement", "lentment", "lentement", "lentement"],
        correctAnswer: 0,
        level: "B1"
    },
    {
        question: "Choisissez la bonne forme du participe passé : 'Les fleurs que j'ai _____.'",
        choices: ["cueillies", "cueilli", "cueillis", "cueillir"],
        correctAnswer: 0,
        level: "B1"
    },
    {
        question: "Complétez : 'Malgré _____ efforts, il n'a pas réussi.'",
        choices: ["ses", "son", "sa", "leur"],
        correctAnswer: 0,
        level: "B1"
    },
    {
        question: "Quel temps utilise-t-on dans la phrase : 'Quand j'_____ fini, je te préviendrai.'",
        choices: ["aurai", "aurais", "ai", "avais"],
        correctAnswer: 0,
        level: "B1"
    },
    {
        question: "Choisissez la bonne préposition : 'Il est arrivé _____ retard.'",
        choices: ["en", "avec", "à", "de"],
        correctAnswer: 0,
        level: "B1"
    },
    {
        question: "Quel est le gérondif du verbe 'manger'?",
        choices: ["en mangeant", "mangeant", "mangé", "mangant"],
        correctAnswer: 0,
        level: "B1"
    },
    {
        question: "Complétez : 'Je ne pense pas qu'il _____ raison.'",
        choices: ["ait", "a", "aura", "aurait"],
        correctAnswer: 0,
        level: "B1"
    },
    
    // B2 (10 questions)
    {
        question: "Choisissez la bonne forme du participe passé : 'Elles se sont _____.'",
        choices: ["parlé", "parlées", "parlés", "parler"],
        correctAnswer: 0,
        level: "B2"
    },
    {
        question: "Quel est le bon ordre des pronoms dans la phrase : 'Je _____ ai donné.'",
        choices: ["le lui", "lui le", "le leur", "leur le"],
        correctAnswer: 0,
        level: "B2"
    },
    {
        question: "Complétez avec le bon temps : 'Si j'avais su, je _____ venu.'",
        choices: ["serais", "serai", "sois", "étais"],
        correctAnswer: 0,
        level: "B2"
    },
    {
        question: "Choisissez la bonne forme : 'Quoi que vous _____, je ne changerai pas d'avis.'",
        choices: ["fassiez", "faites", "ferez", "feriez"],
        correctAnswer: 0,
        level: "B2"
    },
    {
        question: "Quel est le participe présent du verbe 'savoir'?",
        choices: ["sachant", "savant", "su", "savoir"],
        correctAnswer: 0,
        level: "B2"
    },
    {
        question: "Complétez : 'Il faut que nous _____ plus attentifs.'",
        choices: ["soyons", "sommes", "serons", "serions"],
        correctAnswer: 0,
        level: "B2"
    },
    {
        question: "Choisissez la bonne forme : 'Je doute qu'il _____ à l'heure.'",
        choices: ["soit", "est", "sera", "serait"],
        correctAnswer: 0,
        level: "B2"
    },
    {
        question: "Quel est le bon pronom relatif : 'C'est la raison pour _____ je suis venu.'",
        choices: ["laquelle", "lequel", "laquelle", "lesquelles"],
        correctAnswer: 0,
        level: "B2"
    },
    {
        question: "Complétez : 'Bien qu'il _____ malade, il est venu travailler.'",
        choices: ["soit", "est", "sera", "était"],
        correctAnswer: 0,
        level: "B2"
    },
    {
        question: "Choisissez la bonne forme : 'Il faudrait que vous _____ plus tôt.'",
        choices: ["partiez", "partez", "partirez", "partiriez"],
        correctAnswer: 0,
        level: "B2"
    },
    
    // C1 (10 questions)
    {
        question: "Quel est le mode verbal utilisé dans la phrase : 'Il faut que tu viennes immédiatement.'",
        choices: ["Indicatif", "Subjonctif", "Conditionnel", "Impératif"],
        correctAnswer: 1,
        level: "C1"
    },
    {
        question: "Choisissez la bonne forme : 'Quand bien même il _____ raison, je ne changerais pas d'avis.'",
        choices: ["aurait", "aura", "ait", "a"],
        correctAnswer: 0,
        level: "C1"
    },
    {
        question: "Complétez : 'Ne _____ -ce que pour quelques minutes, passez nous voir.'",
        choices: ["fût", "serait", "soit", "est"],
        correctAnswer: 2,
        level: "C1"
    },
    {
        question: "Quel est le bon accord du participe passé : 'Les efforts qu'il a _____.'",
        choices: ["fournis", "fourni", "fournit", "fournie"],
        correctAnswer: 0,
        level: "C1"
    },
    {
        question: "Choisissez la bonne forme : 'Il est impératif que vous _____ ce document avant demain.'",
        choices: ["remplissiez", "remplissez", "remplirez", "rempliriez"],
        correctAnswer: 0,
        level: "C1"
    },
    {
        question: "Complétez : 'Encore _____ -il que vous m'écoutiez.'",
        choices: ["faut", "fallait", "faudrait", "faudra"],
        correctAnswer: 0,
        level: "C1"
    },
    {
        question: "Quel est le bon pronom relatif composé : 'C'est un sujet _____ je ne veux pas m'exprimer.'",
        choices: ["sur lequel", "dont", "duquel", "par lequel"],
        correctAnswer: 0,
        level: "C1"
    },
    {
        question: "Choisissez la bonne forme : 'Je doute fort qu'il _____ à résoudre ce problème.'",
        choices: ["parvienne", "parvient", "parviendra", "parviendrait"],
        correctAnswer: 0,
        level: "C1"
    },
    {
        question: "Complétez : 'Pour peu qu'on _____ attention, on peut éviter bien des erreurs.'",
        choices: ["fasse", "fait", "fera", "ferait"],
        correctAnswer: 0,
        level: "C1"
    },
    {
        question: "Quel est le bon accord : 'La plupart _____ arrivés en retard.'",
        choices: ["sont", "est", "ont", "a"],
        correctAnswer: 0,
        level: "C1"
    },
    
    // C2 (10 questions)
    {
        question: "Choisissez la forme correcte du verbe au plus-que-parfait du subjonctif : 'J'aurais aimé qu'il _____ plus tôt.'",
        choices: ["vienne", "viendrait", "soit venu", "fût venu"],
        correctAnswer: 3,
        level: "C2"
    },
    {
        question: "Complétez : 'Il n'est pas jusqu'à ses ennemis qui ne _____ son courage.'",
        choices: ["reconnaissent", "reconnaîtraient", "aient reconnu", "eussent reconnu"],
        correctAnswer: 2,
        level: "C2"
    },
    {
        question: "Choisissez la bonne forme : 'Quelque intelligents qu'ils _____, ils ne pourront pas résoudre ce problème.'",
        choices: ["soient", "sont", "seraient", "fussent"],
        correctAnswer: 0,
        level: "C2"
    },
    {
        question: "Complétez : 'Il eût fallu que nous _____ plus tôt pour éviter les embouteillages.'",
        choices: ["partions", "partîmes", "soyons partis", "fussions partis"],
        correctAnswer: 3,
        level: "C2"
    },
    {
        question: "Quel est le bon accord : 'Ce sont eux qui _____ les premiers à arriver.'",
        choices: ["ont été", "sont été", "furent", "aient été"],
        correctAnswer: 0,
        level: "C2"
    },
    {
        question: "Choisissez la forme correcte : 'Encore que je _____ son point de vue, je ne peux pas l'approuver.'",
        choices: ["comprenne", "comprends", "comprendrais", "eusse compris"],
        correctAnswer: 0,
        level: "C2"
    },
    {
        question: "Complétez : 'Pour autant que je _____, cette décision n'est pas définitive.'",
        choices: ["sache", "sais", "saurai", "susse"],
        correctAnswer: 0,
        level: "C2"
    },
    {
        question: "Quel est le bon accord du participe passé : 'Les difficultés que j'ai _____.'",
        choices: ["rencontrées", "rencontré", "rencontrés", "rencontrée"],
        correctAnswer: 0,
        level: "C2"
    },
    {
        question: "Choisissez la bonne forme : 'Si tant est qu'il _____ vrai, cela changerait tout.'",
        choices: ["dise", "dit", "dirait", "eût dit"],
        correctAnswer: 0,
        level: "C2"
    },
    {
        question: "Complétez : 'Quoi que vous _____, je ne changerai pas d'avis.'",
        choices: ["fassiez", "faites", "feriez", "ayez fait"],
        correctAnswer: 0,
        level: "C2"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progress");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = `${currentQuestion + 1}. (${question.level}) ${question.question}`;
    
    choicesElement.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(button);
    });
    
    resultElement.textContent = "";
    nextButton.style.display = "none";
    updateProgress();
}

function checkAnswer(choiceIndex) {
    const question = questions[currentQuestion];
    const buttons = choicesElement.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.disabled = true;
    }
    
    if (choiceIndex === question.correctAnswer) {
        buttons[choiceIndex].classList.add("correct");
        resultElement.textContent = "Correct !";
        score++;
    } else {
        buttons[choiceIndex].classList.add("incorrect");
        buttons[question.correctAnswer].classList.add("correct");
        resultElement.textContent = "Incorrect. La bonne réponse est : " + question.choices[question.correctAnswer];
    }
    
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionElement.textContent = "Quiz terminé !";
    choicesElement.innerHTML = "";
    resultElement.textContent = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `Votre score final : ${score} / ${questions.length}`;
    progressElement.textContent = "";
}

function updateProgress() {
    progressElement.textContent = `Question ${currentQuestion + 1} / ${questions.length}`;
}

nextButton.addEventListener("click", nextQuestion);

loadQuestion();


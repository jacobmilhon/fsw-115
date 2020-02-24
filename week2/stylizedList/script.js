let jdata = {
    "results": [
        {
            "category": "Vehicles",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following vehicles featured a full glass roof at base model?",
            "correct_answer": "Renault Avantime",
            "incorrect_answers": [
                "Chevy Volt",
                "Mercedes-Benz A-Class",
                "Honda Odyssey"
            ]
        },
        {
            "category": "Entertainment: Cartoon & Animations",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these is not a real character in the cartoon series My Little Pony: Friendship is Magic?",
            "correct_answer": "Rose Marene",
            "incorrect_answers": [
                "Pinkie Pie",
                "Maud Pie",
                "Rainbow Dash"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Which of these names was an actual codename for a cancelled Microsoft project?",
            "correct_answer": "Neptune",
            "incorrect_answers": [
                "Enceladus",
                "Pollux",
                "Saturn"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In the videogame Bully, what is the protagonist&#039;s last name?",
            "correct_answer": "Hopkins",
            "incorrect_answers": [
                "Smith",
                "Kowalski",
                "Crabblesnitch"
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What were the first states to break away from Yugoslavia?",
            "correct_answer": "Slovenia, Croatia",
            "incorrect_answers": [
                "Macedonia, Montenegro",
                "Slovenia, Macedonia",
                "Montenegro, Slovenia"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In Danganronpa: Trigger Happy Havoc, what is the protagonist&#039;s name?",
            "correct_answer": "Makoto Naegi",
            "incorrect_answers": [
                "Hajime Hinata",
                "Nagito Komaeda",
                "Komaru Naegi"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which of the following was NOT a playable character in the game Kingdom Hearts: Birth by Sleep?",
            "correct_answer": "Ignis",
            "incorrect_answers": [
                "Ventus",
                "Terra",
                "Aqua"
            ]
        },
        {
            "category": "Entertainment: Cartoon & Animations",
            "type": "multiple",
            "difficulty": "hard",
            "question": "In &quot;Rick and Morty&quot;, from which dimension do Rick and Morty originate from?",
            "correct_answer": "C-137",
            "incorrect_answers": [
                "J1977",
                "C-136",
                "C500-a"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What is the name of the supercomputer located in the control room in &quot;Jurassic Park&quot; (1993)?",
            "correct_answer": "Thinking Machines CM-5",
            "incorrect_answers": [
                "Cray X-MP",
                "Cray XK7",
                "IBM Blue Gene/Q"
            ]
        },
        {
            "category": "Politics",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who succeeded Joseph Stalin as General Secretary of the Communist Party of the Soviet Union?",
            "correct_answer": "Nikita Khrushchev",
            "incorrect_answers": [
                "Leonid Brezhnev",
                "Mikhail Gorbachev",
                "Boris Yeltsin"
            ]
        }
    ]
}

//make array of questions and add them to list
function getQuestions(item) {
    let q = item.question;
    return q;
};
questions = jdata.results.map(getQuestions);
for(i = 0; i < questions.length; i++) {
    addQuestions = document.getElementById("questions");
    let li = document.createElement("li");
    li.textContent = questions[i];
    addQuestions.append(li);
};

//make array of Answers and add them to list
function getAnswers(item) {
    let a = item.correct_answer;
    return a;
};
answers = jdata.results.map(getAnswers);
for(i = 0; i < answers.length; i++) {
    addAnswers = document.getElementById("answers");
    let li = document.createElement("li");
    li.textContent = answers[i];
    addAnswers.append(li);
};
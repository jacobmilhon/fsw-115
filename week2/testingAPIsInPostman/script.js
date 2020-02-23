//copied json data from api
let jdata = [{
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What was Marilyn Monroe`s character&#039;s first name in the film &quot;Some Like It Hot&quot;?",
    "correct_answer": "Sugar",
    "incorrect_answers": [
        "Honey",
        "Caramel",
        "Candy"
    ]
},
{
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Who was the first jedi that Starkiller had to kill in Star Wars: The Force Unleashed?",
    "correct_answer": "Rahm Kota",
    "incorrect_answers": [
        "Ahsoka Tano",
        "Kazdan Paratus",
        "Kento Marek"
    ]
},
{
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What geometric shape is generally used for stop signs?",
    "correct_answer": "Octagon",
    "incorrect_answers": [
        "Hexagon",
        "Circle",
        "Triangle"
    ]
},
{
    "category": "Geography",
    "type": "multiple",
    "difficulty": "medium",
    "question": "The land of Gotland is located in which European country?",
    "correct_answer": "Sweden",
    "incorrect_answers": [
        "Denmark",
        "Norway",
        "Germany"
    ]
},
{
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "After how many years would you celebrate your crystal anniversary?",
    "correct_answer": "15",
    "incorrect_answers": [
        "20",
        "10",
        "25"
    ]
},
{
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "easy",
    "question": "&quot;The first rule is: you don&#039;t talk about it&quot; is a reference to which movie?",
    "correct_answer": "Fight Club",
    "incorrect_answers": [
        "The Island",
        "Unthinkable",
        "American Pie"
    ]
},
{
    "category": "History",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What year did World War I begin?",
    "correct_answer": "1914",
    "incorrect_answers": [
        "1905",
        "1919",
        "1925"
    ]
},
{
    "category": "Geography",
    "type": "boolean",
    "difficulty": "medium",
    "question": "The title of the 1969 film &quot;Krakatoa, East_of Java&quot; is incorrect, as Krakatoa is in fact west of Java.",
    "correct_answer": "True",
    "incorrect_answers": [
        "False"
    ]
},
{
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "hard",
    "question": "If you planted the seeds of Quercus robur, what would grow?",
    "correct_answer": "Trees",
    "incorrect_answers": [
        "Grains",
        "Vegetables",
        "Flowers"
    ]
},
{
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "easy",
    "question": "When someone is cowardly, they are said to have what color belly?",
    "correct_answer": "Yellow",
    "incorrect_answers": [
        "Green",
        "Red",
        "Blue"
    ]
}
]

let result = JSON.stringify(jdata);
document.body.append(result);

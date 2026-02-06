$(document).ready(function () {

    let quiz = [

        {
            q: "What is the capital of India?",
            options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
            ans: 1
        },

        {
            q: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            ans: 1
        },

        {
            q: "Who is known as the Father of the Nation in India?",
            options: ["Nehru", "Gandhi", "Bose", "Patel"],
            ans: 1
        },

        {
            q: "Which animal is called the King of the Jungle?",
            options: ["Tiger", "Elephant", "Lion", "Leopard"],
            ans: 2
        },

        {
            q: "How many days are there in a leap year?",
            options: ["365", "366", "364", "360"],
            ans: 1
        },

        {
            q: "Which is the largest ocean in the world?",
            options: ["Indian", "Atlantic", "Pacific", "Arctic"],
            ans: 2
        },

        {
            q: "What is the national bird of India?",
            options: ["Crow", "Sparrow", "Peacock", "Parrot"],
            ans: 2
        },

        {
            q: "Which festival is called the Festival of Lights?",
            options: ["Holi", "Diwali", "Pongal", "Onam"],
            ans: 1
        },

        {
            q: "Who invented the telephone?",
            options: ["Newton", "Edison", "Bell", "Tesla"],
            ans: 2
        },

        {
            q: "Which gas do plants use for photosynthesis?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            ans: 2
        }

    ];


    let index = 0;
    let score = 0;
    let userAns = [];


    loadQuestion();


    function loadQuestion() {

        $("#question").text(quiz[index].q);

        $("#op1").text(quiz[index].options[0]);
        $("#op2").text(quiz[index].options[1]);
        $("#op3").text(quiz[index].options[2]);
        $("#op4").text(quiz[index].options[3]);

        $("input[name='option']").prop("checked", false);

        if (userAns[index] !== undefined) {
            $("input[value=" + userAns[index] + "]").prop("checked", true);
        }



        if (index === quiz.length - 1) {
            $("#next").hide();
            $("#submit").show();
        } 
        else {
            $("#next").show();
            $("#submit").hide();
        }
    }


    
    $("#next").click(function () {

        let selected = $("input[name='option']:checked").val();

        if (selected === undefined) {
            alert("Please select an answer");
            return;
        }

        userAns[index] = parseInt(selected);

        index++;
        loadQuestion();
    });



    $("#prev").click(function () {

        if (index > 0) {
            index--;
            loadQuestion();
        }

    });


    
    $("#submit").click(function () {

        let selected = $("input[name='option']:checked").val();

        if (selected === undefined) {
            alert("Please select an answer");
            return;
        }

        userAns[index] = parseInt(selected);

        showResult();

        $("#submit").hide();
        $("#restart").show();
    });


    $("#restart").click(function () {

        index = 0;
        score = 0;
        userAns = [];

        $("#result").html("");

        $("#restart").hide();
        $("#next").show();

        loadQuestion();
    });


    // RESULT
    function showResult() {

        score = 0;

        let resultText = "";

        for (let i = 0; i < quiz.length; i++) {

            if (userAns[i] === quiz[i].ans) {
                score++;
            }

            resultText +=
                "<b>Q" + (i + 1) + ":</b> " + quiz[i].q +
                "<br>Your Answer: " + quiz[i].options[userAns[i]] +
                "<br>Correct Answer: " + quiz[i].options[quiz[i].ans] +
                "<hr>";
        }

        $("#result").html(
            "<h3>Score: " + score + "/" + quiz.length + "</h3>" +
            resultText
        );
    }

});

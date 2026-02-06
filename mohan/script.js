$(document).ready(function () {

    let quiz = [
        {
            q: "HTML stands for?",
            options: ["HighText", "HyperText", "Hyper Tool", "Home Tool"],
            ans: 1
        },

        {
            q: "Which is used for styling?",
            options: ["HTML", "Java", "CSS", "PHP"],
            ans: 2
        },

        {
            q: "Which library is used here?",
            options: ["React", "Angular", "jQuery", "Vue"],
            ans: 2
        }
    ];

    let index = 0;
    let score = 0;
    let userAns = [];

    loadQuestion();


    function loadQuestion() {

        $("#question").hide().fadeIn(400);

        $("#question").text(quiz[index].q);

        $("#op1").text(quiz[index].options[0]);
        $("#op2").text(quiz[index].options[1]);
        $("#op3").text(quiz[index].options[2]);
        $("#op4").text(quiz[index].options[3]);

        $("input[name='option']").prop("checked", false);

        if (userAns[index] !== undefined) {
            $("input[value=" + userAns[index] + "]").prop("checked", true);
        }
    }


    $("#next").click(function () {

        let selected = $("input[name='option']:checked").val();

        if (selected === undefined) {
            alert("Please select an answer!");
            return;
        }

        userAns[index] = parseInt(selected);

        if (index < quiz.length - 1) {
            index++;
            loadQuestion();
        }
        else {
            showResult();
        }
    });


    $("#prev").click(function () {

        if (index > 0) {
            index--;
            loadQuestion();
        }

    });


    $("#restart").click(function () {

        index = 0;
        score = 0;
        userAns = [];

        $("#result").html("");

        loadQuestion();

    });


    function showResult() {

        score = 0;

        for (let i = 0; i < quiz.length; i++) {
            if (userAns[i] === quiz[i].ans) {
                score++;
            }
        }

        $("#result").html(
            "Total Questions: " + quiz.length +
            "<br>Correct Answers: " + score +
            "<br>Score: " + score + "/" + quiz.length
        );
    }

});

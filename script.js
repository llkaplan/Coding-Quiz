window.onload = function () {

    //global vars
    var score = 0;
    var startBtn = document.getElementById('getStarted');
    var firstPage = document.getElementById('quizContent');
    var questionPage = document.getElementById('quiz');
    var nextButton = document.getElementById('next');
    var questionSpot = document.getElementById('questionDiv');
    var headerSpot = document.getElementById('headerArea');
    var iter = 0;

    // storing all my questions

    var myQuestions = [
        {
            question: "What keywords do you use to declare variables",
            answers: ["Var and Name", "Variable and Let", "Var and Let"],
            correctAnswer: 'Var and Let'
        },
        {
            question: "Which of the following isn't a data type?",
            answers: ["String", "Group", "Boolean", "Array", "Object"],
            correctAnswer: 'b'
        },
        {
            question: "What is the proper syntax for an click event?",
            answers: ["addEventListener(\"click\", myScript)", "click.function()", "addEventListener(click)"],
            correctAnswer: 'a'
        }
    ];

    //functions



    startBtn.addEventListener("click", function () {
        firstPage.style.display = "none";
        questionPage.style.display = "block";
        var questionText = document.createElement("h3");
        questionText.classList.add("header" + iter);
        questionText.innerHTML = myQuestions[iter].question;
        headerSpot.appendChild(questionText);

        for (i = 0; i < myQuestions[iter].answers.length; i++) {
            var answerButton = document.createElement("button");
            answerButton.innerHTML = myQuestions[iter].answers[i];
            answerButton.classList.add("btn", 'btnlight', "answerBtn");
            questionSpot.appendChild(answerButton);
        };

        answerButton.addEventListener("click", function () {
            curAns = answerButton;
        });

        nextButton.addEventListener("click", function () {

            if (curAns = myQuestions[iter].correctAnswer) {
                score++;
                console.log(score);
            }

            while (questionSpot.firstChild) {
                questionSpot.removeChild(questionSpot.firstChild);
            };
            

            if (iter < (myQuestions.length - 1)) {
                iter++;

                var questionText = document.createElement("h3");
                questionText.innerHTML = myQuestions[iter].question;
                headerSpot.appendChild(questionText);

                for (i = 0; i < myQuestions[iter].answers.length; i++) {
                    var answerButton = document.createElement("button");
                    answerButton.innerHTML = myQuestions[iter].answers[i];
                    answerButton.classList.add("btn", 'btnlight', "answerBtn");
                    questionSpot.appendChild(answerButton);
                    /*     questionPage.insertBefore(answerButton, null);
                         questionPage.insertBefore(answerButton, questionPage.childNodes[1] || null); */
                };

                answerButton.addEventListener("click", function () {
                    curAns = answerButton;
                });

            }
            else {
                firstPage.style.display = "none";
                questionPage.style.display = "none";
                lastPage.style.display = "block";
            }
        })


    });

}

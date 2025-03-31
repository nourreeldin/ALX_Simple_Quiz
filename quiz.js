function checkAnswer() {
    let correctAnswer = "4";
    let selectedAnswer = document.querySelector('[name="quiz"]:checked');
    if (selectedAnswer) {
        let userAnswer = selectedAnswer.getAttribute('value');
        if (userAnswer == correctAnswer)
            document.getElementById('feedback').textContent = "Correct! Well done.";
        else
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
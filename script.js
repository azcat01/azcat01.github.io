let score = 0;
let settledQuiz = [];

const showQuestion = () => {
    const main = document.querySelector("main");

    const progressContainer = document.createElement("div");
    progressContainer.className = "text-end";
    main.appendChild(progressContainer);

    const progress = document.createElement("p");
    progress.className = "d-inline-flex p-2 border border-light border-3 rounded-5 fs-5";
    progress.id = "progress";
    progressContainer.appendChild(progress);

    const mondaiContainer = document.createElement("div");
    mondaiContainer.className = "container mt-3";
    main.appendChild(mondaiContainer);

    const mondai = document.createElement("p");
    mondai.id = "mondai";
    mondai.className = "text-center fs-4";
    mondaiContainer.appendChild(mondai);

    const kaitou = document.createElement("div");
    kaitou.className = "row row-cols-3 gap-md-3 gap-2 justify-content-evenly mt-5";
    kaitou.id = "kaitou";
    main.appendChild(kaitou);

    for(let j = 0; j < 4; j++) {
        const button = document.createElement("button");
        button.className = "p-0 py-md-3 btn btn-light btn-lg";
        button.type = "button";
        kaitou.appendChild(button);
    }
};

const getQuestionNumber = async () => {
    const progress = document.getElementById("progress");

    const data = await fetch('quizData.json').then(res => res.json());
    let questionNum = Math.floor((Math.random() * 10));

    while(settledQuiz.includes(questionNum)) {
        questionNum = Math.floor((Math.random() * 10));
    }

    settledQuiz.push(questionNum);
    progress.innerHTML = settledQuiz.length + "/10";

    return data[questionNum];
};

const setQuestion = async () => {
    const { question, options, answer } = await getQuestionNumber();
    mondai.innerHTML = question;

    const buttons = kaitou.querySelectorAll(".btn");
    for(let i = 0; i < buttons.length; i++) {
        const eventHandler = () => {
            if(buttons[i].innerHTML === answer) {
                score++;
                buttons[i].className = "p-0 py-md-3 btn btn-success btn-lg";
            } else {
                buttons[i].className = "p-0 py-md-3 btn btn-danger btn-lg";
                buttons[options.indexOf(answer)].className = "p-0 py-md-3 btn btn-info btn-lg";
            }

            // Remove button's listeners
            buttons.forEach(button => {
                button.replaceWith(button.cloneNode(true))
            });

            setTimeout(settledQuiz.length === 10? showResult : setQuestion, 2250);
        }

        buttons[i].className = "p-0 py-md-3 btn btn-light btn-lg";
        buttons[i].innerHTML = options[i];
        buttons[i].addEventListener("click", eventHandler);
    }
};

const showResult = () => {
    clearMain();
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.className = "container text-center";
    main.appendChild(container);

    const header = document.createElement("h2");
    header.innerHTML = "Result";
    container.appendChild(header);

    const result = document.createElement("p");
    result.innerHTML = "You have scored " + score + "/10!";
    result.className = "mt-5 lead";
    container.appendChild(result);

    const button = document.createElement("button");
    button.innerHTML = "Try Again";
    button.className = "mt-5 btn btn-light btn-md";
    container.appendChild(button);

    button.addEventListener("click", () => {
        reset();
        clearMain();
        showQuestion();
        setQuestion();
    });
};

const clearMain = () => {
    const main = document.querySelector("main");
    const children = main.querySelectorAll("div");
    children.forEach(element => { element.remove() });
};

const reset = () => {
    settledQuiz = [];
    score = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
    setQuestion();
});
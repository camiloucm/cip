const ARROWS = document.querySelectorAll('.i');
const QUESTIONS = document.querySelectorAll('.question');
const ANSWERS = document.querySelectorAll('.answer');

ARROWS.forEach((ARROW, index) => {
    ARROW.addEventListener('click', () => {
        if (ANSWERS[index].classList.contains('inactive')) {
            ANSWERS[index].classList.remove('inactive');
            ANSWERS[index].classList.add('active');
        } else {
            ANSWERS[index].classList.remove('active');
            ANSWERS[index].classList.add('inactive');
        }

        const currentRotation = ARROW.style.transform;
        ARROW.style.transform = currentRotation === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});

QUESTIONS.forEach((QUESTION, index) => {
    QUESTION.addEventListener('click', () => {
            if (ANSWERS[index].classList.contains('inactive')) {
                ANSWERS[index].classList.remove('inactive');
                ANSWERS[index].classList.add('active');
            } else {
                ANSWERS[index].classList.remove('active');
                ANSWERS[index].classList.add('inactive');
            }

        const currentRotation = ARROWS[index].style.transform;
        ARROWS[index].style.transform = currentRotation === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});
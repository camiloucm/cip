const ARROWS = document.querySelectorAll('.i');
const QUESTIONS = document.querySelectorAll('.question'); // Selecciona los elementos con la clase 'question'
const ANSWERS = document.querySelectorAll('.answer'); // Selecciona los elementos con la clase 'answer'

// Itera sobre cada flecha y agrega el event listener
ARROWS.forEach((ARROW, index) => {
    ARROW.addEventListener('click', () => {
        // Toggle de las clases 'inactive' y 'active' en la respuesta correspondiente
        if (ANSWERS[index].classList.contains('inactive')) {
            ANSWERS[index].classList.remove('inactive');
            ANSWERS[index].classList.add('active');
        } else {
            ANSWERS[index].classList.remove('active');
            ANSWERS[index].classList.add('inactive');
        }

        // Toggle de la rotación de la flecha
        const currentRotation = ARROW.style.transform;
        ARROW.style.transform = currentRotation === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});

// Itera sobre cada pregunta y agrega el event listener
QUESTIONS.forEach((QUESTION, index) => {
    QUESTION.addEventListener('click', () => {

        
            // Toggle de las clases 'inactive' y 'active' en la respuesta correspondiente
            if (ANSWERS[index].classList.contains('inactive')) {
                ANSWERS[index].classList.remove('inactive');
                ANSWERS[index].classList.add('active');
            } else {
                ANSWERS[index].classList.remove('active');
                ANSWERS[index].classList.add('inactive');
            }

        // Toggle de la rotación de la flecha
        const currentRotation = ARROWS[index].style.transform;
        ARROWS[index].style.transform = currentRotation === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});
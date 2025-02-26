const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const ratingOptions = document.querySelectorAll('input[type="radio"]');
let ratingValue = 5;
const successMessage = document.querySelector('#successMessage');
const score = document.querySelector('#score');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    ratingOptions.forEach(option => {
        if (option.checked) {
            ratingValue = option.value;
            console.log("This is the rating selected: " + ratingValue);
        }
    });

    if (score) {
        successMessage.classList.add('active');
        form.classList.remove('active');
        score.textContent =`You selected ${ratingValue} out of 5`;
    }

    if (successMessage.classList.contains('active')) {
        const body = document.querySelector('body');
        body.addEventListener('click', function(event) {
            if (event.target.id === 'main' || event.target.id === 'successMessage') {
                successMessage.classList.remove('active');
                form.classList.add('active');
            };
        });
    }
});
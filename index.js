const rates = document.querySelectorAll('.rate')
let selected = 0;
rates.forEach(rate => {
    rate.addEventListener("click",e => {
        rates.forEach(rate => {
            rate.style.backgroundColor = '';
            rate.style.color = '';
        })
        rate.style.backgroundColor = 'hsl(25, 97%, 53%)';
        rate.style.color = "hsl(0, 0%, 100%)";
        selected = rate.id;
    })
});

const submit = document.getElementById('submit');
submit.addEventListener('click', e => {
    const rate = document.getElementById('rating');
    rate.classList.remove('visible');
    rate.classList.add('invisible');

    const thanks = document.getElementById('thanks');
    thanks.classList.remove('invisible');
    thanks.classList.add('visible');
    
    document.getElementById('selected').innerText = selected;
})
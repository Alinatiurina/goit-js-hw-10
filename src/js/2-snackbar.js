import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const delay = document.querySelector('[name="delay"]');
const fulfilledInput = document.querySelector('[value="fulfilled"]');
const rejectedInput = document.querySelector('[value="rejected"]');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    const delayTrim = delay.value.trim();
    const delayNum = parseInt(delayTrim, 10);
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fulfilledInput.checked) {
                resolve(`✅ Fulfilled promise in ${delayNum} ms`);
            } else if (rejectedInput.checked) {
                reject(`❌ Rejected promise in ${delayNum} ms`);
            }
        }, delayNum);
    });

   promise
        .then(i => {
            iziToast.success({
                title: '',
                position: 'topRight',
                message: i,
});
        })
        .catch(i => {
            iziToast.error({
                title: '',
                position: 'topRight',
                message: i,
});
        });
event.preventDefault();})
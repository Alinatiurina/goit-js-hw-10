import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const createBtn = document.querySelector('button');
const delay = document.querySelector('[name="delay"]');
const fulfilledInput = document.querySelector('[value="fulfilled"]');
const rejectedInput = document.querySelector('[value="rejected"]');

createBtn.addEventListener("click", createPromise);

function createPromise() {
    event.preventDefault();
    const delayNum = parseInt(delay.value.trim());
    
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
}
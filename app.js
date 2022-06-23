const form = document.getElementById('form');
const pwd = document.getElementById('pwd');
const confirmPWd = document.getElementById('pwd-confirm');
const msg = document.querySelector('#msg');

const valideForm = (e) => {
    e.preventDefault();
    if (pwd.value !== confirmPWd.value) {
        msg.textContent = "The passwords don't match!";
        return;
    }
    msg.classList.remove('.error');
    msg.classList.add('success');
    msg.textContent = "Submitted";
    setTimeout(() => {
        window.location.reload();
    }, 2000)

}
form.addEventListener('submit', valideForm);
// Menu-icon //
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

// Contact Form //
const scriptURL = 'https://script.google.com/macros/s/AKfycbyFwKtLakhIIbwXXvtqXZsfXHBv_8EcIzI4JAfBLheEBNWCyaLt2x4bkfJEZAH1eLvC/exec'
const form = document.forms['contact-form'];

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // reset
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
});
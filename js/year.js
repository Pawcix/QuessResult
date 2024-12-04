const year = document.querySelector('#year');

const currentYear = () => {
    const newYear = new Date().getFullYear();

    year.innerText = newYear;
}

currentYear();
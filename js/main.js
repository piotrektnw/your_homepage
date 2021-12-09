import { API_KEY } from "./api.js";


const websiteBackground = document.querySelector('.background');
const setBgBtn = document.querySelector('.set-background');
const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')



const chooseCategory = () => {
    checkboxes.forEach((checkbox) => {
        console.log(checkbox.checked);
    })
}

const setBackground = () => {

    let checked = document.querySelectorAll('input[type="checkbox"]:checked')
    
    let background;
    let categoryNo;
    let number = Math.floor(Math.random() * 19)
    checked.length > 0 ? categoryNo = Math.floor(Math.random() * (checked.length)) : categoryNo = Math.floor(Math.random() * (checked.length-1))

    // Check category name
    console.log(checked[categoryNo].name);

    axios({
        method: 'get',
        url: `https://pixabay.com/api/?key=${API_KEY}&category=${checked[categoryNo].name}&image_type=photo&safesearch=true`
    })
        .then((response) => {
            background = response.data.hits[number].largeImageURL
            websiteBackground.style.backgroundImage = `url('${background}')`;
        })
}

setBgBtn.addEventListener('click', setBackground)

// Background auto-change
window.setInterval(setBackground, 50000)
window.addEventListener('DOMContentLoaded', chooseCategory)
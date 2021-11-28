import { API_KEY } from "./api.js";


const websiteBackground = document.querySelector('.background');
const setBgBtn  = document.querySelector('.set-background');

let categories = ['nature', 'industry', 'sports', 'buildings', 'business', 'food', 'fashion', 'science', 'backgrounds', 'people']

const setBackground = () => {

    let background;
    let number = Math.floor(Math.random() * 19)
    let categoryNo = Math.floor(Math.random() * categories.length - 1)
    console.log(categoryNo);
    console.log(number);

    axios({
        method: 'get',
        url: `https://pixabay.com/api/?key=${API_KEY}&category=${categories[categoryNo]}&image_type=photo&safesearch=true`
    })
        .then((response) => {
            background = response.data.hits[number].largeImageURL
            websiteBackground.style.backgroundImage = `url('${background}')`;
        })
}

setBgBtn.addEventListener('click', setBackground)

// Prepare background auto-change
// window.setInterval(setBackground, 50000)
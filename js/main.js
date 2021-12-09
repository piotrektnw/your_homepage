import { API_KEY } from "./api.js";


const websiteBackground = document.querySelector('.background');
const setBgBtn = document.querySelector('.set-background');
const addBtn = document.querySelector('.add')
const toDoListContainer = document.querySelector('.block__item--5')

const setBackground = () => {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked')

    let background;
    let categoryNo;
    let number = Math.floor(Math.random() * 19)
    checked.length > 0 ? categoryNo = Math.floor(Math.random() * (checked.length)) : categoryNo = Math.floor(Math.random() * (checked.length - 1))

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

const addNewTask = () => {
    let inputValue = document.querySelector('.to-do-input').value;
    let ulList = document.querySelector('.to-do-list__list')
    let newTask = document.createElement('li')
    newTask.innerHTML = inputValue
    ulList.appendChild(newTask)
    console.log(inputValue);

    growToDoList()
}


const growToDoList = () => {

    let currentHeight = toDoListContainer.offsetHeight
    currentHeight = currentHeight + 24 + "px"
    toDoListContainer.style.height = currentHeight

    // Verify element height
    console.log(currentHeight);
}


setBgBtn.addEventListener('click', setBackground);
addBtn.addEventListener('click', addNewTask)
// Background auto-change
window.setInterval(setBackground, 50000);


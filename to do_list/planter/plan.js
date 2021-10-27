let input = document.getElementById('input');
let form = document.getElementById('form');

const todo = JSON.parse(localStorage.getItem('key'));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addLi();
});

if (todo) {
    todo.forEach(item => addLi(item));
}

function addLi(item) {
    const UL = document.getElementById('ul');
    const LI = document.createElement('li');

    let taska = input.value;

    if (item) {
        taska = item;
    }

    if (taska) {

        if (item || taska) {
            LI.classList.add('ready')
        }

        LI.innerText = taska;
        UL.appendChild(LI);
        input.value = '';
        updateLS()
    }

    LI.addEventListener('click', (e) => {
        e.preventDefault();
        LI.classList.toggle('del')
        updateLS()
    })

    LI.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        LI.remove()
        updateLS()
    })
}

function updateLS() {
    const task = [];
    const taskLi = document.querySelectorAll('li');
    taskLi.forEach(e => {
        task.push(e.innerHTML);
    })

    localStorage.setItem('key', JSON.stringify(task))
};

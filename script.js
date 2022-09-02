const div1 = document.getElementById('div1');
const newDiv = document.createElement('div')
const form = document.getElementById('form')
let newBookBtn = document.getElementById('newBookBtn');
let myLibrary =[];
const clear1 = document.getElementById('clear1');
const trashBar = document.getElementById('trashBar')
const boxes = document.querySelectorAll('.readBtns');

const book1 = new book('Title: hobbit, ','jk rowling, ', '420 pages, ', 'not read');
book1.reportInfo()

const book2 = new book('h, ','j, ', '42es, ', 'ad');
book1.reportInfo()

form.addEventListener('submit', addBookToLibrary(book2));

newBookBtn.addEventListener("click", function() {
    document.getElementById('form').className = "formShow"
})

submitBtn.addEventListener("click", function() {
    document.getElementById('form').className = "formHide";
    addBookToLibrary(book1);
})

clear1.addEventListener('click', function () {
    div1.textContent = ''
})

status1.addEventListener('click', function() {
    if (status1.className === 'readBtns') {
        status1.className = 'statusRead'
    }
    else if (status1.className === 'statusRead') {
        status1.className = 'readBtns'
    }
})

status2.addEventListener('click', function() {
    if (status2.className === 'readBtns') {
        status2.className = 'statusRead'
    }
    else if (status2.className === 'statusRead') {
        status2.className = 'readBtns'
    }
})

status3.addEventListener('click', function() {
    if (status3.className === 'readBtns') {
        status3.className = 'statusRead'
    }
    else if (status3.className === 'statusRead') {
        status3.className = 'readBtns'
    }
})

status4.addEventListener('click', function() {
    if (status4.className === 'readBtns') {
        status4.className = 'statusRead'
    }
    else if (status4.className === 'statusRead') {
        status4.className = 'readBtns'
    }
})

status5.addEventListener('click', function() {
    if (status5.className === 'readBtns') {
        status5.className = 'statusRead'
    }
    else if (status5.className === 'statusRead') {
        status5.className = 'readBtns'
    }
})

status6.addEventListener('click', function() {
    if (status6.className === 'readBtns') {
        status6.className = 'statusRead'
    }
    else if (status6.className === 'statusRead') {
        status6.className = 'readBtns'
    }
})

status7.addEventListener('click', function() {
    if (status7.className === 'readBtns') {
        status7.className = 'statusRead'
    }
    else if (status7.className === 'statusRead') {
        status7.className = 'readBtns'
    }
})

status8.addEventListener('click', function() {
    if (status8.className === 'readBtns') {
        status8.className = 'statusRead'
    }
    else if (status8.className === 'statusRead') {
        status8.className = 'readBtns'
    }
})

status9.addEventListener('click', function() {
    if (status9.className === 'readBtns') {
        status9.className = 'statusRead'
    }
    else if (status9.className === 'statusRead') {
        status9.className = 'readBtns'
    }
})

status10.addEventListener('click', function() {
    if (status10.className === 'readBtns') {
        status10.className = 'statusRead'
    }
    else if (status10.className === 'statusRead') {
        status10.className = 'readBtns'
    }
})



function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.reportInfo = function() {
       console.log(title, author, pages, status)
    }
}


function addBookToLibrary(book){
    myLibrary.push(book);
        for (let i = 0; i < 1; i++){
           div1.textContent = (book.title + book.author 
            + book.pages + book.status);
    }}









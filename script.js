const div1 = document.getElementById('div1');
const newDiv = document.createElement('div')
const form = document.getElementById('form')
let newBookBtn = document.getElementById('newBookBtn');
let myLibrary =[];
let text = myLibrary.join()
const clear1 = document.getElementById('clear1');
const trashBar = document.getElementById('trashBar')
const newBook = new book(title,author,pages,status)









newBookBtn.addEventListener("click", function() {
    document.getElementById('form').className = "formShow"
})

submitBtn.addEventListener("click", function(e){
    myLibrary.push('hi')
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;
    document.getElementById('form').className = "formHide";
    e.preventDefault();
    if (div1.textContent === '') { //can probably do all this easier with a for loop
             div1.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages

    }
    else if (div1.textContent != '') {
        div2.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages
    }



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

    










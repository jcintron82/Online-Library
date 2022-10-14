const form = document.getElementById('form')
let newBookBtn = document.getElementById('newBookBtn');
const clear1 = document.getElementById('clear1');
const trashBar = document.getElementById('trashBar')
const newBook = new book(title,author,pages,status)

function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.reportInfo = function() {
       console.log(title, author, pages, status)
    }
}


newBookBtn.addEventListener("click", function() {
    document.getElementById('form').className = "formShow"
})

submitBtn.addEventListener("click", function(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    document.getElementById('form').className = "formHide";
    e.preventDefault();
   
     if (div1.textContent === '') { //can probably do all this easier with a for loop
             div1.textContent = 'Title: '+ title +" " + 'Author: ' + author + ' Pages:' + pages

    }
     else if (div2.textContent === '') {
        div2.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages
    }
     else if (div3.textContent === '') {
        div3.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages
    }
     else if (div4.textContent === '') {
        div4.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages
    }
     else if (div5.textContent === '') {
        div5.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages
    }
     else if (div6.textContent === '') { //can probably do all this easier with a for loop
             div6.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages

    }
     else if (div7.textContent === '') {
        div7.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages
    }
     else if (div8.textContent === '') {
        div8.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages
    }
     else if (div9.textContent === '') {
        div9.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages
    }
     else if (div10.textContent === '') {
        div10.textContent = 'Title: '+ title + ' Author: ' + author + ' Pages:' + pages
    }
    form.reset();
})

<<<<<<< HEAD
=======
console.log(myLibrary)
>>>>>>> d39be0568e0ab59db6a0142b944f4d9f7c95fa78

clear1.addEventListener('click', function () {
    div1.textContent = ''
})
clear2.addEventListener('click', function () {
    div2.textContent = ''
})
clear3.addEventListener('click', function () {
    div3.textContent = ''
})
clear4.addEventListener('click', function () {
    div4.textContent = ''
})
clear5.addEventListener('click', function () {
    div5.textContent = ''
})
clear6.addEventListener('click', function () {
    div6.textContent = ''
})
clear7.addEventListener('click', function () {
    div7.textContent = ''
})
clear8.addEventListener('click', function () {
    div8.textContent = ''
})
clear9.addEventListener('click', function () {
    div9.textContent = ''
})
clear10.addEventListener('click', function () {
    div10.textContent = ''
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
<<<<<<< HEAD
=======









>>>>>>> d39be0568e0ab59db6a0142b944f4d9f7c95fa78

const div1 = document.getElementById('div1');
let newBookBtn = document.getElementById('newBookBtn');
let myLibrary =[];

const book1 = new book('hobbit, ','jk rowling, ', '420 pages, ', 'not read');
book1.reportInfo()

const book2 = new book('h, ','j, ', '42es, ', 'ad');
book1.reportInfo()

newBookBtn.addEventListener("click", function() {
    document.getElementById('form').className = "formShow"
})

submitBtn.addEventListener("click", function() {
    document.getElementById('form').className = "formHide";

})

if (read.checked = true) {
    notRead.checked = false;
}


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

console.log(addBookToLibrary(book1))







document.addEventListener("DOMContentLoaded", function () {

const myLibrary = [];


function Book(title,author,pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;


}
function render(){
  let libraryEl = document.querySelector("#library")
  libraryEl.innerHTML = "";
  for(let i=0;i< myLibrary.length;i++){

    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = 
    `
    <div class="book-card">
    <h3 class="title">Book title: ${book.title}</h3>
    <h3 class="author">Book Author: ${book.author}</h3>
    <h3 class="pages">Number of pages ${book.pages}</h3>
    <h3 class="read">Has book been read: ${book.read}</h3>
    <button class="remove=btn" oneclick="removeBookFromLibrary(${i})"">Remove</button>
    </div>
`
    libraryEl.appendChild(bookEl);
  }
}
function removeBookFromLibrary(removeIndex){
  myLibrary.spice(removeIndex,1)
  render();


}
function addBookToLibrary() {

  let title = document.querySelector("#title").value
  let author = document.querySelector("#author").value
  let pages = document.querySelector("#pages").value
  let read = document.querySelector("#read").checked
let newBook = new Book(title, author, pages, read);
myLibrary.push(newBook);
render();
}

let newBookBtn = document.querySelector("#new-book-btn")
newBookBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document.querySelector("#new-book-form").addEventListener("submit", function(event){
  event.preventDefault();
addBookToLibrary();
})

});


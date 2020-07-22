//Book Class : Represents a book

class Book {
     constructor(title,author,isbn) {
       this.title = title;
       this.author = author;
       this.isbn= isbn;
     }
}

//Ui class : Handle Ui tasks
class Ui {
  static displaybooks() {
    const books = Store.getBooks();
    books.forEach((book) => {
       Ui.addBookTOList(book)
    })
  }
   static addBookTOList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML =`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
        `
        list.appendChild(row)
   }
   static deletebook(el) {
     if (el.classList.contains('delete')) {
          el.parentElement.parentElement.remove()
     }
   }
   static showAlert(message,className) {
     const div = document.createElement('div');
     div.innerHTML =`
     <div class="alert alert-${className}
     <div class="container">
     ${message}
     </div>
     </div>
     `
     const container= document.querySelector('section .container');
     const card=document.querySelector('section .card');
     container.insertBefore(div,card);
     //vanishing in 3 seconds
     setTimeout(() => {
       document.querySelector('.alert').remove()
     }, 3000);
   }
   static clearFields() {
    document.querySelector('#libraryform').reset()
   }
}

//Store Class : Handles Storage
class Store {
  static getBooks(){
   let books;
   if(localStorage.getItem('books') === null) {
     books=[];
   }
   else {
     books = JSON.parse(localStorage.getItem('books'));
   } 
  return books;                               
  }
  static addBook(book) {
     const books = Store.getBooks();
     books.push(book);
     localStorage.setItem('books',JSON.stringify(books));
  }
  static removeBook(isbn){
      const books=Store.getBooks();
      books.forEach((book,index) => {
        if(book.isbn == isbn) {
          books.splice(index,1)
        }
      })
      localStorage.setItem('books',JSON.stringify(books));  
  }
}





// Event:Display Books
document.addEventListener('DOMContentLoaded',Ui.displaybooks());
// Event:Add a Book
document.querySelector('#libraryform').addEventListener('submit',(e) => {
  //prevent actual Submit
  e.preventDefault();
  //get form values
  const title=document.getElementById('title').value;
  const author=document.getElementById('author').value;
  const isbn=document.getElementById('isbn').value;

// validate
if(title === '' || author ==='' || isbn==='')
{
  Ui.showAlert('please fill in all fields','danger')
}
else {
 // Instantiate book
const book = new Book(title,author,isbn);
//Add Book to UI
Ui.addBookTOList(book)
//Add book to store
Store.addBook(book);
//show success message\
Ui.showAlert('Book Added','success')

//clear fields
Ui.clearFields()
}
});

//Event :remove a book
document.querySelector('#book-list').addEventListener('click',(e) => {
Ui.deletebook(e.target)
//remove book from store
Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
//show success message
Ui.showAlert("Book Removed","success")
})




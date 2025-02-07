function init() {
  if (localStorage.getItem("books") == null) {
    renderBookstore();
  }
  else {
    books = JSON.parse(localStorage.getItem("books"));
    renderBookstore();
  }
}

function renderBookstore() {
  let bookRef = document.getElementById("library");
  bookRef.innerHTML = "";

  for (let index = 0; index < books.length; index++) {
    books[index].price = books[index].price.toString().replace('.', ',');
    bookRef.innerHTML += getBookPropsTemplate(index);
    getHeartLikeToggle(index);
    renderComment(index);
  }
}

function renderComment(index) {
  let commentsListRef = document.getElementById("commentsList" + index);
  commentsListRef.innerHTML = ""
  for (let indexComm = books[index].comments.length - 1; indexComm > -1; indexComm--) {
      commentsListRef.innerHTML += getCommentsTemplate(indexComm, index);
  }
}

function addComment(index) {
  if (document.getElementById("userCommentInput" + index).value == "") {
      document.getElementById("warning" + index).innerHTML = "Bitte einen Kommentar eingeben!";
  }
  else {
      let comment = document.getElementById("userCommentInput" + index).value;
      books[index].comments.push(
          { name: 'Christian', comment: comment });

      saveToLocalStorage()
      books = JSON.parse(localStorage.getItem("books"));
      renderComment(index)
      document.getElementById("warning" + index).innerHTML = "";
      document.getElementById("userCommentInput" + index).value = "";
  }
}

function getHeartLikeToggle(index) {
  if (books[index].liked == true) {
    let likeRef = document.getElementById("likes" + index);
    likeRef.classList.remove("unlike");

  }
  else {
    let likeRef = document.getElementById("likes" + index);
    likeRef.classList.add("unlike");
  }

}

function heartLikeToggle(index) {
  if (books[index].liked == true) {
    let likeRef = document.getElementById("likes" + index);
    likeRef.classList.add("unlike");
    books[index].liked = false;
    books[index].likes = books[index].likes - 1;
    saveToLocalStorage()
    renderLikes(index)
  }
  else {
    let likeRef = document.getElementById("likes" + index);
    likeRef.classList.remove("unlike");
    books[index].liked = true;
    books[index].likes = books[index].likes + 1;
    saveToLocalStorage()
    renderLikes(index)
  }
}

function renderLikes(index) {
  books = JSON.parse(localStorage.getItem("books"));
  document.getElementById("likesnumber" + index).innerHTML = books[index].likes;
}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}


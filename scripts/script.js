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

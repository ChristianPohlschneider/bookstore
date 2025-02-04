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
    init()
  }
  else {
    let likeRef = document.getElementById("likes" + index);
    likeRef.classList.remove("unlike");
    books[index].liked = true;
    books[index].likes = books[index].likes + 1;
    saveToLocalStorage()
    init()
  }
}
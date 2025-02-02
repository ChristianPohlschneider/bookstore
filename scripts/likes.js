function getHeartLikeToggle(index){
if (books[index].liked == true) {
    let likeRef = document.getElementById("likes" + index);
//   likeRef.innerHTML = "";
  likeRef.classList.remove("unvisible");
}
else{
    let likeRef = document.getElementById("likes" + index);
    likeRef.classList.add("unvisible");
}
}

function heartLikeToggle(){

}
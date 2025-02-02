function addComment(){
    
}

function renderComment(index){
    let commentsListRef = document.getElementById("commentsList" + index);
for (let indexComm = 0; indexComm < books[index].comments.length; indexComm++) {
    
    commentsListRef.innerHTML += getCommentsTemplate(indexComm, index);
}
}
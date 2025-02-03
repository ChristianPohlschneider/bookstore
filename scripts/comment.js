function renderComment(index) {
    let commentsListRef = document.getElementById("commentsList" + index);
    commentsListRef.innerHTML = ""
    for (let indexComm = 0; indexComm < books[index].comments.length; indexComm++) {

        commentsListRef.innerHTML += getCommentsTemplate(indexComm, index);
    }
}

function addComment(index) {
    let commentsListRef = document.getElementById("commentsList" + index);
    let comment = document.getElementById("userCommentInput"  + index).value;
    let indexComm = books[index].comments.length;
    books[index].comments.push(
        { name: 'Christian', comment: comment });
    commentsListRef.innerHTML += getCommentsTemplate(indexComm, index);
}
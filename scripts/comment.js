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

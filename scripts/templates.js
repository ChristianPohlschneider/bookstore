function getBookPropsTemplate(index) {
    return `<div class="center bookDiv" id="bookDiv">

                <div class="bookTitleDiv">
                    <h2 id="bookTitle">${books[index].name}</h2>
                </div>

                <div class="seperatingLine"></div>

                <img class="oldBooks" src="./assets/img/book.jpg" alt="old books">

                <div class="seperatingLine"></div>

                <div class="bookProperties">
                    <div class="priceLikeDiv">
                        <div id="priceDiv">${books[index].price} €</div>
                        <div class="likeDiv">
                            <p id="likes">${books[index].likes}</p>
                            <img id="${"likes" + index}" class="heart" onclick="heartLikeToggle(${index})"
                                alt="likeHeart">
                        </div>
                    </div>
                    <div class="propertyDiv">
                            <div class="property"><p class="whichProperty">Author</p><p class="propertyEntry" id="author">:&nbsp;${books[index].author}</p></div>
                            <div class="property"><p class="whichProperty">Erscheinungsdatum</p><p class="propertyEntry" id="appearanceDate">:&nbsp;${books[index].publishedYear}</p></div>
                            <div class="property"><p class="whichProperty">Genre</p><p class="propertyEntry" id="genre">:&nbsp;${books[index].genre}</p></div>
                    </div>
                </div>

                <div class="seperatingLine"></div>

                <div class="commentDiv">
                    <h3 class="commentTitle">Kommentare:</h3>
                     <div class="commentsInputDiv" id=${"commentsList" + index}>

                    </div>
                    <div class="inputDiv">
                        <input id=${"userCommentInput" + index} class="userCommentInput" type="text"
                            placeholder="Kommentieren...">
                        <img class="submitButton" onclick="addComment(${index})" src="./assets/icons/paperPlaneb.png" alt="submit">
                    </div>
                    <p id=${"warning" + index} class="warning"></p>
                </div>
                
            </div>
   `;
}

function getCommentsTemplate(indexComm, index) {
    return `
            <div class="commentsList">
            <p class="name" id=${"name"}>${books[index].comments[indexComm].name}</p>
            <p class="userComment" id=${"userComment"}>: ${books[index].comments[indexComm].comment}</p>
            </div>
    `;
}

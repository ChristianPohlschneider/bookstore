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
                        <div id="priceDiv">${books[index].price}</div>
                        <div class="likeDiv">
                            <p id="likes">${books[index].likes}</p>
                            <img id="${"likes" + index}" class="heart" onclick="heartLikeToggle()" src="/assets/icons/redHeart.png"
                                alt="likeHeart">
                        </div>
                    </div>
                    <div class="propertyDiv">
                        <div class="propertyDivTitles">
                            <p>Author</p>
                            <p>Erscheinungsdatum</p>
                            <p>Genre</p>
                        </div>
                        <div class="propertyDivTitles">
                            <p id="author">: ${books[index].author}</p>
                            <p id="appearanceDate">: ${books[index].publishedYear}</p>
                            <p id="genre">: ${books[index].genre}</p>
                        </div>
                    </div>
                </div>

                <div class="seperatingLine"></div>

                <div class="commentDiv">
                    <h3 class="commentTitle">Kommentare:</h3>
                     <div id=${"commentsList" + index}>


                    </div>
                    <div class="inputDiv">
                        <input id="userCommentInput" class="userCommentInput" type="text"
                            placeholder=" Schreibe einen Kommentar...">
                        <img class="submitButton" onclick="addComment()" src="./assets/icons/paperPlaneb.png" alt="submit">
                    </div>
                </div>

            </div>
   `;
}

function getCommentsTemplate(indexComm, index) {
    return `
                        <div class="commentsList">
                        <p id=${"name"}>${books[index].comments[indexComm].name}</p>
                        <p id=${"userComment"}>: ${books[index].comments[indexComm].comment}</p>
                        </div>
    `;
}

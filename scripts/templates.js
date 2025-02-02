function getBookPropsTemplate(index) {
    return `
   `;
}

function getBookPropsTemplate(index) {
    return `<div class="pDiv"><p>${allNotes.noteOptions[index]}: ${allNotes.note[index]} am </p><p class="dateDecoration">${allNotes.noteDate[index]}</p></div>
    <div class="buttonDiv">
    <button onclick='moveNotes(${index}, "note", "trashNote")'>X</button>
    <button onclick='moveNotes(${index}, "note", "archiveNote")'>A</button>
    </div>
    <div class="underlineNotes"></div>
   `;
}
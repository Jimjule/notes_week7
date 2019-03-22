(function(exports) {
  function NoteListView(NoteList){
    this.NoteList = NoteList;
  }
  NoteListView.prototype.getNoteString = function() {
    var notesHtmlString = "<ul>"

    this.NoteList.getNotes().forEach(function(note) {
      // notesHtmlString = `${notesHtmlString}<li><div>${note.showText()}</div></li>`
      notesHtmlString = notesHtmlString + "<li><div>" + note.showText().substring(0,21) + "..." + "</div></li>"
    })

    // return `${notesHtmlString}</ul>`
    return notesHtmlString + "</ul>"
  }
  exports.NoteListView = NoteListView;
}) (this);

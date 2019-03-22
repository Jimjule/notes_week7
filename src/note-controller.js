
// window.addEventListener('load', function() {
//   // console.log(document.getElementById("app").innerText);
//   document.getElementById("app").innerHTML ="soroush" ;
// })


  window.addEventListener('load', function() {
    var noteList = new NoteList(Note);
    var controller = new Controller(noteList , "Favourite drink: seltzer");
  // var controller = new Controller(noteList , "Favourite drink: seltzer");
    // var noteListView = new NoteListView(noteList)
    // document.getElementById("app").innerHTML = noteListView.getNoteString();
     controller.insertIntoAppElement(NoteListView);
    // console.log(document.getElementById("app").innerText);

});



(function(exports) {
  function Controller(noteList,text){

    this.noteList = noteList ;
    this.text = text;
    this.noteList.createNote(this.text);
  }

  Controller.prototype.insertIntoAppElement = function(NoteListView){
    var noteListView = new NoteListView(this.noteList);
    //console.log(noteListView.getNoteString());
    document.getElementById("app").innerHTML = noteListView.getNoteString();
  }
  exports.Controller = Controller ;
})(this);

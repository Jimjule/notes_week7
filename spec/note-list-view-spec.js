function testReturnsEmptyString() {
  var NoteListDouble = {
    getNotes: function(){
      return [];
    }
  }
  NoteListDouble.getNotes()

  var noteListView = new NoteListView(NoteListDouble);
  var viewString = noteListView.getNoteString();
  assert.isTrue(viewString === "<ul></ul>")
}

testReturnsEmptyString();

function testReturnsHtmlWithOneNote() {
  var noteDouble = {
    showText: function(){
      return "abc";
    }
  }

  var NoteListDouble = {
    getNotes: function(){
      return [noteDouble];
    }
  }

  var noteListView = new NoteListView(NoteListDouble);
  assert.isTrue(noteListView.getNoteString() === "<ul><li><div id=0>abc</div></li></ul>")
}
testReturnsHtmlWithOneNote();

function testDivIDIncrements() {

  // NoteListView.getNotes()
  var NoteDouble1 = {
    showText: function() {
      return "note first"
    }
  }
  var NoteDouble2 = {
    showText: function() {
      return "note second"
    }
  }

  var NoteListDouble = {
    getNotes: function(){
      return [NoteDouble1, NoteDouble2];
    }
  }

  var noteListView = new NoteListView(NoteListDouble);
  var viewString = noteListView.getNoteString();
  console.log(viewString)
  assert.isTrue(viewString === "<ul><li><div id=0>note first</div></li><li><div id=1>note second</div></li></ul>")
  }

testDivIDIncrements();

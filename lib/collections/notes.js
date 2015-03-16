Notes = new Mongo.Collection('notes');

Meteor.methods({
  deleteNote: function (noteId) {
    var note = Notes.findOne(noteId);


    if (note.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    Notes.remove(noteId);
  },
  updateNoteTitle: function (noteId, title) {
    var note = Notes.findOne(noteId);


    if (note.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    if (!title) title = 'Untitled';

    Notes.update({_id: noteId}, {$set: {title: title}});
  },
  updateNoteText: function (noteId, text) {
    var note = Notes.findOne(noteId);


    if (note.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Notes.update({_id: noteId}, {$set: {text: text}});
  },
  createNote: function () {
    if (! Meteor.userId()) {
      throw new Meteor.Error("no-user-found");
    }

    Notes.insert({
			title: 'Untitled',
      owner: Meteor.userId(),
      private: true
    });
  },
  setPrivate: function (noteId, setToPrivate) {
    var note = Notes.findOne(noteId);

    if (note.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Notes.update(noteId, { $set: { private: setToPrivate } });
  }
});

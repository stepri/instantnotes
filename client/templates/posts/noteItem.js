Template.noteItem.helpers({
  notes: function() {
    if (Meteor.userId()) return Notes.find({owner:Meteor.userId()});
  },
  isOwner: function () {
    return this.owner === Meteor.userId();
  },
  ifUser: function () {
    return Meteor.userId();
  },
  notesFound: function () {
    if (Meteor.userId()) return Notes.count({owner:Meteor.userId()});
  }
});

Template.noteItem.events({
  "keyup input.title-input": function (event, template) {

    Meteor.call("updateNoteTitle", this._id, template.find("input.title-input").value);

    return false;
  },
  "keyup textarea.text-textarea": function (event, template) {

    Meteor.call("updateNoteText", this._id, template.find("textarea.text-textarea").value);

    return false;
  },
  "click .addNote": function (event, template) {

    Meteor.call("createNote");

    return false;

  },
  "click .deleteNote": function (event, template) {

    Meteor.call("deleteNote",this._id);

    return false;

  },
  "click .togglePrivate": function (event, template) {

    Meteor.call("setPrivate",this._id, event.target.checked);

    return false;

  }
});

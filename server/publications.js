Meteor.publish('notes', function() {
  return Notes.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});

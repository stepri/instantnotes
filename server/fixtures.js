if (Notes.find().count() === 0) {
  Notes.insert({
    title: 'Note 1',
    text: 'Note 1 text'
  });
  Notes.insert({
    title: 'Note 2',
    text: 'Note 2 text'
  });
  Notes.insert({
    title: 'Note 3',
    text: 'Note 3 text'
  });
}

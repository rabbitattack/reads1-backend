
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { book_title: 'rowValue1', book_genre: 'rowValue2', description: 'rowValue3', cover_url: '' },
        { book_title: 'rowValue1', book_genre: 'rowValue2', description: 'rowValue3', cover_url: '' },
        { book_title: 'rowValue1', book_genre: 'rowValue2', description: 'rowValue3', cover_url: '' },
      ]);
    });
};

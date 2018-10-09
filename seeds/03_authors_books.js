
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors_books').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors_books').insert([
        { author_id: 'rowValue1', book_id: 'rowValue2' },
      ]);
    });
};


exports.up = function (knex, Promise) {
    return knex.schema.createTable('books', (book) => {
        book.increments('id');
        book.string('book_title');
        book.string('book_genre');
        book.string('description');
        book.string('cover_url');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('books')
};

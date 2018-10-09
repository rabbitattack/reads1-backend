
exports.up = function (knex, Promise) {
    return knex.schema.createTable('authors_books', (connection) => {
        connection.increments('id');
        connection.integer('author_id');
        connection.foreign('author_id').references('authors_table.id');
        connection.integer('book_id');
        connection.foreign('book_id').references('books.id');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('authors_books');
};

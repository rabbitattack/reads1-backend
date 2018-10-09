
exports.up = function (knex, Promise) {
    return knex.schema.createTable('authors_table', (author) => {
        author.increments('id');
        author.string('first_name');
        author.string('last_name');
        author.string('biography');
        author.string('portrait_url');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('authors_table')
};

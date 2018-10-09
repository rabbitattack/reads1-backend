
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { first_name: 'rowValue1', last_name: 'rowValue2', biography: 'rowValue3', portrait_url: '' }
      ]);
    });
};

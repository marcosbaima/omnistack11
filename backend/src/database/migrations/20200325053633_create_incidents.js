
exports.up = function(knex) {
    return knex.schema.createTable('t_incidents',function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('t_ongs');
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('t_incedents');
};

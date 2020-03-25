
exports.up = function(knex) {
  return knex.schema.createTable('t_ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('address_1').notNullable();
      table.string('address_2').notNullable();
      table.string('address_3').notNullable();
      table.string('neighborhood').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('t_ongs');
  
};

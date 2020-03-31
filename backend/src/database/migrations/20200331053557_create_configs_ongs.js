
exports.up = function(knex) {
    return knex.schema.createTable('t_config_ongs',function(table){
        table.increments();

        table.string('bank').notNullable();
        table.decimal('acount_number').notNullable();
        table.string('tp_acount').notNullable();
        table.decimal('ag_number').notNullable();
        table.string('image');
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('t_ongs');
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('t_config_ongs');
};

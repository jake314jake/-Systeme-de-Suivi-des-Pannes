export function up(knex) {
    return knex.schema.createTable("roles", (table) => {
      table.increments("id").primary();
      table.string("nom_role").notNullable();
      table.text("description");
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("roles");
  }
  
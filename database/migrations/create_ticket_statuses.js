export function up(knex) {
    return knex.schema.createTable("ticket_statuses", (table) => {
      table.increments("id").primary();
      table.string("statut").notNullable();
      table.text("description").notNullable();
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("ticket_statuses");
  }
  
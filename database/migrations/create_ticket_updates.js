export function up(knex) {
    return knex.schema.createTable("ticket_updates", (table) => {
      table.increments("id").primary();
      table.integer("ticket_id").references("id").inTable("tickets").onDelete("CASCADE");
      table.integer("statut_id").references("id").inTable("ticket_statuses").onDelete("CASCADE");
      table.timestamp("date_changement").defaultTo(knex.fn.now());
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("ticket_updates");
  }
  
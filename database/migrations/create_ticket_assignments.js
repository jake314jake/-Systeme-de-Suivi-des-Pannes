export function up(knex) {
    return knex.schema.createTable("ticket_assignments", (table) => {
      table.increments("id").primary();
      table.integer("ticket_id").references("id").inTable("tickets").onDelete("CASCADE");
      table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
      table.timestamp("date_assignation").defaultTo(knex.fn.now());
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("ticket_assignments");
  }
  
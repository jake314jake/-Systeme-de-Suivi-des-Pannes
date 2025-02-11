export function up(knex) {
    return knex.schema.createTable("notifications", (table) => {
      table.increments("id").primary();
      table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
      table.integer("ticket_id").references("id").inTable("tickets").onDelete("CASCADE");
      table.text("message").notNullable();
      table.string("statut").defaultTo("Non lu");
      table.timestamp("date_envoi").defaultTo(knex.fn.now());
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("notifications");
  }
  
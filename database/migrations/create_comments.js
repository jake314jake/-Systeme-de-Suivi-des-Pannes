export function up(knex) {
    return knex.schema.createTable("comments", (table) => {
      table.increments("id").primary();
      table.integer("ticket_id").references("id").inTable("tickets").onDelete("CASCADE");
      table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
      table.text("commentaire").notNullable();
      table.timestamp("date_commentaire").defaultTo(knex.fn.now());
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("comments");
  }
  
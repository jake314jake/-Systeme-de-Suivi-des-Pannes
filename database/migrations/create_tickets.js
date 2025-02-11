export function up(knex) {
    return knex.schema.createTable("tickets", (table) => {
      table.increments("id").primary();
      table.string("titre").notNullable();
      table.text("description").notNullable();
      table.string("urgence").notNullable();
      table.integer("created_by").references("id").inTable("users").onDelete("CASCADE");
      table.timestamp("date_creation").defaultTo(knex.fn.now());
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("tickets");
  }
  
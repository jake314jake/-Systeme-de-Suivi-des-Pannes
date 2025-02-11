export function up(knex) {
    return knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("nom").notNullable();
      table.string("email").unique().notNullable();
      table.string("mot_de_passe").notNullable();
      table.timestamp("date_creation").defaultTo(knex.fn.now());
      table.integer("role_id").references("id").inTable("roles").onDelete("SET NULL");
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("users");
  }
  
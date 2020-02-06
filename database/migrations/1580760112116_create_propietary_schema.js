"use strict"

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema")

class PropietarySchema extends Schema {
  up() {
    this.create("proprietaries", (table) => {
      table.increments()

      table.string("name").notNullable()
      table.string("phone")

      table
        .string("email")
        .notNullable()
        .unique()

      table
        .string("cpf")
        .notNullable()
        .unique()

      table.integer("image_id").unsigned()

      table
        .foreign("image_id")
        .references("id")
        .inTable("images")
        .onDelete("cascade")

      table.timestamps()
    })
  }

  down() {
    this.drop("proprietaries")
  }
}

module.exports = PropietarySchema

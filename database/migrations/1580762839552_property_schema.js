"use strict"

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema")

class PropertySchema extends Schema {
  up() {
    this.create("properties", (table) => {
      table.increments()

      table.integer("proprietary_id").unsigned()
      table.integer("image_id").unsigned()

      table.string("name").notNullable()
      table.string("description", 500).notNullable()
      table.decimal("price", 12, 2).notNullable()
      table
        .enu("type", [
          "apartment",
          "house",
          "condominium",
          "roof",
          "kitnet",
          "land"
        ])
        .notNullable()

      table.integer("bathrooms").defaultTo(0)
      table.integer("beds").defaultTo(0)
      table.integer("rooms").defaultTo(0)
      table.integer("kitchens").defaultTo(0)

      table.decimal("latitude", 12, 2).notNullable()
      table.decimal("longitude", 12, 2).notNullable()

      table
        .foreign("proprietary_id")
        .references("id")
        .inTable("proprietaries")

      table
        .foreign("image_id")
        .references("id")
        .inTable("images")

      table.timestamps()
    })
  }

  down() {
    this.drop("properties")
  }
}

module.exports = PropertySchema

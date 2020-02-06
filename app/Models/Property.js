"use strict"

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model")

class Property extends Model {
  images() {
    return this.hasMany("App/Models/Image")
  }

  proprietary() {
    return this.belongsTo("App/Models/Proprietary")
  }
}

module.exports = Property

"use strict"

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model")

class Proprietary extends Model {
  static get hidden() {
    return ["cpf"]
  }

  image() {
    return this.hasOne("App/Models/Image")
  }

  properties() {
    return this.hasMany("App/Models/Property")
  }
}

module.exports = Proprietary

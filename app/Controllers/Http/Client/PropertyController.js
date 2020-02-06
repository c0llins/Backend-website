"use strict"

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Property = use("App/Models/Property")

class PropertyController {
  /**
   * Show a list of all properties.
   * GET properties
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   * @param {object} ctx.pagination
   */
  async index({ request, pagination }) {
    const query = Property.query()

    const name = request.input("name")
    if (name) {
      query.where("name", "LIKE", `%${name}%`)
    }

    const priceStart = request.input("price_start")
    const priceEnd = request.input("price_end")
    if (priceStart && priceEnd) {
      query.whereBetween("price", [+priceStart, +priceEnd])
    }

    const properties = await query
      .with("proprietary")
      .paginate(pagination.page, pagination.limit)

    return properties
  }

  /**
   * Display a single property.
   * GET properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const property = await Property.findOrFail(params.id)
    return property
  }
}

module.exports = PropertyController

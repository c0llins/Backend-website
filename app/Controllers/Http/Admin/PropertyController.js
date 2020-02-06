"use strict"

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Property = use("App/Models/Property")
const Database = use("Database")

class PropertyController {
  /**
   * Create/save a new property.
   * POST properties
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { proprietary_id, ...data } = request.post()

    try {
      const property = await Property.create(data)

      return response.created(property)
    } catch (exception) {
      return response.status(400).send({
        error: {
          message: "Não foi possível criar a propriedade no momento"
        }
      })
    }
  }

  /**
   * Update property details.
   * PUT or PATCH properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const property = await Property.findOrFail(params.id)

    const data = request.post()

    property.merge(data)

    await property.save()

    return property
  }

  /**
   * Delete a property with id.
   * DELETE properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const property = await Property.findOrFail(params.id)
    await property.delete()
  }
}

module.exports = PropertyController

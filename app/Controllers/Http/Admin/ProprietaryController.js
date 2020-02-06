"use strict"

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Proprietary = use("App/Models/Proprietary")

class ProprietaryController {
  /**
   * Create/save a new proprietary.
   * POST proprietaries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.post()

    const proprietary = await Proprietary.create(data)

    return response.created(proprietary)
  }

  /**
   * Update proprietary details.
   * PUT or PATCH proprietaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const data = request.post()

    const proprietary = await Proprietary.findOrFail(params.id)

    proprietary.merge(data)

    await proprietary.save()

    return proprietary
  }

  /**
   * Delete a proprietary with id.
   * DELETE proprietaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const proprietary = await Proprietary.findOrFail(params.id)

    await proprietary.delete()
  }
}

module.exports = ProprietaryController

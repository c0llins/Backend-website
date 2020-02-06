"use strict"

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Proprietary = use("App/Models/Proprietary")

class ProprietaryController {
  /**
   * Display a single proprietary.
   * GET proprietaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const proprietary = await Proprietary.findOrFail(params.id)
    return proprietary
  }
}

module.exports = ProprietaryController

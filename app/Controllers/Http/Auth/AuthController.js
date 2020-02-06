"use strict"

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Database = use("Database")
const User = use("App/Models/User")
const Role = use("Role")

class AuthController {
  /**
   * Create/save a new auth.
   * POST auths
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async register({ request, response }) {
    const trx = await Database.beginTransaction()

    try {
      const data = request.only(["name", "email", "password"])

      const user = await User.create(data, trx)

      const role = request.input(["role"])

      const { id } = await Role.query(trx)
        .where({ slug: role })
        .first()

      await user.roles().attach([id], null, trx)

      await trx.commit()

      return response.created(user)
    } catch (exception) {
      await trx.rollback()

      return response
        .status(400)
        .send({ error: { message: "Não foi possível criar o usuário" } })
    }
  }

  async login({ request, auth }) {
    const { email, password } = request.post()

    const token = await auth.withRefreshToken().attempt(email, password)

    return token
  }

  async logout({ request, auth }) {
    const refreshToken = request.input("refresh_token")
    await auth.authenticator("jwt").revokeTokens([refreshToken], true)
  }

  async refreshToken({ request, auth }) {
    const refreshToken = request.input("refresh_token")

    const user = await auth
      .newRefreshToken()
      .generateForRefreshToken(refreshToken)

    return user
  }
}

module.exports = AuthController

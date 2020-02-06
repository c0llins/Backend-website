"use strict"

const BaseExceptionHandler = use("BaseExceptionHandler")
const Logger = use("Logger")
/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, { response }) {
    if (error.name === "ValidationException") {
      return response.status(error.status).send({ errors: error.messages })
    }

    if (process.env.NODE_ENV === "development") {
      return response.status(error.status).send(error.message)
    }

    return response.status(500).send({
      error: { message: "Algo deu errado, tente novamente mais tarde" }
    })
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report(error) {
    if (error.status >= 500) {
      Logger.error(error.message, {
        stack: error.stack,
        message: error.message,
        status: error.status,
        name: error.name
      })
    }

    if (process.env.NODE_ENV === "development") {
      console.error(error)
    }
  }
}

module.exports = ExceptionHandler

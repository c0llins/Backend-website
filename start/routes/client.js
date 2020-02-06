"use strict"

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route")

Route.group(() => {
  Route.resource("proprietaries", "ProprietaryController").only([
    "index",
    "show"
  ])

  Route.resource("properties", "PropertyController").only(["index", "show"])
})
  .prefix("v1/client")
  .namespace("Client")

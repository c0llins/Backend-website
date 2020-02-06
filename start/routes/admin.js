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
  Route.post("proprietaries", "ProprietaryController.store")
    .middleware(["auth", "is:(admin||mod)"])
    .validator("Admin/Proprietary/Store")

  Route.post("proprietaries/:id", "ProprietaryController.update")
    .middleware(["auth", "is:(admin||mod)"])
    .validator("Admin/Proprietary/Store")

  Route.delete(
    "proprietaries/:id",
    "ProprietaryController.destroy"
  ).middleware(["auth", "is:admin"])

  Route.post("properties", "PropertyController.store")
    .middleware(["auth", "is:(admin||mod)"])
    .validator("Admin/Property/Store")

  Route.post("properties/:id", "PropertyController.update")
    .middleware(["auth", "is:(admin||mod)"])
    .validator("Admin/Property/Store")

  Route.delete("properties/:id", "PropertyController.destroy").middleware([
    "auth",
    "is:admin"
  ])
})
  .prefix("v1/admin")
  .namespace("Admin")

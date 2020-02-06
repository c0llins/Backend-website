"use strict"

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route")

Route.group(() => {
  Route.post("register", "AuthController.register")
    .as("auth.register")
    .middleware(["auth", "is:admin"])
    .validator("Admin/Auth/Register")

  Route.post("login", "AuthController.login")
    .as("auth.login")
    .middleware(["guest"])
    .validator("Admin/Auth/Login")

  Route.post("logout", "AuthController.logout")
    .as("auth.logout")
    .middleware(["auth"])

  Route.post("refresh", "AuthController.refreshToken")
    .as("auth.refresh")
    .middleware(["guest"])
})
  .prefix("v1/auth")
  .namespace("Auth")

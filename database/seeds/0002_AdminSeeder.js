"use strict"

/*
|--------------------------------------------------------------------------
| AdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use("App/Models/User")
const Role = use("Role")

class AdminSeeder {
  async run() {
    const admin = await User.create({
      name: "admin",
      email: "admin@admin.com",
      password: "admin"
    })

    const adminRole = await Role.findBy("slug", "admin")

    await admin.roles().attach([adminRole.id])
  }
}

module.exports = AdminSeeder

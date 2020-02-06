"use strict"

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Role = use("Role")

class RoleSeeder {
  async run() {
    await Promise.all([
      Role.create({
        name: "Admin",
        slug: "admin",
        description: "System administrator, can add other admins/mods"
      }),
      Role.create({
        name: "mod",
        slug: "mod",
        description: "System moderator, can't add other admins/mods"
      }),
      Role.create({
        name: "Client",
        slug: "client",
        description: "System user, has no powers"
      })
    ])
  }
}

module.exports = RoleSeeder

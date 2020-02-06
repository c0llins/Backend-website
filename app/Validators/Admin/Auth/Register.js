"use strict"

class Register {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      role: "required|in:admin,mod,client",
      name: "required",
      email: "required|email|unique:users,email",
      password: "required|confirmed"
    }
  }

  get messages() {
    return {
      "role.required": "A role do usuário é obrigatória",
      "role.in": "A role do usuário deve ser admin, mod ou client",
      "email.required": "O usuário deve ter um email",
      "email.email": "O email deve ser um email válido",
      "email.unique": "Esse email já está em uso",
      "password.required": "Uma senha é obrigatória",
      "password.confirmed": "Um campo password_confirmation é obrigatório"
    }
  }
}

module.exports = Register

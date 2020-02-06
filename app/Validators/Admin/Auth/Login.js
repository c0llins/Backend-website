"use strict"

class Login {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      email: "required|email",
      password: "required"
    }
  }

  get messages() {
    return {
      "email.required": "O usuário deve ter um email",
      "email.email": "O email deve ser um email válido",
      "password.required": "Uma senha é obrigatória"
    }
  }
}

module.exports = Login

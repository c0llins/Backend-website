"use strict"

class Store {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      name: "required",
      email: "required|email|unique:proprietaries,email",
      cpf: "required|min:11|max:11|unique:proprietaries,cpf",
      image_id: "unique:images"
    }
  }

  get messages() {
    return {
      "name.required": "O nome do proprietário é obrigatório",
      "email.required": "O email do proprietário é obrigatório",
      "email.unique": "Esse email já está em uso",
      "cpf.required": "O cpf do proprietário é obrigatório",
      "cpf.min": "O cpf deve ser um válido",
      "cpf.max": "O cpf deve ser um válido",
      "cpf.unique": "O cpf deve ser válido",
      "image_id.unique": "Uma imagem com id deve existir"
    }
  }
}

module.exports = Store

"use strict"

class Store {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      proprietary_id: "required|exists:proprietaries,id",
      name: "required",
      description: "required",
      price: "required|number|min:1",
      type: "required|in:apartment,house,condominium,roof,kitnet,land",
      bathrooms: "integer|min:0",
      beds: "integer|min:0",
      rooms: "integer|min:0",
      kitchens: "integer|min:0",
      latitude: "required|number",
      longitude: "required|number"
    }
  }

  get messages() {
    return {
      "proprietary_id.required": "O id do proprietário é obrigatório",
      "proprietary_id.exists": "O priprietário deve existir",
      "name.required": "A propriedade deve ter um nome",
      "description.required": "A propriedade deve ter uma descrição",
      "price.required": "A propriedade deve ter um preço",
      "price.number": "O preço da propriedade deve ser número",
      "price.min": "O preço da propriedade deve sre um número positivo",
      "type.required":
        "A propriedade deve ter um dos tipos apartment,house,condominium,roof,kitnet,land",
      "type.in":
        "O tipo da propriedade deve ser um dos tipos apartment,house,condominium,roof,kitnet,land",
      "bathrooms.integer": "A quantidade de banheiros deve ser um número",
      "bathrooms.min": "A quantidade de banheiros deve ser no mínimo 0",
      "beds.integer": "A quantidade de camas deve um número",
      "beds.min": "A quantidade de camas deve ser no mínimo 0",
      "rooms.integer": "A quantidade de quartos deve ser um número",
      "rooms.min": "A quantidade de quartos deve ser no mínimo 0",
      "kitchens.required": "A quantidade de cozinhas deve ser um número",
      "kitchens.min": "A quantidade de cozinhas deve ser no mínimo 0",
      "latitude.required": "A latitude da propriedade é obrigatória",
      "latitude.number": "A latitude deve ser um número",
      "longitude.required": "A longitude da propriedade é obrigatória",
      "longitude.number": "A longitude deve ser um número"
    }
  }
}

module.exports = Store

const BASE_URL = "http://127.0.0.1:5000/api";

async function getContactList() {
  try {
    const responseAPI = await fetch(
      `${BASE_URL}/contacts/list/all`,
      {
        method: 'GET',
      }
    )
    return responseAPI.json()
  }
  catch (error) {
    console.warn("Erro ao listar contatos:", error)
  }
}

async function createContact(data) {
  try {
    const responseAPI = await fetch(
      `${BASE_URL}/contacts/create`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    return responseAPI
  }
  catch (error) {
    console.warn("Erro ao cadastrar novo contato:", error)
    alert("Erro ao cadastrar novo contato")
  }
}

async function updateContact(data) {
  try {
    const responseAPI = await fetch(
      `${BASE_URL}/contacts/${data.id}/update`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    return responseAPI
  }
  catch (error) {
    console.warn("Erro ao cadastrar novo contato:", error)
    alert("Erro ao cadastrar novo contato")
  }
}

async function removeContact(id) {
  try {
    const responseAPI = await fetch(
      `${BASE_URL}/contacts/${id}/delete`,
      {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    return responseAPI
  }
  catch (error) {
    console.warn("Erro ao remover contato:", error)
  }
}

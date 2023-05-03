async function removeItemConfirm(id) {
  if (confirm("Deseja realmente excluir este item?")) {
    const response = await removeContact(id);
    if (response.status === 200) {
      alert("Contato removido com sucesso!")
      return window.location.reload();
    } else {
      alert("Falha ao remover contato!")
    }
  }
}

async function goToEditContact(data) {
  const obj = data.split(",")
  const url = `
    ./pages/edit-contact.html?id=${obj[0]}&name=${obj[1]}&phone=${obj[2]}&phone_type=${obj[3]}&email=${obj[4]}
  `.trim()
  window.location.href = url;
}


function renderContactList(element_id, array) {
  if (array.length < 1) {
    return document.getElementById(element_id).innerHTML = `
    <div class="contact flex align-center" style="margin-top: 14px">
      <h3>Sem contatos cadastrados</h3>
    <div>
    `
  }

  document.getElementById(element_id).innerHTML = array.map((item, index) => {
    const formatted = `${item.id}, ${item.name}, ${item.phone}, ${item.phone_type}, ${item.email}`
    return `
    <div class="contact flex align-center" style="margin-top: 14px">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" 
        height="60" 
        width="60" 
      />

      <div class="contact-information flex column">
        <h1 class="title text-color">${item.name}</h1>
        <h3 class="subtitle text-color">${item.phone} - (${item.phone_type})</h3>
        <span class="description text-color">${item.email}</span>
      </div>
      
      <div class="contact-options">
        <button class="icon-button" onClick="goToEditContact('${formatted}')">  
          <ion-icon name="create-outline"></ion-icon>
        </button>
        <button class="icon-button" onClick="removeItemConfirm(${item.id})">  
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  `
  }
    
  ).join('')
}
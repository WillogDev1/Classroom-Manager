function loadMenu()
{
  const ui = SpreadsheetApp.getUi()
  ui.showSidebar(ho)
}


function creatMenu()
{
  const ui = SpreadsheetApp.getUi()
  const menu = ui.createMenu("Menu")
  menu.addItem("Atualizar Dados",    "getListClass")
  menu.addItem("Ver Integrantes",   "getListPeople")
  menu.addItem("Criar Salas"    ,     "createClass")
  menu.addItem("Convidar"       ,    "invitePeople")
  menu.addToUi()
}

function onOpen()
{
  creatMenu()
}
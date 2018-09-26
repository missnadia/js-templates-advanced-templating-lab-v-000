function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate = document.getElementById("recipe-form-template").inninnerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


Handlebars.registerPartial('namePartial', document.getElementById("partial-template").innerHTML)

function renderMain() {
  var template = Handlebars.compile(document.getElementById("main-template").innerHTML);
  var html = template({name: 'Gordon Ramsay'});
}

function createRecipe() {
  
}
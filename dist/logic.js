
//  const ingredient = $('#ingredient').val()

class Recipe {
    constructor() {

    }
      getRecipe = function() {
        let ingredient = $('#ingredient').val() 
        if(ingredient === "") {
            alert("Please select ingredient")
        }else{
            $('#ingredient').val("")
            $.get(`/recipes/${ingredient}`, function (recipes) {
                render.renderRecipes(recipes)
            })
        }
    }
}


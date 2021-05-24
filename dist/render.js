class Renderer {
    constructor() {

    }

    render(classId, scriptId, recipes) {
        $(`#${classId}`).empty()
        const source = $(`#${scriptId}`).html();
        const template = Handlebars.compile(source);
        let dataHTML = template({recipes :recipes})
        // console.log(recipes.length);
        if(recipes.length === 0){
            $(`#${classId}`).append(`<div class="notRes">Sorry, Dan't Have Reecipe !!!</div>`)
        }else{
            $(`#${classId}`).append(dataHTML)
        }
       
    }


    renderRecipes(data){
        this.render("recipeContainer","recipe-template",data)
    }
}
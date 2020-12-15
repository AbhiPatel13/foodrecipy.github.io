// function searchdish(){
//     var dishname = document.getElementById("dish").value;

// }
$(document).ready(function () {
    $("#search").click(function () {
        var details = "";
        var dishname = $('#dishname').val();
        $.get(`https://api.edamam.com/search?app_id=15202e27&app_key=6773e6d24b038955b108362bfe851525&q=${dishname}`, function (data) {

            var foodname = data.q;


            title = $(`<div class="jumbotron">
         <h7 class="display-4">${foodname}</h7>
         
       </div>`)
            title.appendTo("#result");
            for (i = 0; i < 20; i++) {
                var label = data.hits[i].recipe.label;
                var source = data.hits[i].recipe.source;
                var img = data.hits[i].recipe.image;
                var ingredientLines = data.hits[i].recipe.ingredientLines;
                var url = data.hits[i].recipe.url;
                mainlabelone = $(`  <h6 style="text-align:center;font-weight:1000"> label : ${label}</h6>`)
                sourceone = $(`<p  style="text-align:center">  source :${source}</p>`);
                imgone = $(`<div class="view overlay zoom" class="text-center">
            <img src=${img} class="img-fluid " alt="zoom" class="rounded" style="margin:auto"></div>`);
          
          
                ingredientLinesone = $(`<div class="container"><p  class="article__content" style="text-align:center;margin-top:10px"> Ingredient : ${ingredientLines}</p></div>`);
                urlone = $(`<a type="button" class="btn btn-warning" href="${url}" style="display:flex;justify-content:center">Read More</a><br><br><br><hr>`);


                mainlabelone.appendTo("#result");
                sourceone.appendTo("#result");
                imgone.appendTo("#result");
                ingredientLinesone.appendTo("#result");
                urlone.appendTo("#result");





            }
            //    console.log(data.hits.recipe.len());   






            //  console.log(data.q)
            //  console.log(data.hits[1].recipe)

        })





    })
})

function clearall() {
    document.getElementById("result").innerHTML = "";
}

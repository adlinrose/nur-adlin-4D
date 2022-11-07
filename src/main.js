function buttonClicked(){
    var searchValue  =document.getElementById("mealForm").value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)

    .then((response) => response.json())
    .then((data) => {
        var info=data
        console.log(info)
        console.log(info.meals[0].strMeal);
        console.log(info.meals[0].strCategory);
        console.log(info.meals[0].strArea);

    })
}

const cityForm = document.querySelector("#mealForm");
var searchValue =document.getElementById("mealForm").value;
const getA= async(searchValue) => {

await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
  .then(response => response.json())
  .then(data => {
      console.log(data)
     
    let div = document.createElement("div");
      div.setAttribute("id", "conditions");
       //display meal name
      let foodname = document.createElement("h2");
      let foodnameNode = document.createTextNode("Meal Name:  "+data.meals[0].strMeal);
      foodname.appendChild(foodnameNode);
      //display category
      let cat = document.createElement("div");
      let catNode = document.createTextNode("Category:  "+data.meals[0].strCategory);
      cat.appendChild(catNode);
      //display country
      let ori = document.createElement("div");
      let oriNode = document.createTextNode("Country Origin:  "+data.meals[0].strArea);
      ori.appendChild(oriNode);

      let ing = document.createElement("div");
      let ingNode = document.createTextNode
      
      ("1) "  + data.meals[0].strMeasure1 + "  " + data.meals[0].strIngredient1 + 
      " 2) " + data.meals[0].strMeasure2 + " " + data.meals[0].strIngredient2 +   
      " 3) " + data.meals[0].strMeasure3 + "  " + data.meals[0].strIngredient3 +  
      " 4) " + data.meals[0].strMeasure4 + "  " + data.meals[0].strIngredient4 + 
      " 5) " + data.meals[0].strMeasure5 + "  " + data.meals[0].strIngredient5 +  
      " 6) " + data.meals[0].strMeasure6 + "  " + data.meals[0].strIngredient6 +  
      " 7) " + data.meals[0].strMeasure7 + "  " + data.meals[0].strIngredient7 +  
      " 8) " + data.meals[0].strMeasure8 + "  " + data.meals[0].strIngredient8 +  
      " 9) " + data.meals[0].strMeasure9 + "  " + data.meals[0].strIngredient9 +  
      " 10) " + data.meals[0].strMeasure10 + "  " + data.meals[0].strIngredient10);
      ing.appendChild(ingNode);

      let ins = document.createElement("div");
      let insNode = document.createTextNode("Instruction: "+data.meals[0].strInstructions);
      ins.appendChild(insNode);

      div.appendChild(foodname);
      div.appendChild(cat);
      div.appendChild(ori);
      div.appendChild(ing);
      div.appendChild(ins);
      document.querySelector("main").appendChild(div);

  }).catch(err => console.log(err))}
  document.addEventListener("DOMContentLoaded", (e) => {
    cityForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if(document.querySelector("#name").value != ""){
            let conditionsDiv = document.querySelector("#conditions");
            if(conditionsDiv){
                document.querySelector("main").removeChild(conditionsDiv);
            }
            getA(document.getElementById("name").value);
        }else{
            console.log("You must provide a meal");
        }
    })
})

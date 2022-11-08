function buttonClicked(){

    var searchValue = document.getElementById("meal_input").value;
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {

          console.log(data); //output the API into console.
          console.log("Menu:  "+ data.meals[0].strMeal);
          console.log("Category:  "+ data.meals[0].strCategory);
          console.log("Country Origin:  "+ data.meals[0].strArea);
          console.log("Instruction: "+ data.meals[0].strInstructions);
          console.log("More :" + data.meals[0].strSource);


          document.getElementById("demo").innerHTML=
          "Menu:  "+ data.meals[0].strMeal + 
          "<br/>Category:  "+ data.meals[0].strCategory+ 
          "<br/>Country Origin:  "+ data.meals[0].strArea + 
          "<br/>Instruction: "+ data.meals[0].strInstructions + 
            "<br/> More :" + data.meals[0].strSource;
    } )
  
  }
  
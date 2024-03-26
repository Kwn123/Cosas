let persons = [];
let orderPersons = [];
let resultFinish = [];
let solution = [];
let resultsName = [];
let contador = 0;
//-----------------------------------------------
resultsName = document.getElementsByClassName("results");
let textName = document.getElementsByClassName("name");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((persona) => {
      persons.push(persona.name);
    });

    for (let i = 0; i < persons.length; i++) {
      textName[i].value += persons[i];
    }
  })
  .catch((error) => console.log(error));

function changeOrder(input) {
  if (input.value !== "") {
    let namePerson = input.value;
    orderPersons.push(namePerson);
    input.value = "";
    result(namePerson);
  }
}

function result(name) {
  if (name.value !== "") {
    resultsName[contador].value = name;
    resultFinish[contador] = name;
    contador++;
  }
}

function backOrder(name) {
  console.log(name.value);

  for (let i = 0; i < resultFinish.length; i++) {
    
    if (name.value == resultFinish[i]) {
      resultFinish[i] = "";
      
    }
  }

  if (name.value !== "") {
    for (let i = 0; i < textName.length; i++) {
      if (textName[i].value == "") {
        textName[i].value = name.value;
        name.value = "";
      }
    }
    contador--;
  }
 
  
}

function finish() {
  for (let i = 0; i < persons.length; i++) {
    solution = Array.from(persons).sort();
  }

  if (solution = resultFinish) {
    alert("Felicidades, ganaste");
  } else {
    alert("Lo sentimos, perdiste");
  }
}

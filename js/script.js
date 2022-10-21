//QUESTION 1

function complain() {
  console.log("Meow!");
}

const cat = {
  complain: complain(),
};

//QUESTION 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//QUESTION 3
heading.style.fontSize = "2em";

//QUESTION 4
heading.classList.add("subheading");

//QUESTION 5
const paragraphs = document.querySelectorAll("p");

function changeParagraph(paragraph) {
  paragraph.style.color = "red";
}

paragraphs.forEach((paragraph) => {
  changeParagraph(paragraph);
});

//QUESTION 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//QUESTION 7
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function printListItemName(list) {
  list.forEach((listItem) => {
    console.log(listItem.name);
  });
}

printListItemName(cats);

//QUESTION 8
const catContainer = document.querySelector(".cat-container");


/* SOLUTION THAT FILLS THIS REQUIREMENT: Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container. */
function createCats(cats) {
  const divs = [];
  cats.forEach((cat) => {
    if (cat.age) {
      const div = `<div><h5>${cat.name}</h5><p>${cat.age}</p></div>`;
      divs.push(div)
    } else {
      const div = `<div><h5>${cat.name}</h5><p>Age unknown</p></div>`;
      divs.push(div)
    }
  });
  return divs
}

catContainer.innerHTML = createCats(cats);


/* SOLUTION THAT IS BETTER WRITTEN, SHORTER AND HAS A BETTER RESULT 
IT DOES NOT FILL THIS REQUIREMENT Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container. */
function createCatsClean(cats) {
  cats.forEach((cat) => {
    if (cat.age) {
      catContainer.innerHTML += `<div><h5>${cat.name}</h5><p>${cat.age}</p></div>`;
    } else {
      catContainer.innerHTML += `<div><h5>${cat.name}</h5><p>Age unknown</p></div>`;
    }
  });
}

/* createCatsClean(cats); */


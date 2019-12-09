//1 Get DOM elements
const searchForm = document.getElementById('search-form');
const searchInput = document.querySelector('.input');
const select = document.getElementById('select');
const resultSection = document.querySelector('.result');

// 2 api base url
const apiBaseUrl = 'https://swapi.co/api';
// 2 get value of selectOptionEl
let searchOption = 'wybierz';

//3 onchange select listener
select.addEventListener('change',(e) => {
  let selectedCategory = e.target.value;
  searchOption = selectedCategory
  // console.log(searchOption)
})

//4 serve form submit
searchForm.addEventListener('submit',function(e){
  e.preventDefault();
  //5
  const searchValue = searchInput.value;
  
  //6 
  // https://swapi.co/api/people/?search=r2
  const apiURL = `${apiBaseUrl}/${searchOption}/?search=${searchValue}`

  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      showResult(searchOption,data.results)
      // console.log(data.results)
    })
    .then(err => console.log(err))
})

function genereteHtml(text){
  return `<li style="color:#fff">${text}</li>`
}

// const showResult = (searchOption,results) => {
//   let html;
//   //11
//   if(searchOption === 'films'){
//     //12
//     html = results.map(result => (
//       genereteHtml(`<b>Title:</b> ${result.title}, <b>Director:</b> ${result.director}`)
//     )) 
//   }else if(searchOption === 'people'){
//     html = results.map(result => (
//       genereteHtml(`<b>Name:</b> ${result.name}, <b>Height:</b> ${result.height}`)
//     ))
//   }

//   resultSection.innerHTML = html;
// } 

//new function showResults 
// function showResults(searchOption,results){
//   let htmlStructure;
//   switch(searchOption){
//     case 'films':
//       htmlStructure = results.map(result => (
//         generateView(`<p>Tytuł:</p> ${result.title}`)
//       ))
//       break;
//     case 'people':
//       htmlStructure = results.map(result => (
//         genereteHtml(`<p>Imię i nazwisko: </p> ${result.name}`)
//       ))
//       break;
//   }
//     resultSection.innerHTML = htmlStructure;
// }
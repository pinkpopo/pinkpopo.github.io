
// define buttons, input line
var btn = document.getElementsByTagName("button")[0];
var input = document.getElementById("userinput");
var rand_btn = document.getElementById("random");
const pokemon_html = document.querySelector('.pokemon');
var nxtbtn = document.getElementById("nextButton");
var prvbtn = document.getElementById("prevButton");
const twitterimages = 
[
"https://pbs.twimg.com/media/GBF-hV1acAAcP8G?format=jpg&name=large",
"https://pbs.twimg.com/media/GBByL97asAAfCvA?format=jpg&name=large",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAxoO3MRPXlU041u3Htxc8yXEHUwDlcFFEwA&usqp=CAU"
];
const counter = 0;


const SearchPokemon = (api_obj) => {
	
	const {url, type, name} = api_obj //destructured object
	const api_url = `${url}${type}/${name}` //URL string

	fetch(api_url)
		.then( (raw_data) => raw_data.json()) 
		.then( (data) => changeHtml(data))
		.catch((err) => { //if some error happens, it shows the following message
			pokemon_html.innerHTML = 
			  `<h1> Please type the name in correctly... </h1>`;
		})

	const changeHtml = (data) => {
		
		//// stats names
		let new_stats = [];
		const get_stats = () => {
			for (i=0; i< data.stats.length; i++) {
				new_stats += [`<p> ${data.stats[i].stat.name} has base-stat of <span class="out">${data.stats[i].base_stat}</span> </p>`];
			}
			return new_stats
		}
		const got_stats = get_stats() //to have all stats as one variable

		///adding to HTML
		const newHtml = `
		<div class = "details" align="center">
			<h1 class= "name" > ${data.name} </h1>
			<img src= "${data.sprites.other.dream_world.front_default? data.sprites.other.dream_world.front_default : data.sprites.front_default? data.sprites.front_default : 
			"https://thumbs.dreamstime.com/b/no-pokemon-here-sign-riga-latvia-july-restricted-area-over-white-background-go-very-popular-virtual-74549871.jpg"} " /> 
		</div>`

		pokemon_html.innerHTML = newHtml //add it into html
		input.value = ""; //to reset the input line
	}
}

/////////////////
function inputLength() { //checks if the input line input is not empty
	return input.value.length;
}

function MakeUrl(value) { //creates the URL using "value"
	const api_obj = {
				url: "https://pokeapi.co/api/v2/",
				type: "pokemon",
				name: value,
				}
	return api_obj;
}

function getRandomInt(min,max) { //creates random integer
  	var rand_int= Math.floor(Math.random() * (max - min) + min);
  	console.log(rand_int);
  	return rand_int;
}

function Randomize(event) { 
	const search_value = getRandomInt(1,897); //gets random integer between min and max of Pokemon IDs
	SearchPokemon(MakeUrl(search_value)); //uses gotten integer as Pokemon ID and search
}


function SearchAfterClick(event) {
	if (inputLength() > 0) {
		SearchPokemon(MakeUrl(input.value)); //search Pokemon by using inputted value
	}	
}

function ResetAfterClick(event) {
	const newHtml = `
		<div class = "details" align="center">
			<h1 class= "name" > ${data.name} </h1>
			<img src= "${data.sprites.other.dream_world.front_default? data.sprites.other.dream_world.front_default : data.sprites.front_default? data.sprites.front_default : 
			"https://thumbs.dreamstime.com/b/no-pokemon-here-sign-riga-latvia-july-restricted-area-over-white-background-go-very-popular-virtual-74549871.jpg"} " /> 
		</div>`
}

function SearchAfterKeypress(event) {
	if (inputLength()> 0 && event.keyCode === 13) { //checks the Enter keyboard command
		SearchPokemon(MakeUrl(input.value)); //search Pokemon by using inputted value
	}
}

btn.addEventListener("click",SearchAfterClick); 
input.addEventListener("keypress", SearchAfterKeypress);
rand_btn.addEventListener("click",Randomize);
nxtbtn.addEventListener("click",ResetAfterClick);
//////////////////////
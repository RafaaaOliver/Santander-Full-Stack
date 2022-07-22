const BASE_URL_DOG = 'https://dog.ceo/api/breeds/image/random';
const BASE_URL_CAT = 'https://dog.ceo/api/breeds/image/random';
const dogBtn = document.getElementById('change-dog');
const catBtn = document.getElementById('change-cat');
	


let fluxoDog = () => {
	const getDogs = async () => {
		let data = await fetch(BASE_URL_DOG);
		data = await fetch(BASE_URL_DOG);
		const json = await data.json()
		return json.message
	}
	
	const loadImg = async () => {
		const catDog = document.getElementById('dog');
		const catImg = document.getElementById('cat');
		catDog.src = await getDogs();
		catImg.src = await getDogs();
	}
	
	dogBtn.addEventListener('click', loadImg);
	
	loadImg();
}

fluxoDog()


// function fluxoCat() {
// 	const getCats = async () => {
// 		let data = await fetch(BASE_URL_CAT);
// 		data = await fetch(BASE_URL_CAT);
// 		const json = await data.json()
// 		return json.message
// 	}
	
// 	const loadImg = async () => {
// 		const catImg = document.getElementById('cat');
// 		catImg.src = await getCats();
// 	}
	
// 	catBtn.addEventListener('click', loadImg);
	
// 	loadImg();
// }

// fluxoCat()


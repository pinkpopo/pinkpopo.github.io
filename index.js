
// define buttons, input line
var btn = document.getElementsByTagName("button")[0];
var input = document.getElementById("userinput");
var rand_btn = document.getElementById("random");
const pokemon_html = document.querySelector('.pokemon');
var nxtbtn = document.getElementById("nextButton");
var prvbtn = document.getElementById("prevButton");
var vtuber = document.getElementById("person");
var vtubername = document.getElementById("vtuberName");
var count = document.getElementById("count");
twitterimages = 
[
"https://pbs.twimg.com/media/GBA73uab0AAZXJA?format=jpg&name=large",
"https://media.discordapp.net/attachments/1185395352359149718/1185396179236835519/KingpinKori.jpg?ex=658f7538&is=657d0038&hm=a3600892e8598d626ea7c2fbd43a4990ea48b6b0dd6c4cd7c264b98c37332ffc&=&format=webp&width=669&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396167232720956/Loon_Moon_.jpg?ex=658f7535&is=657d0035&hm=a8c14bf2633ff0be5e6e2b16c464c364c749b3889680104a481421eaf0f69715&=&format=webp&width=304&height=670",
"https://media.discordapp.net/attachments/1185395352359149718/1185396166737789008/nyaoista.jpg?ex=658f7535&is=657d0035&hm=8bdd16f7f61d4f2012df5c06b3a0d882563b5738f4e2b58fafceb9dadb87ea19&=&format=webp&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396166347722852/kelsiolli.jpg?ex=658f7535&is=657d0035&hm=071516423ef1034a8a53b4209f1ad5480d3fa61565ea06f556d7c3c9000088f1&=&format=webp&width=302&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396166020563104/Kalcedonyx.jpg?ex=658f7535&is=657d0035&hm=91426674d150cd7bd85c7bef128afbd14b6291c8fe85da3caa7ce385d67883b5&=&format=webp&width=1193&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396165391421511/lonestarcolt.jpg?ex=658f7535&is=657d0035&hm=e36e86b910382a03c12c61aed13a471dba94d18a951b921af1c61e88b0930608&=&format=webp&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396164430921799/V4Velcrow.jpg?ex=658f7535&is=657d0035&hm=2cbba56b8db5f2b466ebca43fc060f9f8b72d3dfb6b6be9cbca3f342813ab89e&=&format=webp&width=358&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396163843735572/MyOshi.jpg?ex=658f7535&is=657d0035&hm=a1767b846c6e26a7de5223177ccf4636e1d905afd2be5d11c51d8bd92e94fb38&=&format=webp&width=1193&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396163386544238/bear__seven.jpg?ex=658f7534&is=657d0034&hm=98b924d82f3b170df077664bc123f145fb5f2aea39cb6c549f854554fbf9e7d2&=&format=webp&width=653&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396162900000839/EmptyPinataVT.jpg?ex=658f7534&is=657d0034&hm=56e36cddc30278139057dc8889c5f18c633dc5dcf391018cb541217ddc99c4b4&=&format=webp&width=453&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396162459615232/CheckTheseNA.jpg?ex=658f7534&is=657d0034&hm=f46ef42794c9f583f6e226d48a7d40142b64e8dba8d8ebb5430f8ff6618b1a01&=&format=webp&width=388&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396122248822865/Clickbait_png.jpg?ex=658f752b&is=657d002b&hm=56bedd74442a1ee075a099b547b4a8059ead238757a215aea9fea98ce100a2ce&=&format=webp&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396121892290571/AlekkLuften.jpg?ex=658f752b&is=657d002b&hm=eea9b0a19b91307f02d8d0ed2f7975ed09d2dae94b75260f3ff4e7bccfa3b809&=&format=webp&width=261&height=670",
"https://media.discordapp.net/attachments/1185395352359149718/1185396121556758708/AzahNahza.jpg?ex=658f752a&is=657d002a&hm=f1fc7f8fac61abd028cbc4b7dca92a1fc8a7246841042777c31f966bc6f54501&=&format=webp&width=615&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396121309298698/trystion18.jpg?ex=658f752a&is=657d002a&hm=a8a65e5fe2935cc48cd0baf579c54e786e04ed3070b897e43b6694f35725f864&=&format=webp&width=434&height=670",
"https://media.discordapp.net/attachments/1185395352359149718/1185396120940183633/AedanMenace.jpg?ex=658f752a&is=657d002a&hm=80710db01834012f9eebf69880c096ef75837566da23edf320402d7f6c0de7f6&=&format=webp&width=782&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396120541737010/gumikoh_nari.jpg?ex=658f752a&is=657d002a&hm=9032b996216b1dd1f003bdb7131cb10621f7d80703aaa668680037816197e0a8&=&format=webp&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396120143282257/AstroSango.jpg?ex=658f752a&is=657d002a&hm=d5155d51a2be678bc62b286bdfc0bbfef6639ea50f9026b0bfe607f098b5a0be&=&format=webp&width=1193&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396119774167040/MarigatouDesu.png?ex=658f752a&is=657d002a&hm=bb7e53e99b78ed63de9ba8d90e781939c18f8bed105acd4860d9e4e6e52e9e6e&=&format=webp&quality=lossless&width=478&height=670",
"https://media.discordapp.net/attachments/1185395352359149718/1185396119467995206/Khiaransalee.png?ex=658f752a&is=657d002a&hm=10257318568718e2925ea5973a33d9229300882ad75f4a93efd337253d2c434a&=&format=webp&quality=lossless",
"https://media.discordapp.net/attachments/1185395352359149718/1185396119182786580/barCintamani.jpg?ex=658f752a&is=657d002a&hm=5de30cca26709d622f7a0a9d80bada9726ace0831530ad93dd4d18517ef23f23&=&format=webp&width=803&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396076056944701/yunjie_vt.jpg?ex=658f7520&is=657d0020&hm=8dd913bed9c3ef037e6de8cd97a62171fcf33653b3dcb7aade825650f5d340cd&=&format=webp&width=552&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396075574603897/Late_Primrose.jpg?ex=658f7520&is=657d0020&hm=1bd24ec5df180ae0b17509bf0137d8d4024172b297222dbc017b07d323f8d975&=&format=webp&width=1193&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396070725984306/PsiPhiBabyseal.jpg?ex=658f751e&is=657d001e&hm=d1df40ce77bd3ed67e2ad67d95ad6e465d1581619a338eef499a4bd273c9c9be&=&format=webp&width=350&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396070457553006/EzekielAethalus.jpg?ex=658f751e&is=657d001e&hm=7509ad3008280b595942e124f7253d2f1d1bf81493f39f9e15e8dc973a2f9e4a&=&format=webp&width=395&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396070113607802/HanayomeK.jpg?ex=658f751e&is=657d001e&hm=4d7c3392fd4ac9367e7d84b678a536ac6a2f1821f9aa481a0bc6e1f1cff02dac&=&format=webp&width=223&height=670",
"https://media.discordapp.net/attachments/1185395352359149718/1185396069727739904/InazumaVt.jpg?ex=658f751e&is=657d001e&hm=259a649db078b0ca3bcc2d39d3df34dba35ac34a6c52d7fb68745ae75aa45fe5&=&format=webp&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396068876300368/Trim_Fandango.png?ex=658f751e&is=657d001e&hm=0881bda0b05106edc0a094b3910431052318cea7076863bb05953ada4be84578&=&format=webp&quality=lossless&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396068519772300/niamonnie.jpg?ex=658f751e&is=657d001e&hm=f93db36fdc453b86a87fdb6940860f91d1e4f7e27aa715dd9ee8914414f594b4&=&format=webp&width=760&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396067995496508/ruamamiya.png?ex=658f751e&is=657d001e&hm=919a203963c314fec0ca1ac5c3d7843ad5d5ff37080ec73deb58e31c836519bd&=&format=webp&quality=lossless&width=382&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396067643162654/Ube_Halaya615.png?ex=658f751e&is=657d001e&hm=88a8946cf78ee3a6fed1786429e3e3015da504163033d94f9bff75f408d74f47&=&format=webp&quality=lossless&width=575&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396043614007417/40kurage.png?ex=658f7518&is=657d0018&hm=83d9352be44ba738a63129f4b79a0c09c8a76ff8780149d892da5fb99daa3e76&=&format=webp&quality=lossless",
"https://media.discordapp.net/attachments/1185395352359149718/1185396043379122326/Usukie1.jpg?ex=658f7518&is=657d0018&hm=5edc2d734bd8e2d941e9bd690aa4f21eb49d61307d12ad7a1f35ee6875ada9c2&=&format=webp&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396042963877918/RiezaeRehunho.jpg?ex=658f7518&is=657d0018&hm=f923ec96c0a402f9a2189e1bfc11ffa3a2e8f1f9bec490c5ec6909c24961f3ed&=&format=webp&width=447&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396042343133274/LonNolan87.jpg?ex=658f7518&is=657d0018&hm=3e3a9536b89a163220778e931c79e54b1698a2f8cbef2d4b7acf62f76bf969f6&=&format=webp&width=342&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396041852395580/noi2bear.jpg?ex=658f7517&is=657d0017&hm=87d7ceff674579445033d5ae935bce9e507a8cb099b94edcee67095e1782355e&=&format=webp&width=320&height=670",
"https://media.discordapp.net/attachments/1185395352359149718/1185396041583952043/KirkKladen.jpg?ex=658f7517&is=657d0017&hm=375c2831ae49b1ea764cab39bca23e41b4a7866486e3865094f782c695dbf468&=&format=webp&width=562&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396041068064768/marchxcapricorn.jpg?ex=658f7517&is=657d0017&hm=80c9176597b916638f67ba1c63420c9fe3e79ec6f9167b24979c1ca3e4f3da5c&=&format=webp&width=949&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396040581521508/0chroma_.jpg?ex=658f7517&is=657d0017&hm=747bbbc5d254cdea9b52a72eb4cb447568104efdf3e92df56ad86d27e41e51ac&=&format=webp&width=474&height=670",
"https://media.discordapp.net/attachments/1185395352359149718/1185396040124334170/sorarinya.jpg?ex=658f7517&is=657d0017&hm=23961854ebe024f352365bb4b959c0053abdad936b38b3a0856c9c584604c450&=&format=webp&width=587&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396039264514099/Alula_lalune.jpg?ex=658f7517&is=657d0017&hm=f8de251e92df7fad0bdc2f516e17313539c61d75d9f3bde84b51057081f09799&=&format=webp&width=1193&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396002077814856/SamuDoggu.jpg?ex=658f750e&is=657d000e&hm=29af9c31acd4d2c5f3f4f7a8c7f407f8be116fb640c944f8fe4d21546aac4003&=&format=webp&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396001767428096/mintyhoneyy.jpg?ex=658f750e&is=657d000e&hm=a995e3fbfc3d05fbc5a0c6192479c1280d3a3e812257fefb99828d2d0c7de025&=&format=webp&width=906&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396001419313262/zerolen.jpg?ex=658f750e&is=657d000e&hm=4fb594a1dc8cd10388b2f6bcd0141720e63f6c6b13cb6d36e853fe49daf2df9a&=&format=webp&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396000756604948/URAunitB.jpg?ex=658f750e&is=657d000e&hm=cb0ce109301b6f730489f5d1fa0088f1c3985cd932f3988367f831396702de12&=&format=webp&width=830&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185396000421056582/HoratiusDwarf.jpg?ex=658f750e&is=657d000e&hm=d4acfa5ee50a980ec1377ead9b282401a60144bc299bd8b199bf7530d97a9217&=&format=webp&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395999569625179/xDivZero.jpg?ex=658f750d&is=657d000d&hm=abb9a2d022e71ad5acf399fe0a5d1d0e1f8e657b70cd4eab2d6b88ffcddbd9bd&=&format=webp&width=760&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395999250849832/envtIa.jpg?ex=658f750d&is=657d000d&hm=5e86570968adf489dad38186e2c37b75410b585435ea3543c83e088699d846ba&=&format=webp&width=468&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395998923690064/ArchieVtuber.jpg?ex=658f750d&is=657d000d&hm=6af15d49b87f201126306062dc9f80c2e7e504786420859fc28e2790d8a71e0d&=&format=webp&width=671&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395998672044094/BluexKitsu.jpg?ex=658f750d&is=657d000d&hm=d11b203fe1c1f858e02efe6d9e248c18cefa36f7dc29a175db40fd62f83ebe4f&=&format=webp&width=519&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395998357463131/jaejoonah_vt.jpg?ex=658f750d&is=657d000d&hm=3713dfe6614ee6d16ac2fb014cf11dce82d2af2fb95dd97f694f23527c91a255&=&format=webp",
"https://media.discordapp.net/attachments/1185395352359149718/1185395838302826547/vRipSkip.jpg?ex=658f74e7&is=657cffe7&hm=43b54cbb13aa3afd232669f9661de849e664cafeda72beddfefe5e99e2a1ee56&=&format=webp&width=797&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395837958881360/residentreaper.jpg?ex=658f74e7&is=657cffe7&hm=2a1f5a2f38160d05f7adda7bfd5c14130630d7060e3ce8b2d85747c1d3373606&=&format=webp&width=434&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395837535268874/koganeritsu.jpg?ex=658f74e7&is=657cffe7&hm=fdf3ef92bfc2c8ce7330281a754f8afbc5a45ed347ee2bad1707fb6118152f2a&=&format=webp&width=1161&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395836914499654/gigavt.jpg?ex=658f74e7&is=657cffe7&hm=d3b1eb3602886c100064bcbaad649b8d172722e65362f1020121c36cc177c3a4&=&format=webp&width=1037&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395836570578964/crowdrxgon.jpg?ex=658f74e7&is=657cffe7&hm=f8dbf4bbcc3c8926133b3a1ea68d1c974323691e7c6bb9f693979b72edd69416&=&format=webp&width=660&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395836012728390/lirielirie.jpg?ex=658f74e6&is=657cffe6&hm=a3478902319d753e2c21ed14b58a95bad5830ab72eff35ab46f79d0e12833368&=&format=webp&width=592&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395835635237005/qingyunVT.jpg?ex=658f74e6&is=657cffe6&hm=d0e66f64d1d10f3c8e23795b97b539131fa1c429ac6032de96a9e6b404dff9c8&=&format=webp&width=895&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395835203227758/BIGHAM_vt.png?ex=658f74e6&is=657cffe6&hm=3aecff381ac3a05cb02e7d73664b575cef4350cab9dbd2c7c4e09d9264f58933&=&format=webp&quality=lossless&width=769&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395834905428079/chewydukk.jpg?ex=658f74e6&is=657cffe6&hm=5d3c958548a5d55463d78f73e443ff156691151aa6aee5a33476ea51f537b008&=&format=webp&width=1008&height=671",
"https://media.discordapp.net/attachments/1185395352359149718/1185395834666364958/VtuberTalk.jpg?ex=658f74e6&is=657cffe6&hm=83b0042142a0dfd3b6074b54b963eda2fa8eaa80d9ef6cd31ff0a6ceb2e20c19&=&format=webp",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAxoO3MRPXlU041u3Htxc8yXEHUwDlcFFEwA&usqp=CAU"
];
names = [
""
,"KingpinKori"
,"Loon_Moon_"
,"nyaoista"
,"kelsiolli"
,"Kalcedonyx"
,"lonestarcolt"
,"V4Velcrow"
,"MyOshi (From Bear)"
,"Gigachad"
,"EmptyPinataVT"
,"CheckTheseNA"
,"Clickbait_png"
,"AlekkLuften"
,"AzahNahza"
,"trystion18"
,"AedanMenace"
,"gumikoh_nari"
,"AstroSango"
,"MarigatouDesu"
,"Khiaransalee"
,"barCintamani"
,"yunjie_vt"
,"Late_Primrose"
,"PsiPhiBabyseal"
,"EzekielAethalu"
,"HanayomeK"
,"InazumaVt"
,"Trim_Fandango"
,"niamonnie"
,"ruamamiya"
,"Ube_Halaya615"
,"40kurage"
,"Usukie1"
,"RiezaeRehunho"
,"LonNolan87"
,"noi2bear"
,"KirkKladen"
,"marchxcapricor"
,"0chroma_"
,"sorarinya"
,"Alula_lalune"
,"SamuDoggu"
,"mintyhoneyy"
,"zerolen"
,"URAunitB"
,"HoratiusDwarf"
,"xDivZero"
,"envtIa"
,"ArchieVtuber"
,"BluexKitsu"
,"jaejoonah_vt"
,"vRipSkip"
,"residentreaper"
,"koganeritsu"
,"gigavt"
,"crowdrxgon"
,"lirielirie"
,"qingyunVT"
,"BIGHAM_vt"
,"chewydukk"
,"VtuberTalk"
];
let counter = 0;


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

const resetPokemon = () =>{
	pokemon_html.innerHTML = 
	`<h1> Next Pokemon... </h1>`;
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
	resetPokemon();
	counter = (counter +1) % twitterimages.length;
	vtuber.src=twitterimages[counter];
	vtubername.innerHTML=names[counter];
	count.textContent= counter+"/61";
}

function ReverseAfterClick(event) {
	resetPokemon();
	counter = (counter -1);
	vtuber.src=twitterimages[counter];
	vtubername.innerHTML=names[counter];
	count.textContent= counter+"/61";
}

function SearchAfterKeypress(event) {
	if (inputLength()> 0 && event.keyCode === 13) { //checks the Enter keyboard command
		SearchPokemon(MakeUrl(input.value)); //search Pokemon by using inputted value
	}
}

btn.addEventListener("click",SearchAfterClick); 
input.addEventListener("keypress", SearchAfterKeypress);
nxtbtn.addEventListener("click",ResetAfterClick);
prvbtn.addEventListener("click",ReverseAfterClick);
//////////////////////
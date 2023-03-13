function generateName() {
  const language = document.getElementById("language").value;
  let names = [];

  if (language === "english") {
    names = ["arsehead", "arsehole", "asshole", "bollocks", "motherfucker", "nigga", "nigra", "son of a bitch","son of a whore", "dickhead"];
  } else if (language === "sindhi") {
    names = ["behenien khe yahan", "Budhi muhandro", "Chud Budhi jo", "kakus", "lalli", "Marhain khe"];
  } else if (language === "hindi") {
    names = ["Badirchand", "Chutiya", "Bhenchod", "Madarchod", "Bhosdike", "Lodu"];
  } else if (language === "bihari") {
    names = ["Badi larchat laika ho ji tum", "bhosri wali", "chhota chetan", "chutmuha", "gaar marao", "gadchat"];
  } else if (language === "bengali") {
    names = ["Shuorer Naati", "Kutni Mashi", "Gaaler oot gaal, fonder oot mejjan", "Bokachoda", "Maagi", "Bara"];
  }

  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];

  document.getElementById("result").innerHTML = randomName;
}

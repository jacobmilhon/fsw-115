let info = document.getElementById("info");
let ulist = document.getElementById("datalist");
let button = document.getElementById("getInfo");
button.addEventListener("click", fai);

function fai(){
    axios.get("https://anapioficeandfire.com/api/characters/58")
        .then(response => {
            const li = document.createElement('li');
            const liGender = document.createElement('li');
            const liCulture = document.createElement('li');
            const liBorn = document.createElement('li');
            li.textContent = response.data.name;
            liGender.textContent = "Height: " + response.data.gender;
            liCulture.textContent = "Skin color: "+ response.data.culture;
            liBorn.textContent = "Hair color: "+ response.data.born;
            ulist.append(li);
            ulist.append(liGender);
            ulist.append(liCulture);
            ulist.append(liBorn);
        })
        .catch(error => console.log(error))
}
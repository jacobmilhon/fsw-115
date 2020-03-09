let info = document.getElementById("info");
let ulist = document.getElementById("datalist");
let button = document.getElementById("getInfo");
button.addEventListener("click", swa);

function swa(){
    axios.get("https://swapi.co/api/people/5")
        .then(response => {
            const li = document.createElement('li');
            const liHight = document.createElement('li');
            const liSkin = document.createElement('li');
            const liHair = document.createElement('li');
            li.textContent = response.data.name;
            liHight.textContent = "Height: " + response.data.height;
            liSkin.textContent = "Skin color: "+ response.data.skin_color;
            liHair.textContent = "Hair color: "+ response.data.Hair_color;
            ulist.append(li);
            ulist.append(liHight);
            ulist.append(liSkin);
            ulist.append(liHair);
        })
        .catch(error => console.log(error))
};

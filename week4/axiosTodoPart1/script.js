axios.get("https://api.vschool.io/jacobmilhon/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1');
            const p = document.createElement('p');
            const img = document.createElement('img');
            img.setAttribute("width", "300px");
            h1.textContent = response.data[i].title;
            p.textContent = response.data[i].description;
            img.src = response.data[i].imgUrl;
            document.body.appendChild(h1);
            document.body.appendChild(p);
            document.body.appendChild(img);
            if(response.data[i].completed === true){
                h1.style.textDecorationLine = "line-through";
            }
        }
    })
    .catch(error => console.log(error))
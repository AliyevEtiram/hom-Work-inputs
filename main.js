let picture = document.querySelector("#picture");
let names = document.querySelector("#name");
let price = document.querySelector("#price");
let info = document.querySelector("#info");
let type = document.querySelector("#type");
let list = document.querySelector("#list");
let btn = document.querySelector("#btn");

let old = document.querySelector("#old");
let mid = document.querySelector("#mid");
let news = document.querySelector("#new");


btn.addEventListener("click", clickBtn);

function clickBtn(event) {
    event.preventDefault()
    let ul = document.createElement("ul");
    list.appendChild(ul)

    let nameText = names.value.trim()
    if (nameText !== ""){
        let li = document.createElement("li");
        ul.appendChild(li)
        li.textContent = `Name: ${nameText}`;
        names.value = ""
    }

    let priceNumb = price.value.trim()
    if (priceNumb !== ""){
        let li = document.createElement("li");
        ul.appendChild(li)
        li.textContent = `Price : ${priceNumb}`;
        price.value = "";
    }

    let infoText = info.value.trim();
    if(infoText !== ""){
        let li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = `Info : ${infoText}`;
        info.value = ""
    }
    
    let li = document.createElement("li");
    ul.appendChild(li)
    li.textContent = ` Type: ${type.value}`;

        if(old.checked){
            let li = document.createElement("li");
            ul.appendChild(li)
            li.textContent = `Year: ${old.value}`

        } else if (mid.checked){
            let li = document.createElement("li");
            ul.appendChild(li)
            li.textContent = `Year: ${mid.value}`

        } else if (news.checked){
            let li = document.createElement("li");
            ul.appendChild(li)
            li.textContent = `Year: ${news.value}`
        }
    
    
    //     if (picture !== ""){
    //     let ol = document.createElement("li");
    //     let img = document.createElement("img");
    //     ul.appendChild(ol);
    //     ol.appendChild(img);
    //     img.innerHTML = picture.value
    // }


let deletBtn = document.createElement("button");
deletBtn.textContent = "Delet";
list.appendChild(deletBtn);

deletBtn.onclick = function () {
    if (deletBtn){
        ul.remove()
        deletBtn.style.display ="none";

    } 
}





}



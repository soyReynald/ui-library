var html = `<div class="popup_bk">
            <div class="popup" id="popup">
                <div class="sub-header">
                    <h3>15 Agentes Disponibles</h3>
                </div>

                <div class="footer">
                    <button type="submit" id="submit_request">Seleccionar Agente</button>
                </div>
            </div>
        </div>`;

/* Temporary script */
function popupEssentials(){
    let popup = document.getElementById("popup")
    let closebtn = document.createElement("div")
    closebtn.classList.add("closebtn")
    closebtn.innerHTML = "<span>X</span>"
    document.querySelector(".sub-header").appendChild(closebtn)
    closebtn.onclick=pop=>{popup.parentElement.remove(); location.reload()}

    /* Search box */
    let search_label = document.createElement("label")
    search_label.innerHTML = "<i class='fas fa-search'></i><b>Search</b>"
    popup.appendChild(search_label)
    let searcher = document.createElement("input")
    searcher.id="searcher"
    search_label.appendChild(searcher)

    let agents_list = document.createElement("ul")
    agents_list.classList.add("scrollbar")
    popup.appendChild(agents_list)
    let n = 10 // # of agents

    for(let i=0; i<n; i++){
        let profilePicture = document.createElement("img")
        profilePicture.src= "/src/img/popup/profile.jpg"
        profilePicture.style.borderRadius = "40px"

        var li_item = document.createElement("li")
        agents_list.appendChild(li_item)

        let user_image = document.createElement("div")
        user_image.classList.add("image-container")

        let user_name = document.createElement("div")
        user_name.classList.add("user-container")

        user_name.innerHTML= '<span class="username">'+"John Doe"+'</span>'

        let user_tasks = document.createElement("div")
        user_tasks.classList.add("user-tasks")
        let tasks_btn = document.createElement('button') 
        tasks_btn.innerHTML = "8 Tasks"
        user_tasks.appendChild(tasks_btn)

        li_item.appendChild(user_image)
        user_image.appendChild(profilePicture)
        li_item.appendChild(user_name)
        li_item.appendChild(user_tasks)
    }

    var footer = document.querySelector(".footer")
    popup.appendChild(footer)
}

/* Temporal */
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("popup").onclick=()=>{
        document.body.innerHTML = html;
        popupEssentials();
    }
})
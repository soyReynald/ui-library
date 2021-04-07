Object.size = obj=> {var size = 0, key; // stckOvrflow . cm
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
}

function unlocker(){
  let targ = document.querySelector(".btn.t_reasign")
  let expulsor = new Promise(function(res, reject){
    document.addEventListener("DOMContentLoaded", function(){
        let rows = document.querySelectorAll(".Row")
        for(let i = 0; i < rows.length; i++){
          rows[i].childNodes.forEach((ch)=>{
            if(ch.classList.value.indexOf("cell-component-active") < 0){
              res("There's nothing to be assigned")
            }
          })
        }      
    })
  })
  expulsor.then(function(value) {
    alert(value)
  })
}
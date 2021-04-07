function enviarForm(){
    var dataInForm = `{ "email": ${document.getElementById("email").value}, "password": ${document.getElementById("password").value} }`
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', _API_URL+'/Users')
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onloadend = () =>{
            if(this.status == 200) resolve(JSON.parse(this.response))
            else reject(JSON.parse(this.response))
        }
        let result = JSON.parse(xhr.responseText)
        if(xhr.status != 200){
            reject()
        }else{
                if(result.length > 0) next(result)
                else reject()
            }
        })
        xhr.send(dataInForm)
}
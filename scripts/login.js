parent = document.body;

parent.innerHTML = html`<div id="loginContainer">
<div class="logo">
    <span><img src="./assets/img/logo.png" alt="Logo S"></span>
    <span class="logoTxt">Sperant</span>
</div>
<div class="loginArea"> 
    <form action="javascript:void(0);" id="loginForm" method="post">
        <label for="Usuario">
            <input type="text" placeholder="Usuario" name="username">
        </label>
        <label>
            <input type="password" placeholder="**********" name="password">
        </label>
        <div class="submit-wrap">
            <input type="submit" value="Enter">
        </div>	
        <!-- <input type="submit" value="Entrar"> -->
    </form>
</div>
</div>`;
this.form = parent.querySelector('form');
this.form.onsubmit = () => {
    let _data = {};
    let xhr = new XMLHttpRequest();
    xhr.onloadend = function () {
        if (this.readyState == 4) {
            var res = JSON.parse(xhr.responseText);
            if (!res.error) {
                USER_ACCOUNT = res;
                provider.get(`Users/${res.userId}`).then(user => {
                let val = {
                    'id': res.id,
                    user,
                    'userId': res.userId
                }
                //return console.log(val);
                localStorage.setItem('currentUser', JSON.stringify(val));
                setTimeout(() => {
                    window.location.hash = 'dashboard';
                    window.location.reload();
                }, 500)
                })
            } else {
                alert("Login Fail");
            }
        }
    }


Array.from(this.form.elements).forEach(element => {
    if (element.name) {
        _data[element.name] = element.value;
    }
});


xhr.open('POST', 'http://localhost:3000/api/Users/login')
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(_data))
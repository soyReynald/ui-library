const main = function() {}
const board = document.querySelector('#container')

const routes = [
    {url: "homepage", title: "Homepage"},
    {url: "login",title: "Login"},
]
main.ready = /* Test  */ function() {
    if(USER_ACCOUNT != null){
        //board.style.display = sidemenuBoard.style.display = '';
        //sidemenu(sidemenuBoard);
    }
    main.set()
}

main.set = function(page){
    if(!USER_ACCOUNT){
        window.location.hash = 'login';
        page = 'login';
    }
    if(window.location.hash == '') {
        window.location.hash = 'dashboard';
    }
    if(!page){
        page = window.location.hash;
    }
    let _page = window.location.hash.replace("#", "").spalit(/[\/\?]/)[0];

    if(USER_ACCOUNT && _page == "login"){
        window.location.hash = 'dashboard';
        return;
    }

    let route = routes.find(r=> r.url == page) || {};
    //Let's call the pages dinamically

    page = _page[0].toUpperCase() + _page.substr(1);
    main.load(page, (Page)=>{
        board.className = (route.class || route.url) || '';
        new Page(board);
    })
}

main.load = function(page,onload){
    if(!page) return '404';

    let _page = page.toLowerCase();
    let _class = _page[0].toUpperCase() + _page.substr(1) + 'Page'; //To uppercase and ignore the # simbol then add the name of the route and add the Page string to it
    try{
        new (Function('return ' + _class));
    } catch(err){
        var _script = document.createElement("div");
        _script.src="./src/pages/"+_page+".js";
        document.body.appendChild(_script);
        _script.onerror = ()=>{
            return '404';
        }

        _script.onload = () =>{
            onload && onload(load(_class)); // Por que && ? !*Para asignar como parametro al metodo la variable class creada mas arriba.
        }
        return
    }
    onload && onload (load(_class));

    function load(_page){
        let page = getClass(_page);
        return page;
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    //main.start();
})

window.onhashchange = (evt) => {
    //TMP
    let page = window.location.hash;
    main.set(page);
}

function getClass(className){
    return Function ('return ', + className) ();
}

// Last Commit - Developing the needed pages

    var sao = {
        parent: document.body,
        setHTML: function(el, text){
            el.innerHTML = text
            
        },    

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    a: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("a");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    abbr: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("abbr");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    acronym: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("acronym");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    address: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("address");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    applet: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("applet");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    area: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("area");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    article: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("article");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    aside: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("aside");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    audio: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("audio");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    b: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("b");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    base: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("base");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    basefont: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("basefont");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    bdi: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("bdi");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    bdo: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("bdo");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    big: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("big");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    blockquote: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("blockquote");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    body: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("body");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    br: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("br");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    button: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("button");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    canvas: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("canvas");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    caption: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("caption");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    center: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("center");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    cite: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("cite");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    code: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("code");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    col: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("col");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    colgroup: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("colgroup");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    data: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("data");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    datalist: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("datalist");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    dd: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("dd");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    del: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("del");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    details: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("details");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    dfn: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("dfn");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    dialog: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("dialog");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    dir: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("dir");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    div: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("div");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    dl: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("dl");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    dt: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("dt");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    em: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("em");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    embed: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("embed");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    fieldset: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("fieldset");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    figcaption: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("figcaption");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    figure: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("figure");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    font: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("font");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    footer: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("footer");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    form: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("form");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    frame: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("frame");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    frameset: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("frameset");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    h1: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("h1");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    h2: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("h2");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    h3: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("h3");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    h4: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("h4");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    h5: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("h5");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    h6: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("h6");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    head: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("head");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    header: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("header");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    hr: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("hr");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    html: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("html");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    i: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("i");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    iframe: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("iframe");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    img: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("img");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    input: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("input");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    ins: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("ins");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    kbd: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("kbd");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    label: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("label");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    legend: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("legend");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    li: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("li");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    link: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("link");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    main: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("main");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    map: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("map");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    mark: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("mark");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    meta: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("meta");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    meter: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("meter");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    nav: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("nav");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    noframes: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("noframes");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    noscript: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("noscript");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    object: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("object");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    ol: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("ol");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    optgroup: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("optgroup");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    option: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("option");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    output: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("output");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    p: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("p");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    param: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("param");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    picture: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("picture");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    pre: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("pre");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    progress: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("progress");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    q: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("q");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    rp: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("rp");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    rt: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("rt");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    ruby: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("ruby");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    s: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("s");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    samp: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("samp");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    script: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("script");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    section: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("section");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    select: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("select");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    small: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("small");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    source: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("source");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    span: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("span");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    strike: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("strike");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    strong: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("strong");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    style: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("style");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    sub: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("sub");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    summary: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("summary");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    sup: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("sup");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    svg: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("svg");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    table: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("table");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    tbody: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("tbody");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    td: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("td");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    template: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("template");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    textarea: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("textarea");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    tfoot: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("tfoot");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    th: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("th");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    thead: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("thead");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    time: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("time");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    title: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("title");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    tr: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("tr");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    track: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("track");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    tt: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("tt");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    u: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("u");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    ul: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("ul");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    var: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("var");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    video: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("video");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },

    /*
    * @param {String} textContent Este es el contenido del elemento.
    * @param {Array<String>} select  Esto son los selectores # para que sea id y letra una clase. Ejemplo ['#id clase'].
    * @param {HTMLAnchorElement | HTMLImageElement} attribute Aqui van los atributos que desee agregar. Ejemplo {'data':'String'}.
    * @param {CSSStyleDeclaration} styles Aqui se pueden agregar los estilos. Ejemplo {'background': 'red'}.
    * @param {HTMLElement} parent Este sera donde quieres agregar el elemento si esta vacio se agregara al body.
    */

    wbr: function (textContent = "", select = [], attribute = {}, styles = {}, parent = sao.parent){
        var el = document.createElement("wbr");
        sao.setHTML(el, textContent);

        if(typeof parent === 'string'){
            if(parent.match(/^#/)){
                parent = document.getElementById(parent.substr(1))
            }else{
                parent = document.body.querySelector('.'+parent)
            }
        }

        /*************************************************************************************************
        * VERIFICA CLASE O ID Y AGREGA
        **************************************************************************************************/
    
        select.map(res => {

            select = res.split(' ')
            
            select.map(res => {

                if(res.match(/^#/)){
                    
                    el.id = res.replace(/#/i, '');

                }else{
                    el.classList.add(res.replace(/#/i, ''))
                }

            });

        });

        /*************************************************************************************************
        * AGREGA ATRIBUTOS
        **************************************************************************************************/
        Object.keys(attribute).forEach(key => {

            el.setAttribute(key, attribute[key])

        });

        /*************************************************************************************************
        * AGREGA ESTILOS
        **************************************************************************************************/
        Object.keys(styles).forEach(key => {

            el.style[key] = styles[key]

        });

        parent.appendChild(el);
        return el;
    },
}
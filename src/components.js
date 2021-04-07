class Components{
    constructor(component){
        this.component = component
    }
    imageRotator = {
        init(target){
            imageRotator(target)
        }
    }
    /* getElement(){ return `${this.component}(){`+this.component.init()`}` }; */
    // ..
    lightBox = {
        init(){
            if(document.querySelector(".m_container")) document.querySelector(".m_container").remove()
            lightbox('_first_lightBox')
            this.f2s()
        },
        f2s(){
            setTimeout(()=>{
                document.querySelector(".m_container").remove()
                lightbox('_second_lightBox')
                this.f3s()
            }, 1000)
        },
        f3s(){
            setTimeout(()=>{
                document.querySelector(".m_container").remove()
                lightbox('_third_lightBox')
                this.init()
            }, 1000)
        }
    }
    table = {
        init(container, cols, rows, titles = {}, main_color, style){
           table(container, cols, rows, titles, main_color, style)
        }
    }
    registryForm = {
        init(){
            let formulary = document.querySelector(".registration")
            loginArea.style.display.toggle("block")
        }
    }
    loginArea = {
        init(){
            let loginArea = document.querySelector(".loginArea")
            loginArea.style.display.toggle("block")
        }
    }
}

var componentsFilter = (parameter)=>{
    let component = new Components
    if(parameter.target.id == "getLightBox") component.lightBox.init()
    if(parameter.target.id == "popup") component.popup.init()
    if(parameter.target.id == "table") component.table.init("#resources_container", 4, 8, ["Texto de ejemplo", "Texto de ejemplo para titulo", "titulo", "costo"], '', 'w3c')
    if(parameter.target.id == "image-rotator") component.imageRotator.init("imagesContainer")
    if(parameter.target.id == "registryForm") component.registryForm.init()
    if(parameter.target.id == "login") component.loginArea.init()
    // NC: switch <-> instead of = if ,
}
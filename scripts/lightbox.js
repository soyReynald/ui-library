// utils
/* const utils = {
    classes: {
        box: "lightbox box",
    },
    getClasses(){
        // if() ... 
        return this.classes.box;
    }
} */
var lightbox = (selection, bk) =>{
    if(selection != ""){
        let lightBoxBK = document.createElement("div") // bk
        lightBoxBK.classList.value += "lightbox-bk target"
        if(bk == 'img') lightBoxBK.src = "../rscs/1.jpeg" // NC: bk_dir/bk_img_parameter.png
        document.body.appendChild(lightBoxBK)
    }
    /*@ param _first_ligthBox, _second_LigtBox, and so on...
    /* mbk target */
    if(bk == 'img') document.querySelector(".lightbox-bk.target").style.filter="blur(8px)"

    let lightboxContainer = document.createElement("div")
    document.body.appendChild(lightboxContainer)
    lightboxContainer.classList.add('m_container')

    /* lightbox */
    let lightbox = sao.div("", [`lightbox box`], {}, {}, lightboxContainer)
    lightboxContainer.appendChild(lightbox)

    /* info */
    let title = ["10% OFF", "SUBSCRIBE TO OUR NEWSLETTER & RECEIVE A COUPON", "Summer sale"]
    let more_details = ["First time registration only, '$10 off on $25+ orders, and entering your email also makes you ligible to receive future promotional emails'", "50 MINIMUN PURCHASE"]
    let callToAction = ["Subscribe to our newsletter & receive a coupon", "Summer sale"]
    
    let promo = opt => { if(opt) return true; }
    let additional_info = ["In stores online", "With order of $25 or more", more_details]
    
    let closeButton = "X";
    if(selection == '_first_lightBox'){
        sao.div(title[0], ["title"], {}, {
        }, lightbox)

        sao.span(callToAction[0], ["subs-span"], {}, {
        }, lightbox)

        sao.input("", ["input first-box"], {
            value: "Enter your email where we send you 10% off"
        }, {}, lightbox)

        sao.button("GET IT NOW!", ["get-it"], {}, {
        }, lightbox)

        sao.span("NO THANKS", ["linkLightbox"], {}, {
        }, lightbox)

        sao.span(additional_info[2][1], ["additional_info"], {},{
        }, lightbox)
    }
    if(selection == '_second_lightBox'){
        let info = {
            title: "<h3>"+title[2]+"</h3>",
            callToAction: ["<span class='light-blue'>Save up to</span><span><b>30</b><div class='xtraOrdrer'><span class='tmp-symbol'>%</span> <i>OFF</i></div></span><span>In stories & online</span>", "<h5>Enter your email bellow to unlock</h5><h3>Where should we send your 30% off?</h3>", ""],
        }
        sao.div(info.title, ["title second_box"], {}, {
        }, lightbox)
        
        sao.div(info.callToAction[0], ["call-toAct sec_box"], {}, {
        }, lightbox)

        let form = sao.div("", ["formulary second_box"], {}, {
        }, lightbox)

        sao.div(info.callToAction[1], ["inputLabel sec_box"], {}, {
        }, form);

        sao.input("", ["input second-box"], {
            value: "Enter your email here"
        }, {}, form)

        sao.button("GET MY $10 OFF", ["get-it"], {}, {
        }, form)

        sao.span('NO THANKS', ["linkLightbox"], {}, {
        }, form)

        sao.span(additional_info[2][0], ["additional_info"], {}, {
        }, form)
        /* Ordering */
        let callToAction = document.querySelector(".call-toAct");
        let leftContainer = document.querySelector("body > div > div > div.title.second_box");
        document.querySelector(".m_container .lightbox").classList.add("second-lightbox")
        leftContainer.appendChild(callToAction)
    }
    if(selection == '_third_lightBox'){
        sao.div("Enter your email and get", ["third_box_p"], {}, {
        }, lightbox)

        sao.div(title[0], ["title third-box"], {}, {
        }, lightbox)

        sao.span("with order of $25 or more", ["subs-span"], {}, {
        }, lightbox)

        let trd_input = sao.div("", ["input third_input"], {}, {}, lightbox)
        sao.input("", ["input first-box"], {
            value: "Enter your email here"
        }, {}, trd_input)

        sao.button("GET IT NOW!", ["get-it"], {}, {
        }, trd_input)

        sao.span('NO THANKS', ["linkLightbox"], {}, {
        }, lightbox)

        sao.span(additional_info[2][0], ["additional_info"], {}, {
        }, lightbox)

        document.querySelector(".m_container .lightbox").classList.add("third_lightbox")
    }
}
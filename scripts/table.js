var table = (container, cols, rows, titles = [], main_color, style) =>{
    var table = document.createElement("table")
        table.id=container
        var t_container = document.querySelector(container)
        t_container.appendChild(table)
        
        if(titles){
            let t_head = document.createElement("thead")
            let row = document.createElement("tr")
                t_head.appendChild(row)
            for(let i=0; i<titles.length; i++){
                let col = document.createElement("th")
                    row.appendChild(col)
                    col.textContent = titles[i]
            }
            table.appendChild(t_head)
        }

        let t_body = document.createElement("tbody");
            t_body = table.appendChild(t_body);

        for(let i=0; i<rows; i++){
            let row = document.createElement("tr")
                t_body.appendChild(row)
            for(let i=0; i<cols; i++){
                let col = document.createElement("td")
                    row.appendChild(col)
            }
        }
        if(style == 'w3c'){ 
            w3c = { style: `table { width:100%; } table, th, td { border: 1px solid black; border-collapse: collapse; } th, td { padding: 15px; text-align: left; } table#t01 tr:nth-child(even) { background-color: #eee; } table#t01 tr:nth-child(odd) { background-color: #fff; } table#t01 th { background-color: black; color: white; } #resources_container thead  tr th{ text-transform: capitalize; font-size: 14px; padding-top: 5px; padding-bottom: 5px; color: #000; }` }
            let style = document.createElement("style")
                style.setAttribute("type", "text/css")
            document.head.appendChild(style)
                style.innerText = `${w3c.style}`
        }
}
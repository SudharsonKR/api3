async function api3fetchdata(){
    try{
        const response= await fetch("https://hp-api.onrender.com/api/characters")
    const data = await response.json()
    console.log(response)
    console.log(data)
       data.forEach(ele=>{
        
        const chars = {
            ...ele,
            charcName : ele.name,
            actorName : ele.actor,
            image : ele.image
             }
             horrypot(chars)
        

       })
        
    }
    catch (error)
    {
        console.log("Note Error:", error)
    }   

    
}

function horrypot(elements){
    document.body.innerHTML += `
    <div class="container">
    <img src = "${elements.image}" class = "image"/>
    <div class="info">
    <h5>Charactor: ${elements.charcName}</h5>
    <h5>Actor: ${elements.actorName}</h5>
    </div>
    </div>
    `
    
}
api3fetchdata()


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
 {
     var t = JSON.parse(this.response);
     for(i=0;i<t.length;i++){
     country_name=(t[i].name)
     country_region=(t[i].region)
     country_population=(t[i].population)
     country_flag=(t[i].flag)
     country_capital=t[i].capital
    const flex=document.createElement("div");
    flex.setAttribute("class","flex")
    document.body.append(flex)
    const division=document.createElement("div")
    division.setAttribute("class","container")
    flex.appendChild(division)
    const img=document.createElement("div")
    img.setAttribute("class","img")
    division.appendChild(img)
    const image=document.createElement("img")
    image.setAttribute("src",country_flag)
    image.setAttribute("class","image")
    img.appendChild(image)
    const info=document.createElement("div")
    info.setAttribute("class","info")
    division.appendChild(info)
     const name=document.createElement("h2");
     name.innerText=country_name;
     info.appendChild(name);
     const population=document.createElement("p")
     population.innerText="Population:"+country_population;
     info.appendChild(population);
     const region=document.createElement("p")
     region.innerText="Region:"+country_region;
     info.appendChild(region);
     const capital=document.createElement("p")
     capital.innerText="Capital:"+country_capital;
     info.appendChild(capital)
     
    
     }
}

 xhr.onerror = function () 
 {
     console.log("Error", this.statusText);
 };
     xhr.send();
     
     
     
    
     
    
     
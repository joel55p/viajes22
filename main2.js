
function ver(){

    tipo= document.querySelector("#tipo").value;
    cantidad_km= parseInt(document.querySelector("#cantidad").value);
    minimo= parseInt(document.querySelector("#personas").value);

    let total1= 0;
    let total2=0;

    if (tipo=="A") {
        if(minimo>=20){
            
            total1= minimo*cantidad_km*2
            total2= total1/minimo
        }else{
            total1= 20*cantidad_km*2
            total2= total1/minimo
        }
    }else if(tipo=="B"){
        if(minimo>=20){
            total1= minimo*cantidad_km*2.5
            total2= total1/minimo
        }else{
            total1= 20*cantidad_km*2.5
            total2= total1/minimo
        }
    }
    else if(tipo=="C"){
        if(minimo>=20){
            total1= minimo*cantidad_km*3
            total2= total1/minimo
        }else{
            total1= 20*cantidad_km*3
            total2= total1/minimo
        }
    }

    document.querySelector("#resultado").innerHTML= `El costo en total es de ${total1}$ y el de cada persona es ${total2}$`
}



document.querySelector("button").addEventListener("click",ver)
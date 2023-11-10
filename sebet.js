var phones = [
    {
        id: "0",
        name: "14 pro max",
        details: "128GB white",
        price: "2500",
        photo: "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/220908083534874325/221010160035950226.jpg@webp"

    },
    {
        id: "1",
        name: "14",
        details: "128GB yellow",
        price: "2100",
        photo: "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/230308075755610001/230310080012845242.jpg@webp"
    },
    {
        id: "2",
        name: "14 pro",
        details: "128GB graphite",
        price: "2300",
        photo: "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:230/bg:fff/plain/s3://catalog-products/220908083451677823/221010160132556421.jpg@webp"
    }
]
phones.forEach((p, index) => {
    document.querySelector(".Container").innerHTML += `<img src="${p.photo}">
            <div class="Text">
                <h5>${p.name}</h5>
                <p>${p.details}</p>
                <strong>${p.price} </strong><strong>AZN</strong><br>
                <i onclick="AddElement(${index})" class="fa-solid fa-cart-plus"></i>
            </div>`

});
function OpenModal() {
    document.querySelector(".Modal").style.display = "block"
}
function CloseModal() {
    document.querySelector(".Modal").style.display = "none"
}
var i = 0;
var orders = []
var bool;
let orderId;



function AddElement(x) {
    console.log(orders)
    if (orders.length == 0) {
        orders.push(phones[x]);
        orders[orders.length - 1].say = 1
        document.querySelector(".Modal1").innerHTML = ""
        console.log(orders, "length 0")
      
    }
    else {
        for (i = 0; i < orders.length; i++) {
            if (orders[i].id == phones[x].id) {
                bool = true;
                orderId=i
                break;
            }
            else {
                bool = false;
            }
              



        }
        if (bool == true) {
            orders[orderId].say= orders[orderId].say+1
            
        }
        else{
            orders.push(phones[x])
            orders[orders.length - 1].say = 1
            

        }




       

    };
    document.querySelector(".Modal1").innerHTML = ""
    orders.forEach((element,index) => {
            
            document.querySelector(".Modal1").innerHTML += `
                        <div class="Item2">
                            <img src="${element.photo}">
                            <div class="Text2">
                                <h5>${element.name}</h5>
                                <p>${element.details}</p>
                                <strong>${element.price}</strong><strong>AZN</strong><br>
                                <button onclick="minuss(this,${index})">-</button>
                                <button id="btn">${element.say}</button>
                                <button onclick="plus(this,${index})">+</button>
                                <i onclick="DeleteElement(this,${index})" class="fa-solid fa-trash"></i>
                            </div>
                        </div>`
                        
        });
       
        document.querySelector("#Sum button").innerHTML=0;
        total=0
        document.querySelector(".Text1").children[1].innerHTML=0
        for(j=0;j<orders.length;j++){
                            document.querySelector("#Sum button").innerHTML= Number(document.querySelector("#Sum button").innerHTML)+(orders[j].say);
                            total=total+(orders[j].say*orders[j].price)
                           
                           document.querySelector(".Text1").children[1].innerHTML=total;
                                                   }
                        
}

var z,y;
function minuss(x,index){
     z=+x.nextElementSibling.innerHTML-1;
     if(z==0){
      orders.splice(index,1)
    x.parentElement.parentElement.remove();
    document.querySelector(".Modal1").innerHTML = ""
    orders.forEach((element,index) => {
           
            document.querySelector(".Modal1").innerHTML += `
                        <div class="Item2">
                            <img src="${element.photo}">
                            <div class="Text2">
                                <h5>${element.name}</h5>
                                <p>${element.details}</p>
                                <strong>${element.price}</strong><strong>AZN</strong><br>
                                <button onclick="minuss(this,${index})">-</button>
                                <button id="btn">${element.say}</button>
                                <button onclick="plus(this,${index})">+</button>
                                <i onclick="DeleteElement(this)" class="fa-solid fa-trash"></i>
                            </div>
                        </div>`
                        
        });
        document.querySelector("#Sum button").innerHTML=0;
        total=0
        document.querySelector(".Text1").children[1].innerHTML=0
        for(j=0;j<orders.length;j++){
                            document.querySelector("#Sum button").innerHTML= Number(document.querySelector("#Sum button").innerHTML)+(orders[j].say);
                            total=total+(orders[j].say*orders[j].price)
                           
                           document.querySelector(".Text1").children[1].innerHTML=total;
                                                   }
     }
     else{
        orders[index].say=z;
        x.nextElementSibling.innerHTML=z;
        document.querySelector("#Sum button").innerHTML=0;
        total=0
        document.querySelector(".Text1").children[1].innerHTML=0
        for(j=0;j<orders.length;j++){
                            document.querySelector("#Sum button").innerHTML= Number(document.querySelector("#Sum button").innerHTML)+(orders[j].say);
                            total=total+(orders[j].say*orders[j].price)
                           
                           document.querySelector(".Text1").children[1].innerHTML=total;
                                                   }
     }
    
}
function plus(x,index){
    y=+x.previousElementSibling.innerHTML+1;
    orders[index].say=y;
    x.previousElementSibling.innerHTML=y;
    document.querySelector("#Sum button").innerHTML=0;
    total=0
    document.querySelector(".Text1").children[1].innerHTML=0
    for(j=0;j<orders.length;j++){
                            document.querySelector("#Sum button").innerHTML= Number(document.querySelector("#Sum button").innerHTML)+(orders[j].say);
                            total=total+(orders[j].say*orders[j].price)
                           
                           document.querySelector(".Text1").children[1].innerHTML=total;
                                                   }
}
function DeleteElement(x,index){
    orders.splice(index,1)
    x.parentElement.parentElement.remove();
    document.querySelector(".Modal1").innerHTML = ""
    orders.forEach((element,index) => {
       
            document.querySelector(".Modal1").innerHTML += `
                        <div class="Item2">
                            <img src="${element.photo}">
                            <div class="Text2">
                                <h5>${element.name}</h5>
                                <p>${element.details}</p>
                                <strong>${element.price}</strong><strong>AZN</strong><br>
                                <button onclick="minuss(this,${index})">-</button>
                                <button id="btn">${element.say}</button>
                                <button onclick="plus(this,${index})">+</button>
                                <i onclick="DeleteElement(this)" class="fa-solid fa-trash"></i>
                            </div>
                        </div>`
                        
        });
        document.querySelector("#Sum button").innerHTML=0;
        total=0
        document.querySelector(".Text1").children[1].innerHTML=0
        for(j=0;j<orders.length;j++){
                            document.querySelector("#Sum button").innerHTML= Number(document.querySelector("#Sum button").innerHTML)+(orders[j].say);
                            total=total+(orders[j].say*orders[j].price)
                           
                           document.querySelector(".Text1").children[1].innerHTML=total;
                                                   }
}


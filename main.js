let dic = document.querySelector("#dic");
let textBox = document.querySelector("#textBox");
let inc = document.querySelector("#inc");
let price = document.querySelector("#price");
let productAmmount = document.querySelector("#productAmmount");
let totalAmmount = document.querySelector("#totalAmmount");




dic.addEventListener("click", dicrement);
function dicrement(){
    let minus = textBox.value;
    let cnbNumbr = parseInt(minus) - 1;
    textBox.value = cnbNumbr;

    price.innerHTML = "$" + textBox.value * 15;
    productAmmount.innerHTML = textBox.value * 15;
    totalAmmount.innerHTML = textBox.value * 15 + 20;

    if(textBox.value <= 0){
        textBox.value = 0;
        document.getElementById("dic").disabled = true;
        price.innerHTML = "$" + textBox.value * 15;
        productAmmount.innerHTML = textBox.value * 15;
        totalAmmount.innerHTML = textBox.value * 15 + 00;
    }else{
        textBox.value = cnbNumbr;
    }
}


inc.addEventListener("click", increment);
function increment(){
    let numbers = textBox.value;
    let imprub = parseInt(numbers) + 1;
    textBox.value = imprub;
    
    price.innerHTML = "$" + textBox.value * 15;
    productAmmount.innerHTML = textBox.value * 15;
    totalAmmount.innerHTML = textBox.value * 15 + 20;

    if(textBox.value > 5){
        alert("Please Call Me 0186108575");
        textBox.value = 5;
        price.innerHTML = "$" + textBox.value * 15;
        productAmmount.innerHTML = textBox.value * 15;
        totalAmmount.innerHTML = textBox.value * 15 + 20;
       
    }else{
        textBox.value = imprub;
        document.getElementById("dic").disabled = false;
    }

}














const inputEL= document.getElementById("input")
const lengthEl = document.getElementById("Length")
const volumeEl = document.getElementById("Volume")
const massEl = document.getElementById("Mass")


const btnEl = document.getElementById("convert")

btnEl.addEventListener("click",function(){ 
    const number = Number(inputEL.value) 
    lengthEl.innerHTML=`${number} Meter = ${Math.round(number*3.28 *100)/100} feet | 
    ${number} Feet = ${Math.round(number * 0.30 *100)/100} meter`
    volumeEl.innerHTML=`${number} Litre = ${Math.round(number*0.21 *100)/100} gallons |
    ${number} Gallon = ${Math.round(number*4.54 *100)/100} Litre `
    massEl.innerHTML=`${number} Kilogram = ${Math.round(number*2.20 *100)/100} pounds |
    ${number} Pound = ${Math.round(number*0.45 *100)/100} kilogram`
})
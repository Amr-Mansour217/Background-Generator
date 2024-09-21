let valueOne = document.getElementById('colorOne')
valueOne.setAttribute('value', '#b91919')

let valueTwo = document.getElementById('colorTwo')
valueTwo.setAttribute('value', '#3c0549')

const change = ()=>{
    const color1 = document.querySelector('#colorOne')
    const color2 = document.querySelector('#colorTwo')
    const container = document.querySelector('.container')
    const finalValue = document.querySelector('#finalValue')
    color1.addEventListener('input', ()=>{
        container.style.backgroundImage = 'linear-gradient(to right, '+color1.value+' , '+color2.value+')'
        finalValue.value = color1.value + '     ,     ' + color2.value
    })
    color2.addEventListener('input', ()=>{
        container.style.backgroundImage = 'linear-gradient(to right, '+color1.value+' , '+color2.value+')'
        finalValue.value = color1.value + '     ,     ' + color2.value
    })
}
change()
// select all of input
let defaultSize = document.querySelector('.default input')
let pixel = document.querySelector('.pixel input')
let ems = document.querySelector('.em input')

// Function to convert px to em
const pxFunc = ()=>{
    let em = pixel.value/defaultSize.value
    ems.value = parseFloat(em)
}

// Function to convert em to px
const emFunc = () => {
    let px = defaultSize.value*em.value
    pixel.value = parseFloat(px)
}

// Events on input
// pixel.addEventListener('input', pxFunc)
// ems.addEventListener('input', emFunc)
pixel.oninput = pxFunc
ems.oninput = emFunc

// Function to calculate em and px when default size change
defaultSize.addEventListener('input', ()=>{
    // chack if dafaultSize value is equal with 0 or is null
    if(defaultSize.value === '' || defaultSize.value === '0'){
        ems.value = 1
        pixel.value = 16
    }else{
        pxFunc()
        emFunc()
    }
})
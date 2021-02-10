
// Action - Buttons
const output = document.querySelector("#output")
const _clear = document.querySelector("#action-clear")
const _add = document.querySelector("#action-add")
const _result = document.querySelector("#action-result")


// Global Variables
let total = 0;
let current = '';
let outputNums = ''

// Functions
function onAddition(){
    total += Number(current)
    current = ''
    outputNums += '+'
    renderOutput()
    console.log('Adding...')
}

function onClear(){
    total = 0
    outputNums = ''
    current = ''
    renderOutput()
    console.log('Erased Done!')
}

function onResult(){
    document.getElementById('output').innerText = total + Number(current)
    console.log('Addition Done!')
    total = 0
    outputNums = ''
    current = ''
}

function sendNum(n){
    outputNums += n
    current += n
    // document.getElementById('output').innerText = outputNums
    console.log(`${n} is pressed`)
    renderOutput()
    
}

function pushAdd(n){
    add.push(n)
}

function renderOutput(){
    // console.log(`${total} : ${current}`)
    if(15 > outputNums.length) {
        document.getElementById('output').innerText = outputNums
    }
    return
}

// Event Listeners
_add.addEventListener('click', () => {
    onAddition()
})

_clear.addEventListener('click', () => {
    onClear()
})

_result.addEventListener('click', () => {
    onResult()
})


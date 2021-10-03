const inputValue = document.getElementById('input-value')
const result = document.getElementById('result')
const submit = document.querySelector('.submit')
const resultNum = document.querySelector('.number')

const fibb = (numb)=>{
  let prev = 0;
  let cur = 1;
  let index = 1;

  while (index !== numb){
    [prev, cur] = [cur, prev + cur]
    index ++
  }

  resultNum.textContent =' ' + cur
}


submit.addEventListener('click', ()=>{
  let val = parseInt(inputValue.value)

  if (isNaN(val) === true){
    alert('Please input a whole number')
    resultNum.textContent = ''
    inputValue.value = ''
  }else if( val <= 0){
    alert("Can't take in the number 0 and anything below that as an argument...")
    resultNum.textContent = ''
    inputValue.value = ''
  }else{
    fibb(val)
    inputValue.value = ''
  }



})

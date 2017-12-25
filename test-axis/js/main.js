const arcAxis = document.querySelector('.axis-line')
const result = document.querySelector('.result')

/**
 * @mixin inputs 
 * Помещаем все формы для ввода в один объект
 */

const inputs = {
        inputFirstNumber: document.getElementsByClassName('axis-input_1')[0],
        inputSecondNumber: document.getElementsByClassName('axis-input_2')[0],
        resultInput: document.getElementsByClassName('example__input')[0]
}

/**
 * @mixin number
 * Помещаем слогаемые числа в один объект
 */

const number = {
        numA: document.getElementById('number-a'),
        numB: document.getElementById('number-b')
}

/**
 * @param {...number} 
 */
const { numA, numB } = number

/**
 * @param { bool } 
 * Переменные для проверки валидации 
 */

let     firstNumber  = false,
        secondNumber = false;

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number, number}
 * Функция возвращает минимальное и максимальное число
 */

function getRandomInt(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min  
}

/**
 * @function getRandomInt
 * В переменной хранится случайное число
 */

let a = getRandomInt(6,9)
  
/**
 * 
 * @param {*} val
 * @returns 
 */

function getRandomSecondNum(val){
  switch(val){
    case 6: return getRandomInt(5,8)
            break
    case 7: return getRandomInt(4,7)
            break
    case 8: return getRandomInt(3,6)
            break
    case 9: return getRandomInt(2,5)
            break
  }
}

let b = getRandomSecondNum(a)

numA.innerHTML = a
numB.innerHTML = b


/**
 * 
 * @param {number} value 
 * @return позиция первой оси
 */

function lineArc(value){
   
        let width = arcAxis.style.width = 39.6

        for (let i = 0; i < value; i++){
                width += 39.6   
        }

      arcAxis.style.width =  (width - 39.6) + 'px'
}

/**
 * 
 * @param {number} from 
 * @param {number} to
 * @return По 
 */

function lineSecondArc(from, to){
        let left = secondArc.style.left = 112
        let offsetLeft = arcAxis.offsetLeft;
        let offsetWidth = arcAxis.offsetWidth;

        
        for (let i = 0; i < from; i++){
               left += 37.8;
        }

        // if(to <= 4 ) secondArc.style.left =  (left - 34.8) + 'px'
        // if(to <= 2 ) secondArc.style.left =  (left - 39.8) + 'px'

        secondArc.style.left =  (left - 31.7) + 'px'

        let width = secondArc.style.width = 39.6
        
        for (let i = 0; i < to; i++){
               width += 41;
        }
        
        secondArc.style.width =  (width - 39.6) + 'px'
}

let secondArc = document.getElementById('secondArc');

lineArc(a)
lineSecondArc((a-1), b)

const { inputFirstNumber, inputSecondNumber, resultInput } = inputs

inputFirstNumber.oninput = function(ev) {
        if(this.value != a){
                firstNumber = false
                this.style.color = 'red'
        }else{
                firstNumber = true
                this.style.color = '#000'
        }
        validateInput(this.value, numA, a)

        return firstNumber
}

inputSecondNumber.oninput = function(ev) {
        if(this.value != b){
                secondNumber = false
                this.style.color = 'red'
        }else{
                secondNumber = true
                this.style.color = '#000'
        }
        validateInput(this.value, numB, b)
        
        return secondNumber
}

const validateInput = (value, el, eq) => {
        if(value != eq){
                el.style.backgroundColor = 'orange' 
        }else{
                el.style.backgroundColor = '#31ff16'
        }

        visibleInput()
} 

const visibleInput = () => {
        console.log(firstNumber, secondNumber)
        if(firstNumber && secondNumber) {
                resultInput.style.display = 'block'
                result.style.display = 'none'
        }else{
                resultInput.style.display = 'none'
                result.style.display = 'block'
        }
}

let sum = a + b

resultInput.oninput = function(ev) {
        this.value == sum ? this.style.color = '#31ff16'  :  this.style.color = 'red' ;
}
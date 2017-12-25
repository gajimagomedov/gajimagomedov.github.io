const arcAxis = document.querySelector('.axis-line');
const result = document.querySelector('.result');
const linePointSecond = document.querySelector('.axis-line.line-pointB');


/**
 * @mixin inputs
 * Помещаем все формы для ввода в один объект
 */

const inputs = {
    inputFirstNumber: document.getElementsByClassName('axis-input_1')[0],
    inputSecondNumber: document.getElementsByClassName('axis-input_2')[0],
    resultInput: document.getElementsByClassName('example__input')[0]
};

/**
 * @mixin number
 * Помещаем слогаемые числа в один объект
 */

const number = {
    numA: document.getElementById('number-a'),
    numB: document.getElementById('number-b')
};
/**
 * @param {...number}
 */
const {numA, numB} = number;

/**
 * @param { bool }
 * Переменные для проверки валидации
 */

let firstNumber = false,
    secondNumber = false;

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number, number}
 * Функция возвращает минимальное и максимальное число
 */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @function getRandomInt
 * В переменной хранится случайное число
 */

let a = getRandomInt(6, 9);

/**
 *
 * @param {*} val
 * @returns
 */

function getRandomSecondNum(val) {
    switch (val) {
        case 6:
            return getRandomInt(5, 8);
            break;
        case 7:
            return getRandomInt(4, 7);
            break;
        case 8:
            return getRandomInt(3, 6);
            break;
        case 9:
            return getRandomInt(2, 5);
            break;
    }
}

let b = getRandomSecondNum(a);

numA.innerHTML = a;
numB.innerHTML = b;


/**
 *
 * @param {number} value
 * @return позиция первой оси
 */

function lineArc(value) {
    switch (value) {
        case 6:
            arcAxis.style.width = 238 + 'px';
            break;
        case 7:
            arcAxis.style.width = 277 + 'px';
            break;
        case 8:
            arcAxis.style.width = 317 + 'px';
            break;
        case 9:
            arcAxis.style.width = 356 + 'px';
            break;
    }
}

/**
 *
 * @param {number} value
 * @return По
 */

function lineSecondArc(value) {
    switch (value) {
        case 2:
            secondArc.style.width = 81 + 'px';
            secondArc.style.left = ((arcAxis.offsetLeft + arcAxis.offsetWidth) - 4) + 'px';
            break;
        case 3:
            secondArc.style.width = 120 + 'px';
            secondArc.style.left = ((arcAxis.offsetLeft + arcAxis.offsetWidth) - 4) + 'px';
            break;
        case 4:
            secondArc.style.width = 159 + 'px';
            secondArc.style.left = ((arcAxis.offsetLeft + arcAxis.offsetWidth) - 4) + 'px';
            break;
        case 5:
            secondArc.style.width = 199 + 'px';
            secondArc.style.left = ((arcAxis.offsetLeft + arcAxis.offsetWidth) - 4) + 'px';
            break;
        case 6:
            secondArc.style.width = 238 + 'px';
            secondArc.style.left = ((arcAxis.offsetLeft + arcAxis.offsetWidth) - 4) + 'px';
            break;
        case 7:
            secondArc.style.width = 277 + 'px';
            secondArc.style.left = ((arcAxis.offsetLeft + arcAxis.offsetWidth) - 4) + 'px';
            break;
        case 8:
            secondArc.style.width = 317 + 'px';
            secondArc.style.left = ((arcAxis.offsetLeft + arcAxis.offsetWidth) - 4) + 'px';
            break;
    }


}

let secondArc = document.getElementById('secondArc');

lineArc(a);
lineSecondArc(b);

const {inputFirstNumber, inputSecondNumber, resultInput} = inputs;

inputFirstNumber.oninput = function() {
    if (this.value.length > 1) {
        this.value = this.value.substring(-1, 1);
        return false;
    }
    if (this.value != a) {
        firstNumber = false;
        this.style.color = 'red'
    } else {
        firstNumber = true;
        this.style.color = '#000';
        linePointSecond.style.visibility = 'visible';
    }


    if (validateInput(this.value, numA, a)) {
        inputSecondNumber.focus();
        this.setAttribute('disabled', 'disabled');
    } else {
        this.removeAttribute('disabled');
    }

    return firstNumber;
};

inputSecondNumber.oninput = function() {
    if (this.value.length > 1) {
        this.value = this.value.substring(-1, 1);
        return false;
    }
    if (this.value != b) {
        secondNumber = false;
        this.style.color = 'red'
    } else {
        secondNumber = true;
        this.style.color = '#000';
    }

    if (validateInput(this.value, numB, b)) {
        resultInput.focus();
        this.setAttribute('disabled', 'disabled');
    } else {
        this.removeAttribute('disabled');
    }

    return secondNumber;
};

const validateInput = (value, el, eq) => {
    let validated = value == eq;

    if (!validated)
        el.style.backgroundColor = 'orange';
    else
        el.style.backgroundColor = '#fff';

    visibleInput();

    return validated;
};

const visibleInput = () => {
    if (firstNumber && secondNumber) {
        resultInput.style.display = 'block';
        result.style.display = 'none';
    } else {
        resultInput.style.display = 'none';
        result.style.display = 'block';
    }
};

let sum = a + b;

resultInput.oninput = function() {

    if (this.value.length > 2) {
        this.value = this.value.substring(-1, 2);
        return false;
    }
    if (this.value == sum) {
        this.style.display = 'none';
        result.innerHTML = this.value;
        result.style.display = 'block';
    }
    else {
        this.style.color = 'red';
    }

};


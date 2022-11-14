// ⁡⁣⁣⁢​‌​‌‌‍Модуль 2. Заняття 4. Функції​⁡

let _______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

//www.jsv9000.app/

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Індекс маси тіла​⁡
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає
// індекс маси тіла людини. Для цього необхідно розділити вагу в
// кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// Prompt!!!

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// function getInfo() {
// 	const weight = prompt('Введіть Вашу вагу:')
// 	const height = prompt('Введіть Ваш зріст:')
// 	return [weight, height]
// }

// function calc(array) {
// return array[0] / Math.pow(array[1], 2)
// }

// function setResult(bmi) {
// 	if (bmi < 18.5) alert('Недостатня маса')
// 	else if (bmi >= 18.5 && bmi < 25) alert('Норма')
// 	else alert('Надлишкова маса')
// }

// function calcBMI() {
// 	const arrInfo = getInfo()
// 	const result = calc(arrInfo)
// 	setResult(result)
// }

// calcBMI()
// calcBMI()
// calcBMI()

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Найменше з чисел​⁡
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b) {
// 	return a > b ? b : a
// }

// console.log(min(2, 5)) // 2
// console.log(min(3, -1)) // -1
// console.log(min(1, 1)) // 1

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Площа прямокутника​⁡
// Напиши функцію getRectArea(dimensions) для обчислення площі
// прямокутника зі сторонами, значення яких будуть передані до
// параметра dimensions у вигляді рядка.
// Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
// 	const array = dimensions.split(' ')
// 	return array[0] * array[1]
// }

// console.log(getRectArea('5 12'))

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Логування елементів​⁡
// Напиши функцію logItems(items), яка отримує масив та використовує
// цикл for, який для кожного елемента масиву буде виводити в консоль
// повідомлення у форматі <номер елемента> - <значення елемента>.
// Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax']
// з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		console.log(`${i + 1} - ${items[i]}`)
// 	}
// }

// logItems(['Mango', 'Poly', 'Ajax'])
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋'])

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Логування контактів​⁡
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль
// ім'я та телефонний номер користувача. У параметри names та phones
// будуть передані рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
// 	const namesArr = names.split(',')
// 	const phonesArr = phones.split(',')

// 	for (let i = 0; i < namesArr.length; i++) {
// 		console.log(`${namesArr[i]} - ${phonesArr[i]}`)
// 	}
// }

// printContactsInfo(
// 	'Jacob,William,Solomon,Artemis',
// 	'89001234567,89001112233,890055566377,890055566300'
// )

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Пошук найбільшого елемента​⁡
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше
// число в масиві.

// for of

// function findLargestNumber(numbers) {
// 	let max = numbers[0]
// 	for (const number of numbers) {
// 		if (max < number) {
// 			max = number
// 		}
// 	}
// 	return max
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])) // 94
// console.log(findLargestNumber([49, 4, 7, 12])) // 83

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Середнє значення​⁡
// Напишіть функцію calAverage() яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення. Усі аргументи будуть
// лише числами.

// function calAverage() {
// 	let counter = 0
// 	for (let i = 0; i < arguments.length; i++) {
// 		counter += arguments[i]
// 	}
// 	return counter / arguments.length
// }

// console.log(calAverage(1, 2, 3, 4)) // 2.5
// console.log(calAverage(14, 8, 2)) // 8
// console.log(calAverage(27, 43, 2, 8)) // 23.2

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟴 - Форматування часу​⁡
// Напиши функцію formatTime(minutes) яка переведе значення minutes
// (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// console.log(hours);
// console.log(minutes);

// function formatTime(totalMinutes) {
// 	const hours = Math.floor(totalMinutes / 60) // Винесли до функциї time
// 	const minutes = totalMinutes % 60 // Винесли до функциї time

// 	const doubleDigitHours = String(hours).padStart(2, 0) // Винесли до функциї doubleDigit
// 	const doubleDigitMinutes = String(minutes).padStart(2, 0) // Винесли до функциї doubleDigit

// 	return `${doubleDigitHours}:${doubleDigitMinutes}`
// }

// // refact>>>

// function formatTime(totalMinutes) {
// 	return doubleDigit(time(totalMinutes))
// }

// const doubleDigit = function (array) {
// 	return `${getStringTime(array[0])}:${getStringTime(array[1])}`
// }

// const getStringTime = function (item) {
// 	// функція яка виконує одну й ту ж саму дію з різними параметрами
// 	return String(item).padStart(2, 0)
// }

// const time = function (totalMinutes) {
// 	return [Math.floor(totalMinutes / 60), totalMinutes % 60]
// }

// console.log(formatTime(70)) // "01:10"
// console.log(formatTime(450)) // "07:30"
// console.log(formatTime(1441)) // "24:01"

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ​‌‍‌⁡⁢⁣⁣‍‍𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟵 - Колекція курсів (𝗶𝗻𝗰𝗹𝘂𝗱𝗲𝘀, 𝗶𝗻𝗱𝗲𝘅𝗢𝗳, 𝗽𝘂𝘀𝗵 і т. д.)⁡​
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']

// const addCourse = function (cours) {
// 	if (!courses.includes(cours)) {
// 		courses.push(cours)
// 	} else alert(`Ви вже маєте курс ${cours}`)
// }

// function removeCourse(cours) {
// 	if (courses.includes(cours)) {
// 		courses.splice(courses.indexOf(cours), 1)
// 	} else alert(`Курса з ім'ям ${cours} не існує`)
// }

// function updateCourse(oldCours, newCours) {
// 	if (courses.includes(oldCours)) {
// 		courses.splice(courses.indexOf(oldCours), 1, newCours)
// 	} else alert(`Курса з ім'ям ${oldCours} не існує`)
// }

// addCourse('Express')
// console.log(courses) // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS') // 'У вас уже есть такой курс'

// removeCourse('React')
// console.log(courses) // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue') // 'Курс с таким имененем не найден'

// updateCourse('HTML', 'NestJS')
// console.log(courses) // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

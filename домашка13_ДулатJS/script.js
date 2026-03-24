const howOld = prompt('Введите ваш возраст')
const answear = Number(howOld)

if (answear <18) {
    alert('Извините, доступ только с 18 лет')
}
else {
    alert('Доступ на сайт разрешен')
}

const howWeather = prompt('Какая сейчас погода?')
const weather = String(howWeather)

if (weather === 'солнце') {
    console.log('Отличная погода для прогулки!')
}
else if (weather === 'дождь') {
    console.log('Не забудьте взять зонт')
}
else if (weather === 'снег') {
    console.log('Одевайтесь теплее, на улице мороз!')
}
else {
    console.log('Я не знаю такой погоды.')
}
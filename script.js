function run () {
    const righAnswer = ['2', '1', '3', '1', '3'];
    const userAnswer =[];
    let raiting = 0;
    let status = '';
    const name = prompt("Введите свое имя", "Пользователь");
    const years = prompt("Сколько вам лет?", '100');
userAnswer[0] = prompt("Луна это планета? \n1. Да\n2. Нет", '1');
userAnswer[1] = prompt("Из чего состоит солнце? \n1. Из газа\n2. Изо льда\n3. Из ваты",'1');
userAnswer[2] = prompt("Какой по счёту марс от солнце? \n1. 1-й\n2. 3-й\n3. 4-й", '1');
userAnswer[3] = prompt("Есть ли у урана кольца? \n1. Да\n2. Нет", '1');
userAnswer[4] = prompt("Какая самая большая планета в солнечной системе? \n1. Земля\n2. Луна\n3. Юпитер", '1');
if (righAnswer[0] === userAnswer[0]) {
    raiting += 1;
}
if (righAnswer[1] === userAnswer[1]) {
    raiting +=1;
}
if (righAnswer[2] === userAnswer[2]) {
    raiting +=1
}
if (righAnswer[3] === userAnswer[3]) {
    raiting +=1;
}
if (userAnswer[4] === userAnswer[4]) {
    raiting +=1;
}
if (raiting <= 2) {
    status = 'Ты очень мало знаешь о космосе, тебе стоит читать больше книг.';
}
else if (raiting < 5) {
    status = 'Ты довольно хорошо знаешь космос, продолжай в том же духе и ты сможешь стать пилотом космического коробля!';
}
else {
    status = 'Ты знаешь о космосе практически всё, продолжай в том же духе, ты молодец!';
}
alert(`Привет, ${name}! Тебе уже ${years} лет и ${status}`);
alert('Правильные ответы: 1) Луна это планета? 2. Нет 2) Из чего состоит солнце? 1. Из газа 3) Какой по счёту марс от солнце? 3. 4-й 4) Есть ли у урана кольца? 1. Да 5) Какая самая большая планета в солнечной системе? 3. Юпитер')
}



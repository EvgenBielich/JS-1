//! Возведение числа в степень

// let base = prompt('Давай число');
// base = Number(base);

// console.log(base)

// let power = prompt("Давай степень");
// power = Number(power);

// console.log(power);

// const result = base ** power;
// console.log(result);

// ---------------------------------------------------------------------

//! Смена цвета фона Боди

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;

// -------------------------------------------------------------------

//! Приветственное сообщение 

// const room = 584;
// const type = 'VIP';
// const firstName = "John";
// const lastNAme = "Black";

// const welcomMsg = `Гость ${firstName} ${lastNAme} поселяется в ${type} номер ${room}`;
// console.log(welcomMsg);

// ---------------------------------------------------------------

//! Нормализация

// let brand = prompt('ДАвай бренд:');
// brand = brand.toLowerCase();
// console.log(brand);

// ---------------------------------------------------------------

//! Логические операторы

// const x1 = 10;
// const x2 = 30;
// const number = 20;

// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);
// console.log(`ЧИсло ${number} попадает в отрезок от ${x1} до ${x2}`, number > x1 && number < x2);
// console.log(`ЧИсло ${number} попадает в отрезок до ${x1} или после ${x2}`, number < x1 || number > x2);

// --------------------------------------------------------------------

// !разрешает открыть чат - если онлайн, друг, и режим"не беспокоить""

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(`Можно открыть чат?`, canOpenChat);

// ------------------------------------------------------------------

//! подписка, если пользователь про или вип тогда есть доступ

// const sub = 'free';
// const canAccessContent = sub === 'pro' || sub === 'vip';

// ----------------------------------------------------------------------

//! тернарный оператор

// const balance = 1000;
// const message = balance >= 0 ? `Позитивный баланс` : `Негативный баланс`;
// console.log(message);


// -------------------------------------------------------------------

//! Выбор отеля по кол-ву звезд

// 1 - 20, 2 - 30, 3 - 50, 4 - 70, 5 - 120$;

// const stars = 7;
// let price;

// if (stars === 1) {
//    price = 20;
// } else if (stars === 2) {
//    price = 30;
// } else if (stars === 3) {
//    price = 50;
// } else if (stars === 4) {
//    price = 70;
// } else if (stars === 5) {
//    price = 120;
// } else {
//    console.log('Такого кол-ва звезд нет')
// }

//! сокращенно:

// switch (stars) {
//    case 1:
//    price = 20;
//    break;

//    case 2:
//    price = 30;
//    break;

//    case 3:
//    price = 50;
//    break;

//    case 4:
//    price = 70;
//    break;

//    case 5:
//    price = 120;
//       break;

//    default:
//       console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

//! одна цена для одинаковых звезд

// 1,2 -20, 3,4 - 30, 5 - 120$;

// const stars = 5;
// let price;

// if (stars === 1 || stars === 2) {
//    price = 20;
// } else if (stars === 3 || stars === 4) {
//    price = 30;
// } else if (stars === 5) {
//    price = 120;
// }
// else {
//    console.log('Такого кол-ва звезд нет')
// }

// console.log(price);

//! через свитч

// switch (stars) {
//    case 1:
//    case 2:
//    price = 20;
//    break;

//    case 3:
//    case 4:
//    price = 30;
//    break;

//    case 5:
//    price = 120;
//    break;

//    default:
//    console.log('Такого кол-ва звезд нет');
//    }

// console.log(price);

// --------------------------------------------------------------

// ! Скрипт выбора опции доставки товара
//! опции хранятся в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
//! в переменную мессадж записать сообщение в зависимости от опции:
// !- Вы сможете забрать товар завтра с 12:00 в нашем офисе;
// !- Курьер доставит заказ завтра с 9:00 до 18:00;
//! - Посылка будет отправленна сегодня;
// !- Вам перезвонит менеджер.

// 1 Сделать переменные
// const option = 4; 
// let message = '';

// 2 сделать свитч 1,2,3
// switch (option) {

// 3 в каждом кейсе запистаь в меседж строку
//    case 1:
//       message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//       break;

//    case 2:
//       message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//       break;

//    case 3:
//       message = 'Посылка будет отправленна сегодня';
//       break;

//    default:
//       message = 'Вам перезвонит менеджер';
//       break;
// }

// 4  сделать лог месадж
// console.log(message);

// -----------------------------------------------------------------

// ! ЦИкл for                i += 1 (i = i + 1)

// for (let i = 0; i < 7; i += 1)  {
//    console.log(i);
// }; 

// console.log('qw');

// ! Pre-incremenr & Post-increment. (олд скул?) 
// (++i) < --- лучше не использовать 

// -----------------------------------------------------------------------

//! Скрипт подсчитывает общую сумму з\п.
//! кол - во работников хранится в перемнной emploees
//! з\п каждого работнка это случайное число от 500 до 5000
//! записать сумму в переменную totalSalary и вывести на консоль.


//  1 Сделать переменную
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// 2 перебрать работников в цикле
// for (let i = 0; i < employees; i += 1) {
   // 3 сгенерить случайную з\п
   // const salary = Math.round(
      // Math.random() * (maxSalary - minSalary) + minSalary,
   // );
   // console.log(`З\п работнка номер ${i} - ${salary}`);
// 4 прибавить к тотмалу 
   // totalSalary += salary;
// }
// 5 лог
// console.log('totalSalary: ', totalSalary);


// ---------------------------------------------------------------

//! Скрипт подсчитваеющий сумму всех четных чисел, 
//! которые входят в диапазон чисел в переменных от min до max.
//! например если min = 0 & max=5, то диапазон 0 - 5 и в нем два четных числа - 2 и 4,
//! их сумма 6

// 1 обьявить переменные (вары)
// const min = 2;
// const max = 5;
// let total = 0;

// 2 фор от мин дo max с шагом в 1
// for (let i = min; i <= max; i += 1) {
   // 3 проверяем остаток от деления       ((10 % 3 = 1) сколько раз 3 входит в 10 (3+3+3) 1)
   // if (i % 2 !== 0) {
      // console.log('не чётное: ', i);
      // continue;
   // }
   // console.log('четное: ', i);
   // total += i;
// }
//  4 пишем сумму
// console.log("total: ", total);


// -------------------------------------------------------------------------

//! Скрипт обработки покупки в магазине

//!    - Баланс пользователя находится в переменной balance
//!   - сумма покупки хранится в переменной  PaymentAddress
//!  - перед проверкой вывести сообщение :
//! "Общая стоимость заказа (число) кредитов. Проверяем кол-во доступных средств на счету"
//!    - Если сумма покупки не превышает баланс:
//!       -вычесть из балланса сумму покупки
//!       - вывести сообщение "На счету осталось (число) кредитов"
//!    - Если сумма покупки превышает баланс:
//!       - вывести сообщение "На счету недостаточно средств для проведения операции!"
//!    - В конце вывести сообщение "Операция завершена."      

// 1 Переменные
// let balance = 10000;
// const payment = 500;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);
// 2 условие сумма <= баланс
// if (balance >= payment) {
   // console.log('ok');


   // balance -= payment;
   // balance = balance - payment
   // console.log(`На счету осталось ${balance} кредитов`);
// } else {
   // console.log(`На счету недостаточно средств для проведения операции!`);
// }
// console.log('Операция завершена.');


// -------------------------------------------------------------------------


//! Cкрипт подсчета суммы покупки со скидкой в зависимости
//! от потраченной суммы за все время(партнерская программа)
//!    - Общая сумма потраченного хранитс в переменной totalSpent
//!    - сумма текущего платежа хранится в переменной payment
//!    - скидка хранится в переменной discount
//!    - если потрачено от (100 до 1000) - бронзовый партнер, скидка 2 %
  //!    - если потрачено от (1000 до 5000) - серебрянный партнер, скидка 5 %
//!    - если потраченно больше (5000) - золотой партнер, скидка 10 %
//!    - если потраченно меньше (100) - не партнер, скидка 0 %    
//!    - В результате вывести сообщение 
//! "Оформляем заказ на сумму (сумма) со скидкой (скидка)%"

// let totalSpent = 199;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//    console.log('Бронзовый партнер, скидка 2 %');
//    discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//    console.log('Серебрянный партнер, скидка 5 % ');
//    discount = 0.05;
// } else if (totalSpent >= 5000){
//    console.log('Золотой партнер, скидка 10 %');
//    discount = 0.1;
// } else { 
   // console.log('У вас еще нет партнерской скидки');
// }
// высчитывает скидку от суммы покупки
// payment -= payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// Прибавление потраченной суммы к общему потраченному
// totalSpent += payment;

// console.log(`Общая сумма потраченного в магазине ${totalSpent}`);

// -------------------------------------------------------------------------


//! Привязка к кнопке, ввод чисел, прибавление, сброс в HTML

// const btnAdd = document.querySelector('button[data-add]');
// const resetBtn = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');
// let total = 0;

// btnAdd.addEventListener('click', function () {
//    console.log('click heheheh');
//    const value = Number(valueInput.value);
//    console.log(value);
//    total += value;
//    outputEl.textContent = total;
//    valueInput.value = '';
// });

// resetBtn.addEventListener('click', function () {
//    total = 0;
//    outputEl.textContent = total;
// })






/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {

	if (!name || name.indexOf(' ') !== -1 || name.length < 4)
		return false;
	
	return true;
}

var userName = prompt('Введите ваше имя');

function sayHello() {
 
  if (isValid(userName) == true) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
sayHello(userName);
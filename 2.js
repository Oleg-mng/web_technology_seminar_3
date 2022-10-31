// Cоздать функцию, которая принимает имя и выводит приветствие, 
// используя переданное имя, в консоль. Также необходимо спросить 
// у пользователя его имя и вызвать функцию, про которую ранее 
// шла речь, передав ей полученное от пользователя имя.

let first_name=prompt("введите ваше first name")

function input_user_name(name_in_func){
// let first_name=prompt("введите ваше first name")
alert(`Приятно познакомится ${name_in_func}`);
console.log(`Приятно познакомится ${name_in_func}`);
}
input_user_name(first_name);

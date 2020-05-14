const robot = {
  version: 16,
  name: 'Cleaner 3000',
  coords: [345, 12],
};
function getRobotSchema(robot) {
  let arr = [];
  for(let [key, value] of Object.entries(robot)){
    arr.push([key, typeof(value)]);
  }
  return arr;
}
console.log(getRobotSchema(robot)); 
//[['version', 'number'], ['name', 'string'], ['coords', 'object']]


/* const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
} */

//возвращает набор ключей и типы значений, которые в них сохраняться.
//Результат должен выглядеть так: [[key, type], [key, type] ...]

const countries = [];

/* for (let population in populations) {
    if (populations.hasOwnProperty(population)) {
        countries.push(population)
    }
} */
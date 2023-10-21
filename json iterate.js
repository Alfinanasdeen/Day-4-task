
var data = [{
    "name": "alfina",
    "age":20,
    "email": "alfinanasdeen@gmail.com"
}];
//for loop
for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.email);
   
}

//for In
const data = {
    "name": "alfina",
    "age": 20,
    "email": "alfinanasdeen@gmail.com"
  };
  
  for (let key in data){
    console.log(key + ": " + data[key]);
  }


//for Of

const data = {
  "name": "alfina",
  "age":20,
  "email": "alfinanasdeen@gmail.com"
};

const keys = Object.keys(data);

for (const key of keys){
  console.log(key,data[key]);
}

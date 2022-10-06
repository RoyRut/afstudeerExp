// let p5;

// let textSpace = 200;
// let enter = 90;

// var names;
// var valueSet;
// var cleanValue;

// console.log("ik ben Rader.js");
// /** fetch local json */
// fetch("./data.json")
//   /**testem of de eerst then nog nodig is */
//   .then((res) => res.json())
//   .then((data) => inputData(data));

// /** maak json bruikbaar */
// let inputData = (data) => {
//   names = data.sheets.IP_LOANS_0.tables[0].columns;
//   valueSet = data.sheets.IP_LOANS_0.data.dataTable;
// };

// export function main(_p5) {
//   p5 = _p5;

//   p5.setup = (_) => {
//     var canvas = p5.createCanvas(1000, 1000);
//     canvas.parent("p5Canvas");

//     p5.background(240);
//     console.log(names);

//     for (let i = 22; i < 26; i++) {
//       var text = names[i].name;
//       p5.stroke(0, 0, 0);
//       p5.strokeWeight(1);
//       p5.textSize(30);
//       p5.text(text, 0, enter);
//       console.log(enter);

//       for (let x = 0; x < valueSet.length; x++) {
//         var value = valueSet[x][i].value;
//         getValue(value);

//         p5.strokeWeight(cleanValue);
//         p5.stroke(2 * cleanValue, 0, 0, 100);
//         p5.point(textSpace + cleanValue * 2, enter);
//       }
//       enter += 150;
//     }
//   };

//   p5.draw = (_) => {};

//   function getValue(value) {
//     cleanValue = +value;
//     let map = p5.map(cleanValue, 100000, 1000000, 0, 400);
//     cleanValue = map;
//   }
// }

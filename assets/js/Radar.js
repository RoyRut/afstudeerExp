let p5;

let radius = 50;

var names;
var valueSet;
var done = false;

console.log("ik ben Rader.js");
/** fetch local json */
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => inputData(data));

/** maak json bruikbaar */
let inputData = (data) => {
  names = data.sheets.IP_LOANS_0.tables[0].columns;
  valueSet = data.sheets.IP_LOANS_0.data.dataTable;
};

export function main(_p5) {
  p5 = _p5;

  p5.setup = (_) => {
    var canvas = p5.createCanvas(1000, 1000);
    canvas.parent("p5Canvas");

    p5.background(240);
    console.log(names);
    radius = 0;
  };

  p5.draw = (_) => {
    // p5.point(300, 300);
    // p5.strokeWeight(10);
    // p5.stroke(0);
    if (done == false) {
      for (let i = 3; i < 4; i++) {
        console.log(names[i].name);
        for (let x = 0; x < valueSet.length; x++) {
          var value = valueSet[x][i].value;
          var valueToString = value.toString().slice(5);
          var cleanValue = +valueToString;
          p5.strokeWeight(cleanValue * 3);
          p5.stroke(2 * cleanValue, 2 * cleanValue, 2 * cleanValue, 100);
          p5.point(cleanValue * 3, 150);
          // p5.textSize(30);
          // p5.fill(255, 0, 0);
          // p5.text(value, 150, cleanValue * 3);

          console.log(cleanValue);
          if (valueSet.length) {
            done = true;
          }
        }
      }
    }
  };

  function getValue() {
    for (let i = 2; i < 3; i++) {
      console.log(names[i].name);
      for (let x = 0; x < valueSet.length; x++) {
        var value = valueSet[x][i].value;
        var valueToString = value.toString().slice(5);
        var cleanValue = +valueToString;
        console.log(cleanValue);
        if (valueSet.length) {
          done = true;
        }
      }
    }
  }
}

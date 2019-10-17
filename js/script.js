console.log('');

//reading form data
// document.getElementById('submitBtn').addEventListener('click', function(){
//   var name = document.getElementById('name').value;
//   console.log(name);
//
//   var address = document.getElementById('address').value;
//   console.log(address);
//
//   document.getElementById('formData1').innerHTML = '</br>' + name + '</br>' + address;
//
//
//
// });



var names=[];
var projectA=[];
var projectB=[];
var projectC=[];
var averagePerformance=[];


var n = parseInt(prompt('Enter the number of employees'));


document.getElementById('saveBtn').addEventListener('click', function(){
console.log(names.length);
  if (names.length < n) {
//
  var eName = document.getElementById('eName').value;
  console.log(eName);
  var projA = parseInt(document.getElementById('projectA').value);
  console.log(projA);
  var projB = parseInt(document.getElementById('projectB').value);
  console.log(projB);
  var projC = parseInt(document.getElementById('projectC').value);
  console.log(projC);

  var average = ((projA + projB + projC)/3).toFixed(2);
  document.getElementById('average').value = average;


  document.getElementById('nameData').innerHTML = eName;
  document.getElementById('projAData').innerHTML = projA;
  document.getElementById('projBData').innerHTML = projB;
  document.getElementById('projCData').innerHTML =projC;
  document.getElementById('avData').innerHTML =average;



  names.push(eName);
  projectA.push(projA);
  projectB.push(projB);
  projectC.push(projC);
  averagePerformance.push(average);
  console.log(names, projectA, projectB, projectC, averagePerformance);

  if (averagePerformance < 50){
    document.getElementById('message').innerHTML = 'YOU ARE FIRED';
  }
  else if (averagePerformance < 70) {
    document.getElementById('message').innerHTML = 'YOU ARE FINE';
  }
  }


  else {
    alert('STOP IT')
  }
});

//clearing form data
document.getElementById('clearForm').addEventListener('click', function(){
  document.getElementById('eName').value = ' ';
  document.getElementById('projectA').value = ' ';
  document.getElementById('projectB').value = ' ';
  document.getElementById('projectC').value = ' ';
});

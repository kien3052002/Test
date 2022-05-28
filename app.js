// Bai 1

function reverseStr(str) {
  let strArr = str.split("");
  let result = "";
  for (k in strArr) result += strArr[strArr.length - 1 - k];
  return result;
}

// Bai 2

function numberOfChar(str) {
  let strArr = str.split("");
  let result = "";
  while (strArr.length > 0) {
    let charNumber = 1;
    let char = strArr[0];
    strArr.splice(0, 1);
    let i = 1;
    while (i) {
      i = strArr.findIndex(function (a) {
        return a == char;
      });
      if (i >= 0) {
        number++;
        strArr.splice(i, 1);
      }
    }
    result += `${char} : ${charNumber},\n`;
  }
  return result;
}

// Bai 3
function capital(str) {
  str = str.toLowerCase();
  let strArr = str.split(" ");
  let result = "";
  for (k in strArr) {
    let a = strArr[k][0].toUpperCase();
    result += a + strArr[k].slice(1, strArr[k].length) + " ";
  }
  return result;
}

// Bai 4
function removeRepeat(arr) {
  let result = [];
  for (let k in arr) {
    result = arr.filter(function (e) {
      return e != arr[k];
    });
    result.splice(k, 0, arr[k]);
    arr = [...result];
  }
  return result;
}

// Bai 5
function sortArr(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

// Bai 6

// let staffList = [
//   {
//     name: "Kien",
//     age: 20,
//     salary: 123,
//     position: "abc",
//   },
//   {
//     name: "Huy",
//     age: 20,
//     salary: 456,
//     position: "def",
//   },
//   {
//     name: "Ha",
//     age: 20,
//     salary: 789,
//     position: "ghi",
//   },
// ];

// function readAll() {
//   let result = "";
//   for (k in staffList) {
//     result += `${Number(k) + 1}. ${staffList[k].name.toUpperCase()}:
//         - Age: ${staffList[k].age}
//         - Salary: ${staffList[k].salary}
//         - Position: ${staffList[k].position}\n`;
//   }
//   alert(result);
// }

// function inputStaff(newName) {
//   let newAge = prompt("Enter age:");
//   let newSalary = prompt("Enter salary:");
//   let newPos = prompt("Enter position:");
//   let a = { name: newName, age: newAge, salary: newSalary, position: newPos };
//   return a;
// }

// function findExisting(b) {
//   let find = staffList.findIndex(function (a) {
//     return a.name == b;
//   });
//   return find;
// }

// while (1) {
//   let cmd = prompt("Enter command").toUpperCase();
//   // C
//   if (cmd == "C") {
//     while (1) {
//       let newName = prompt("Enter new staff name:");
//       let findName = findExisting(newName);
//       if (findName < 0) {
//         staffList.push(inputStaff(newName));
//         break;
//       } else alert("Staff already registered");
//     }
//     readAll();
//   }
//   // R
//   else if (cmd == "R") {
//     readAll();
//   }
//   // U
//   else if (cmd == "U") {
//     let udName = prompt("Enter staff name to update");
//     let findName = findExisting(udName);
//     if (findName >= 0) {
//       staffList[findName] = inputStaff(newName);
//     } else {
//       alert("Can't find this name");
//     }
//     readAll();
//   }
//   // D
//   else if (cmd == "D") {
//     let dlName = prompt("Enter staff name to delete");
//     let findName = findExisting(dlName);
//     if (findName >= 0) {
//       staffList.splice(findName, 1);
//     } else {
//       alert("Can't find this name");
//     }
//     readAll();
//   }
//   // End
//   else if (cmd == "E") break;
//   else alert("Invalid command");
// }

// Bai 7

// function checkDate(dateArr) {
//   for (k in dateArr) dateArr[k] = Number(dateArr[k]);
//   if (
//     dateArr[1] == 4 ||
//     dateArr[1] == 6 ||
//     dateArr[1] == 9 ||
//     dateArr[1] == 11
//   ) {
//     if (dateArr[0] > 30) return false;
//   } else if (dateArr[1] == 2) {
//     if (dateArr[2] % 4 && dateArr[0] > 28) return false;
//     else if (dateArr[0] > 29) return false;
//   } else if (dateArr[0] > 31) return false;
//   return true;
// }

// function nextDate(dateArr) {
//   dateArr[0]++;
//   if (checkDate(dateArr) == false) {
//     dateArr[0] = 1;
//     dateArr[1]++;
//     if (dateArr[1] > 12) {
//       dateArr[2]++;
//       dateArr[1] = 1;
//     }
//   }
//   let result = "Next date: ";
//   if (dateArr[0] < 10) result += "0";
//   result += String(dateArr[0]) + "/";
//   if (dateArr[1] < 10) result += "0";
//   result += String(dateArr[1]) + "/";
//   result += String(dateArr[2]);
//   alert(result);
// }

// let date = prompt("Enter date");
// let dateArr = date.split("/");
// if (checkDate(dateArr) == true) {
//   alert("Valid date");
//   nextDate(dateArr);
// } else {
//   alert("Invalid date");
// }

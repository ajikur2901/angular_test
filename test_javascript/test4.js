// Expected Result : 
// [
//   { name: 'Rahman', school_name: 'STJK' },
//   { name: 'Budi', school_name: 'STJK' }
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.
const students = [
  {
    id: "1",
    name: "Ryan",
    school: {
      id: "1",
      short_name: "PLMK"
    },
  },
  {
    id: "2",
    name: "Ari",
    school: {
      id: "1",
      short_name: "PLMK"
    },
  },
  {
    id: "3",
    name: "Rahman",
    school: {
      id: "2",
      short_name: "STJK"
    },
  },
  {
    id: "4",
    name: "Budi",
    school: {
      id: "2",
      short_name: "STJK"
    },
  },
  {
    id: "5",
    name: "Jaka",
    school: {
      id: "1",
      short_name: "PLMK"
    },
  }
]
const schoolId = '2';

function result(students, schoolId) {
  // declare local variable
  let result = [];
  // loop students
  students.forEach((val) => {
    // check if student school id same with schoolId, if same then push to result
    if(val.school.id === schoolId) result.push( {name: val.name, school: val.school.short_name})
  })
  return result
}

console.log(result(students, schoolId));
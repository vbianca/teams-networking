console.log('test script')

function insertPersons(persons){
    var tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHTML(persons);
}
function getPersonsHTML(persons){
    return getPersonHTML(persons[0]) + 
    getPersonHTML(persons[1]);
}
function getPersonHTML(person){
    const gitHub = person.gitHub;
   return `<tr>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td><a target="_blank" herf="https://github.com/${gitHub}">gitHub</a></td>
 </tr>`
}

fetch('team.json')
  .then(res => res.json())
  .then(data =>{
      insertPersons(data);
  })

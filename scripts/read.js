// Example POST method implementation:
async function showData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

var load = document.getElementById('loading');
var page = document.getElementById('page');

for (let i = 0; i < 2; i++) {
  page.innerHTML += `<a id="page${i}" href="#">${i + 1}</a> |`;
}

showData('https://apiaja.herokuapp.com/api/posts', {}).then((data) => {
  let index = data.length;
  console.log(data);
  let table = document.getElementById('tbody');
  for (let i = 0; i < 5; i++) {
    load.remove();
    table.innerHTML += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${data[i]['username']}</td>
                    <td>${data[i]['score']}</td>
                   </tr>`;
  }
  // JSON data parsed by `data.json()` call
});

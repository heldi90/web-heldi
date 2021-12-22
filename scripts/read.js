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
let halaman = document.getElementById('page');

// var dataindex = 10;
var page = 0;
var dataPage = [5];

const pageData = (page, halaman) => {};

showData('https://apiaja.herokuapp.com/api/posts', {}).then((data) => {
  let index = data.length;
  for (let i = 0; i < index; i++) {
    page++;
    if (page > 5) {
      dataPage.push(5);
      page = 1;

      // console.log(nilaidata)
    }
  }

  console.log(data);
  let table = document.getElementById('tbody');
  for (let i = 0; i < 5; i++) {
    load.remove();
    table.innerHTML += `<tr style = "font-weight: bold;">
                    <th scope="row">${i + 1}</th>
                    <td>${data[i]['username']}</td>
                    <td>${data[i]['score']}</td>
                   </tr>`;
  }

  for (let i = 1; i - 1 < dataPage.length; i++) {
    halaman.innerHTML += `<button id="page${i}" type="button" class="mx-3 "  >${i}</button> |`;
    console.log(`ini data saya :  ${i}`);
  }

  for (let i = 1; i - 1 < dataPage.length; i++) {
    var elem = document.getElementById(`page${i}`);

    if (elem) {
      elem.addEventListener('click', function () {
        let a = dataPage.slice(0, i).reduce((a, b) => a + b, 0);
        table.innerHTML = '';
        console.log(`ngeklick event ke - ${i}dan ${a}`);
        // let table = document.getElementById('tbody');

        for (let i = a - 5; i < 0 + a; i++) {
          load.remove();
          table.innerHTML += `<tr style = "font-weight: bold;">
                        <th scope="row">${i + 1}</th>
                        <td>${data[i]['username']}</td>
                        <td>${data[i]['score']}</td>
                       </tr>`;
        }
      });
    }
  }
});

const submitButtom = document.querySelector('#submit');
const result = document.getElementById('result')

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

const postBMIdata = async () => {

    const username = document.getElementById('username').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
        result.innerHTML = "";
    const response = await postData('/check-bmi', {name: username, height, weight})
    console.log(response.details)
    const x = document.createElement("P");  
    const y = document.createElement("P");  
    x.setAttribute('id', 'result');
    y.setAttribute('id', 'result');
    const bmi = document.createTextNode(`BMI : ${response.details.bmi}`);
    const t = document.createTextNode(response.details.message);

    y.appendChild(bmi);
    x.appendChild(t);
    result.appendChild(y)
    result.appendChild(x)
}

submitButtom.addEventListener('click', () =>  postBMIdata())

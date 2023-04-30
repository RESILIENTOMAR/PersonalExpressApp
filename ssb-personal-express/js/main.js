
document.querySelector('button').addEventListener('click', characterInfo);

const outfit2Radio = document.querySelector('#outfit2-radio');
const outfit3Radio = document.querySelector('#outfit3-radio');
const characterOrigin = document.querySelector('#originGame');
const characterImg = document.querySelector('img');

function characterInfo() {
    const characterName = document.querySelector('input').value;
    const url = `http://localhost:8005/api/${characterName}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            document.querySelector('#name').innerText = data.name;
            characterOrigin.innerText = data.origin;
            document.querySelector('#homeWorld').innerText = data.homeWorld;
            characterImg.src = data.pic;

            outfit2Radio.addEventListener('click', () => {
                characterImg.src = data.outfit2;
            });

            outfit3Radio.addEventListener('click', () => {
                characterImg.src = data.outfit3;
            });
        })
//         .catch((err) => {
//             console.log(`error ${err}`);
//         });
// }

function updateCharacterData(characterName, newCharacterData) {
    const url = `http://localhost:8005/api/${characterName}`;
  
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCharacterData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
}
}

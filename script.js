const myage = 16
let answer = 0

document.getElementById('buttonOn').addEventListener('click', buttonOn)

function buttonOn () {
    while (myage != answer) {
    answer = prompt('guess my age')
    if (answer == myage) {
      alert('correct')
      } else if (answer < myage) {
     alert('you guessed to little, please try again')
      } else if (answer > myage) {
    alert('you guessed to big, please try again')
    } else {
      }
    }
  }

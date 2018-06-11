document.addEventListener('DOMContentLoaded', () => {

  let buttonsArea = document.getElementById('buttons')
  let tableArea = document.getElementById('mult-table')
  generateButtons()
  generateRows(1)

  buttonsArea.addEventListener('click', (e)=> {
    if (e.target.className === 'multiplier') {
      tableArea.innerHTML = ''
      let num = parseInt(e.target.dataset.multiplier)
      generateRows(num)
    }
  })

  function generateButtons () {
    for (let i = 1; i <= 10; i++) {
      let newButton = document.createElement('button')
      newButton.className = 'multiplier'
      newButton.innerText = `Multiply by ${i}`
      newButton.dataset.multiplier = i
      // newButton.setAttribute('data-multiplier', i)
      buttonsArea.append(newButton)
    }
  }

  function generateRows(multiplier) {
    for (let i = 0; i < 10; i++) {
      let newRow = `<tr>
        <td> ${multiplier} x ${i} = ${multiplier*i} </td>
      </tr>`
      tableArea.innerHTML += newRow
    }
  }

})

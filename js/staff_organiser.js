document.addEventListener('DOMContentLoaded', () => {

  const newStaff = document.querySelector("#form-for-input")
  newStaff.addEventListener('submit', handleNewStaffInput)

  const deleteAll = document.querySelector("#delete-all")
  deleteAll.addEventListener('click', handleDeleteAll)

})

const makeAnHTMLLi = function(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}

  handleNewStaffInput = function(event) {

    event.preventDefault();

    const name = makeAnHTMLLi(`Name: ${event.target.name.value}`)

    const surname = makeAnHTMLLi(`Surname: ${event.target.surname.value}`)

    const title = makeAnHTMLLi(`Title: ${event.target.title.value}`)

    const salary = makeAnHTMLLi(`Salary: £ ${event.target.salary.value}`)

    const displayArea = document.querySelector("#results")

    const arrayOfDetails = [name, surname, title, salary]

    arrayOfDetails.forEach((el) => {
      
      return displayArea.appendChild(el)
    })

    event.target.reset()

  }

  handleDeleteAll = function() {
    const displayArea = document.querySelector("#results")
    displayArea.innerHTML = " "

  }

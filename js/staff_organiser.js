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

    const name = makeAnHTMLLi(`Name: ${event.target.name.value.charAt(0).toUpperCase() + event.target.name.value.slice(1)}`)

    const surname = makeAnHTMLLi(`Surname: ${event.target.surname.value.charAt(0).toUpperCase() + event.target.surname.value.slice(1)}`)

    const startingDate = makeAnHTMLLi(`Starting date: ${event.target.startingDate.value}`)

    const title = makeAnHTMLLi(`Title: ${event.target.title.value}`)

    const salary = makeAnHTMLLi(`Salary: £ ${event.target.salary.value}`)



    const displayArea = document.querySelector("#results")
    const displayManager = document.querySelector("#manager")
    const displayChef = document.querySelector("#chef")
    const displayFrontOfHouse = document.querySelector("#foh")


    const detailsNewStaff = [name, surname, startingDate, title, salary]




      if (detailsNewStaff[3].textContent == "Title: Manager") {
        detailsNewStaff.forEach((el) => {
          return displayManager.appendChild(el)
      })
    }
    else if (detailsNewStaff[3].textContent == "Title: Chef") {
      detailsNewStaff.forEach((el) => {
        return displayChef.appendChild(el)
      })
    }
    else  detailsNewStaff.forEach((el) => {
        return displayFrontOfHouse.appendChild(el)
      })




    event.target.reset()

  }

  handleDeleteAll = function() {
    const displayManager = document.querySelector("#manager")
    const displayChef = document.querySelector("#chef")
    const displayFrontOfHouse = document.querySelector("#foh")
    displayManager.innerHTML = " "
    displayChef.innerHTML = " "
    displayFrontOfHouse.innerHTML = " "

  }

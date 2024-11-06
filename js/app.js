const form = document. querySelector('form')
const row = document.querySelector('#employeeList')
const delBtn = document.createElement('button')
const col = document.createElement('td')

delBtn.textContent = 'Delete'

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const formData = new FormData(form)
    const firstname = formData.get('firstname')
    const lastname = formData.get('lastname')
    const email =  formData.get('email')
    const hireDate = formData.get('hire_date')
    const photo = formData.get('photo').name
    const employee = document.createElement('tr')
    console.log(photo)
    employee.innerHTML =`
        <td><img src="../images/${photo}"></td>
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${email}</td>
        <td>${hireDate}</td>

    `
    row.append(employee)
    col.append(delBtn)
    employee.append(col)
})

delBtn.addEventListener('click', () => {
    row.remove(employee)
})
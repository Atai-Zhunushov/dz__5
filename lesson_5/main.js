const input = document.getElementById('input')
const createButton = document.querySelector("#create_button")
const todolist = document.querySelector('#todo_list')

const createTodo = () => {
    if (!input.value.trim()) {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        let text = document.createElement('h3')
        const edit = document.createElement('button')
        const button2 = document.createElement('button')

        edit.setAttribute('class' , 'block_button1')
        button2.setAttribute('class' , 'block_button2')

        div.setAttribute('class', 'block_text')
        text.innerHTML = input.value
        edit.innerText = 'edit'
        button2.innerText = 'delete'
        edit.style.background = 'yellow'
        button2.style.background = 'green'

        div.append(text)
        todolist.append(div)
        div.append(edit)
        div.append(button2)
        input.value = ''
        button2.addEventListener('click' , () => {
            div.remove()
        })
        edit.addEventListener('click' , () => {
            text.innerHTML = prompt('')
        })
    }
    return input.value = ''


}
createButton.onclick = () => createTodo()
window.addEventListener('keydown' , (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
})
























// const createImg = document.getElementById('button')
// createImg.addEventListener('click' , () => {
//     const div = document.createElement('div')
//     div.style.width = '500px'
//     div.style.height = '500px'
//     div.style.backgroundImage = 'url(https://shailoo.gov.kg/media/Talanat/2022/06/01/img_8417.JPG)'
//     div.style.backgroundRepeat = 'no-repeat'
//     div.style.backgroundSize = 'cover'
//     div.style.marginTop = '20px'
//
//     document.body.append(div)
//
// })
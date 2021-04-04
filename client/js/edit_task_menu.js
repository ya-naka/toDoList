var content = document.getElementById('content')
var menu_task_edit = document.getElementById('menu-task-edit')
var tasks_list = document.querySelector('#tasks-list')
var tasks = tasks_list.getElementsByClassName('name')
var tasks_infos = tasks_list.getElementsByTagName('ul')

var lock_display_menu_task_edit = false

function displayTaskEditModal() {
    let width = window.innerWidth
    lock_display_menu_task_edit = true
    
    menu_task_edit.style.display = 'block'

    if(width > 1200)
	content.style.right = '400px'
}

function hideTaskEditModal() {
    let width = window.innerWidth
    lock_display_menu_task_edit = false

    content.style.right = '0px'
    menu_task_edit.style.display = 'none'

}

for(let i = 0; i < tasks.length; ++i) {
    let task = tasks[i]
    let task_info = tasks_infos[i]
    
    task.addEventListener('click', displayTaskEditModal)
    task_info.addEventListener('click', displayTaskEditModal)
}

window.addEventListener('resize', function() {
    hideTaskEditModal()
})

window.addEventListener('click', function(e) {
    let width = window.innerWidth

    if(!lock_display_menu_task_edit && e.target !== menu_task_edit && !menu_task_edit.contains(e.target))
	hideTaskEditModal()
    
    lock_display_menu_task_edit = false
})

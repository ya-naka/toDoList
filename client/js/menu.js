var open_menu_button = document.getElementById('open-menu-button')
var menu = document.getElementById('menu')
var menu_modal = document.getElementById('menu-modal')
var close_menu_button = document.getElementById('close-menu-button')

var lock_display_menu = false

function displayMenu() {
    lock_display_menu = true
    menu.style.display = 'block'
    menu_modal.style.display = 'block'
}

function closeMenu() {
    lock_display_menu = false
    menu.style.display = 'none'
    menu_modal.style.display = 'none'
}

function hideMenu() {
    let width = window.innerWidth
    lock_display_menu = false
    
    menu_modal.style.display = 'none'
    menu.style.display = (width <= 1200) ? 'none' : 'block'
}

open_menu_button.addEventListener('click', displayMenu)
close_menu_button.addEventListener('click', closeMenu)

window.addEventListener('resize', function() {
    hideMenu()
})

window.addEventListener('click', function(e) {
    let width = window.innerWidth

    if(!lock_display_menu && e.target !== menu && !menu.contains(e.target))
	hideMenu()
    
    lock_display_menu = false
})

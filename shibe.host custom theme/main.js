const shit = document.createElement('div')
shit.className = 'mt-10 w-full relative'

// Insert our div after shibe's own theme changer div
let the_whole_div_where_all_shit_is = document.getElementsByClassName('max-w-4xl mx-auto')[0]
the_whole_div_where_all_shit_is.insertBefore(shit, document.getElementsByClassName('mt-10 w-full relative')[0].nextSibling)

// add title
const custom_title = document.createElement('h2')
custom_title.className = "text-2xl text-center mb-4 font-bold"
custom_title.innerHTML = 'Custom theme'
shit.append(custom_title)
shit.style.display = 'none'

// add box
const custom_theme_div = document.createElement('div')
custom_theme_div.className = 'bg-base-200 p-4 rounded-2xl shadow-xl'

shit.append(custom_theme_div)

const theme_dropdown = document.getElementById('theme')

const theme_dropdown_custom_element = document.createElement('option')
theme_dropdown_custom_element.value = 'custom'
theme_dropdown_custom_element.innerHTML = 'custom'

theme_dropdown.appendChild(theme_dropdown_custom_element)

theme_dropdown.addEventListener('change', function() {
    if (theme_dropdown.value == 'custom') {
        shit.style.display = 'block'
    } else {
        shit.style.display = 'none'
    }
})

// setup end


// Dropdown options
// dropdown menu for pages
let newdropdown = document.createElement('select')
newdropdown.className = 'w-full select select-bordered'
custom_theme_div.append(newdropdown)

// Home page option
let home_option = document.createElement('option')
home_option.value = 'home_option'
home_option.innerText = 'Home'
newdropdown.append(home_option)

// Uploads page option
let uploads_option = document.createElement('option')
uploads_option.value = 'uploads_option'
uploads_option.innerText = 'Uploads'
newdropdown.append(uploads_option)

// About page option
let about_option = document.createElement('option')
about_option.value = 'about_option'
about_option.innerText = 'About'
newdropdown.append(about_option)

// About page option
let settings_option = document.createElement('option')
settings_option.value = 'settings_option'
settings_option.innerText = 'Settings'
newdropdown.append(settings_option)

// About page option
let upload_option = document.createElement('option')
upload_option.value = 'upload_option'
upload_option.innerText = 'Upload'
newdropdown.append(upload_option)

// About page option
let general_option = document.createElement('option')
general_option.value = 'general_option'
general_option.innerText = 'General'
newdropdown.append(general_option)
// dropdown options end


// Div for each option
let home_option_div = document.createElement('div')
home_option_div.id = 'home_option_div'
home_option_div.style.display = 'block'
custom_theme_div.append(home_option_div)

let uploads_option_div = document.createElement('div')
uploads_option_div.id = 'uploads_option_div'
uploads_option_div.style.display = 'block'
custom_theme_div.append(uploads_option_div)

let about_option_div = document.createElement('div')
about_option_div.id = 'about_option_div'
about_option_div.style.display = 'block'
custom_theme_div.append(about_option_div)

let settings_option_div = document.createElement('div')
settings_option_div.id = 'settings_option_div'
settings_option_div.style.display = 'block'
custom_theme_div.append(settings_option_div)

let upload_option_div = document.createElement('div')
upload_option_div.id = 'upload_option_div'
upload_option_div.style.display = 'block'
custom_theme_div.append(upload_option_div)

let general_option_div = document.createElement('div')
about_option_div.id = 'general_option_div'
general_option_div.style.display = 'block'
custom_theme_div.append(general_option_div)
// Divs for each option end

// Help text
let small_help_text = document.createElement('p')
small_help_text.className = 'text-xs mt-2 text-center'
small_help_text.innerText = 'Change your custom theme colors. Use the dropdown to select a specific tab.'
custom_theme_div.append(small_help_text)

// function to create elements faster (text & color)
let custom_elements = []
function a(parent, innerHTML, target_elem_color, target_elem_bg) {
    custom_elements[innerHTML] = []
    custom_elements[innerHTML]['element'] = document.createElement('label')
    custom_elements[innerHTML]['element'].innerHTML = innerHTML
    
    custom_elements[innerHTML]['color'] = document.createElement('input')
    custom_elements[innerHTML]['color'].type = 'color'

    custom_elements[innerHTML]['color'].addEventListener('change', function() {
        if (target_elem_color) {
            target_elem_color.style.color = custom_elements[innerHTML]['color'].value
        }

        if (target_elem_bg) {
            target_elem_bg.style.backgroundColor = custom_elements[innerHTML]['color'].value
        }
    })

    parent.append(custom_elements[innerHTML]['element'])
    parent.append(custom_elements[innerHTML]['color'])
}

// header bg
a(header_options_div, 'Header background ', undefined, document.getElementsByClassName('navbar mb-2 flex justify-between shadow-lg bg-neutral text-neutral-content')[0])
// header text
a(header_options_div, ' Header text ', document.getElementsByClassName('navbar mb-2 flex justify-between shadow-lg bg-neutral text-neutral-content')[0], undefined)

// handle visibility of shit
newdropdown.addEventListener('change', function() {
    home_option_div.style.display = 'none'
    uploads_option_div.style.display = 'none'
    about_option_div.style.display = 'none'
    settings_option_div.style.display = 'none'
    upload_option_div.style.display = 'none'
    general_option_div.style.display = 'none'
    
    
    if (newdropdown.value == 'home_option') {
        home_option_div.style.display = 'block'
    } else if (newdropdown.value == 'uploads_option') {
        uploads_option_div.style.display = 'block'
    } else if (newdropdown.value == 'about_option') {
        about_option_div.style.display = 'block'
    } else if (newdropdown.value == 'settings_option') {
        settings_option_div.style.display = 'block'
    } else if (newdropdown.value == 'upload_option') {
        upload_option_div.style.display = 'block'
    } else if (newdropdown.value == 'general_option') {
        general_option_div.style.display = 'block'
    }
})

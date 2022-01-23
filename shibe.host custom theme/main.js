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

let newdropdown = document.createElement('select')
newdropdown.className = 'w-full select select-bordered'
custom_theme_div.append(newdropdown)

let header_option = document.createElement('option')
header_option.value = 'Header'
header_option.innerText = 'Header'
newdropdown.append(header_option)

let body_option = document.createElement('option')
body_option.value = 'Body'
body_option.innerText = 'Body'
newdropdown.append(body_option)

let header_options_div = document.createElement('div')
header_options_div.id = 'header_options'
header_options_div.style.display = 'block'
custom_theme_div.append(header_options_div)

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

a(header_options_div, 'Header background ', undefined, document.getElementsByClassName('navbar mb-2 flex justify-between shadow-lg bg-neutral text-neutral-content')[0])

newdropdown.addEventListener('change', function() {
    header_options_div.style.display = 'none'
    if (newdropdown.value == 'Header') {
        header_options_div.style.display = 'block'
    }
})

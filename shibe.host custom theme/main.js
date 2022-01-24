// This code COULD be optimised alot but fuck that we're not optimizing shit because we're a good dev

let theme_selected_color_is_custom = true
let init = false

console.log('WTF')

custom_colors = {
    'home': {
        'title' : '#ffffff',
        'subtitle' : '#ffffff',
        'stat_text' : '#ffffff',
        'stat' : '#ffffff',
    },
    
    'uploads' : {

    },

    'about' : {

    },

    'settings' : {

    },

    'upload' : {

    },

    'general' : {

    },
}

setInterval(function() {
    if (window.location == 'https://dashboard.shibe.host/settings') {
        if (document.querySelector('[aria-selected="true"]').id != document.getElementsByClassName('svelte-tabs__tab svelte-bcjkd5')[1].id) { init = false
; return }
        if (!init && document.querySelector('[aria-selected="true"]').id == document.getElementsByClassName('svelte-tabs__tab svelte-bcjkd5')[1].id) {
            init = true
            console.log('que pasa hoblas')
            const shit = document.createElement('div')
            shit.className = 'mt-10 w-full relative'

            const theme_dropdown = document.getElementById('theme')

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

            const theme_dropdown_custom_element = document.createElement('option')
            theme_dropdown_custom_element.value = 'custom'
            theme_dropdown_custom_element.innerHTML = 'custom'

            theme_dropdown.appendChild(theme_dropdown_custom_element)

            if (theme_selected_color_is_custom) { 
                theme_dropdown.value = 'custom'
                if (theme_dropdown.value == 'custom') {
                    shit.style.display = 'block'
                    theme_selected_color_is_custom = true
                } else {
                    shit.style.display = 'none'
                    theme_selected_color_is_custom = false
                } 
            }

            theme_dropdown.addEventListener('change', function() {
                if (theme_dropdown.value == 'custom') {
                    shit.style.display = 'block'
                    theme_selected_color_is_custom = true
                } else {
                    shit.style.display = 'none'
                    theme_selected_color_is_custom = false
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
            // Visibility handler end

            // Help text
            let small_help_text = document.createElement('p')
            small_help_text.className = 'text-xs mt-2 text-center'
            small_help_text.innerText = 'Change your custom theme colors. Use the dropdown to select a specific tab.'
            custom_theme_div.append(small_help_text)
            // Help text end


            // function to create elements faster (text & color)
            let custom_elements = []
            function create_elem(parent, innerHTML) {
                custom_elements[innerHTML] = []
                custom_elements[innerHTML]['element'] = document.createElement('label')
                custom_elements[innerHTML]['element'].innerText = innerHTML

                custom_elements[innerHTML]['color'] = document.createElement('input')
                custom_elements[innerHTML]['color'].type = 'color'
                custom_elements[innerHTML]['color'].style = 'right: 5%; position: absolute; transform: translate(0%, 3%)'

                parent.append(custom_elements[innerHTML]['element'])
                parent.append(custom_elements[innerHTML]['color'])
            }

            create_elem(home_option_div, 'Home title color ', document.getElementsByClassName('text-3xl font-bold mb-2 text-center')[0], undefined)

            create_elem(home_option_div, '\nHome subtitle color ', document.getElementsByClassName('text-gray-600 text-center mb-5')[0], undefined)

            create_elem(home_option_div, '\nHome stat text color ', document.getElementsByClassName('stat-title'), undefined)

            create_elem(home_option_div, '\nHome stat color ', document.getElementsByClassName('stat-value'), undefined)
            

            custom_elements['Home title color ']['color'].value = custom_colors['home']["title"]
            custom_elements['\nHome subtitle color ']['color'].value = custom_colors['home']["subtitle"]
            custom_elements['\nHome stat text color ']['color'].value = custom_colors['home']["stat_text"]
            custom_elements['\nHome stat color ']['color'].value = custom_colors['home']["stat"]


            custom_elements['Home title color ']['color'].addEventListener('change', function() {
                custom_colors['home']["title"] = custom_elements['Home title color ']['color'].value
            })

            custom_elements['\nHome subtitle color ']['color'].addEventListener('change', function() {
                custom_colors['home']["subtitle"] = custom_elements['\nHome subtitle color ']['color'].value
            })

            custom_elements['\nHome stat text color ']['color'].addEventListener('change', function() {
                custom_colors['home']["stat_text"] = custom_elements['\nHome stat text color ']['color'].value
            })

            custom_elements['\nHome stat color ']['color'].addEventListener('change', function() {
                custom_colors['home']["stat"] = custom_elements['\nHome stat color ']['color'].value
            })
        }
    } 
    
    if (theme_selected_color_is_custom) {
        if (window.location == 'https://dashboard.shibe.host/') {
            document.getElementsByClassName('text-3xl font-bold mb-2 text-center')[0].style.color = custom_colors['home']["title"]
            document.getElementsByClassName('text-gray-600 text-center mb-5')[0].style.color = custom_colors['home']["subtitle"]
            let stat_title_elems = document.getElementsByClassName('stat-title')
            for (i = 0; i < stat_title_elems.length; i++) {
                stat_title_elems[i].style.color = custom_colors['home']["stat_text"]
            }
            let stat_value_elements = document.getElementsByClassName('stat-value')
            for (i = 0; i < stat_value_elements.length; i++) {
                stat_value_elements[i].style.color = custom_colors['home']["stat"]
            }
        }
    }
}, 1)

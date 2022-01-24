// This code COULD be optimised alot but fuck that we're not optimizing shit because we're a good dev

// info stuff
console.log('> khey\'s custom theme extension')
console.log('> last update: 25.01.2022')
console.log('> enjoy ur custom theme since mr \'freebo\' is lazy')

let theme_selected_color_is_custom = true
let init = false
let updated_uploads_tab = false
let custom_elements = []

setInterval(function() {
    if (window.location == 'https://dashboard.shibe.host/settings') {
        if (document.querySelector('[aria-selected="true"]').id != document.getElementsByClassName('svelte-tabs__tab svelte-bcjkd5')[1].id) { init = false
; return }
        if (!init && document.querySelector('[aria-selected="true"]').id == document.getElementsByClassName('svelte-tabs__tab svelte-bcjkd5')[1].id) {
            init = true
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

            // General page option
            let general_option = document.createElement('option')
            general_option.value = 'general_option'
            general_option.innerText = 'General'
            newdropdown.append(general_option)

            // Home page option
            let home_option = document.createElement('option')
            home_option.value = 'home_option'
            home_option.innerText = 'Home'
            newdropdown.append(home_option)

            // About page option
            let about_option = document.createElement('option')
            about_option.value = 'about_option'
            about_option.innerText = 'About'
            newdropdown.append(about_option)

            // Uploads page option
            let uploads_option = document.createElement('option')
            uploads_option.value = 'uploads_option'
            uploads_option.innerText = 'Uploads'
            newdropdown.append(uploads_option)

            // Upload page option
            let upload_option = document.createElement('option')
            upload_option.value = 'upload_option'
            upload_option.innerText = 'Upload'
            newdropdown.append(upload_option)

            // Settings page option
            let settings_option = document.createElement('option')
            settings_option.value = 'settings_option'
            settings_option.innerText = 'Settings'
            newdropdown.append(settings_option)
            // dropdown options end


            // Div for each option
            let home_option_div = document.createElement('div')
            home_option_div.id = 'home_option_div'
            home_option_div.style = 'display: block; padding-top: 5px'
            custom_theme_div.append(home_option_div)

            let uploads_option_div = document.createElement('div')
            uploads_option_div.id = 'uploads_option_div'
            uploads_option_div.style = 'display: block; padding-top: 5px'
            custom_theme_div.append(uploads_option_div)

            let about_option_div = document.createElement('div')
            about_option_div.id = 'about_option_div'
            about_option_div.style = 'display: block; padding-top: 5px'
            custom_theme_div.append(about_option_div)

            let settings_option_div = document.createElement('div')
            settings_option_div.id = 'settings_option_div'
            settings_option_div.style = 'display: block; padding-top: 5px'
            custom_theme_div.append(settings_option_div)

            let upload_option_div = document.createElement('div')
            upload_option_div.id = 'upload_option_div'
            upload_option_div.style = 'display: block; padding-top: 5px'
            custom_theme_div.append(upload_option_div)

            let general_option_div = document.createElement('div')
            about_option_div.id = 'general_option_div'
            general_option_div.style = 'display: block; padding-top: 5px'
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

            // init visibility
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
            // Visibility handler end

            // Help text
            let small_help_text = document.createElement('p')
            small_help_text.className = 'text-xs mt-2 text-center'
            small_help_text.innerText = 'Change your custom theme colors. Use the dropdown to select a specific tab. (click me to export config)'
            custom_theme_div.append(small_help_text)
            small_help_text.addEventListener('click', function() {
                let final = 'custom_colors = {\n'
                for (let key in custom_colors) {
                    final += '    \'' + key + '\': {\n'
                    for (key2 in custom_colors[key]) {
                        final += '        \'' + key2 + '\' : \'' + custom_colors[key][key2] + '\',\n'
                    }
                    final += '    },'
                }
                final += '\n}'
                console.log(final)
                alert('Check developer console (f12)')
            })
            
            // Help text end


            // function to create elements faster (text & color)
            function create_elem(parent, innerHTML, corresponding_subtab, subtab_subtext) {
                // create the name of the color stuff
                custom_elements[corresponding_subtab] = custom_elements[corresponding_subtab] || []
                custom_elements[corresponding_subtab][subtab_subtext + '_text'] = document.createElement('label')
                custom_elements[corresponding_subtab][subtab_subtext + '_text'].innerText = innerHTML

                // color input
                custom_elements[corresponding_subtab][subtab_subtext] = document.createElement('input')
                custom_elements[corresponding_subtab][subtab_subtext].type = 'color'
                custom_elements[corresponding_subtab][subtab_subtext].style = 'right: 5%; position: absolute; transform: translate(0%, 3%)'
                // set default color (all are '#ffffff' by default)
                custom_elements[corresponding_subtab][subtab_subtext].value = custom_colors[corresponding_subtab][subtab_subtext]
                
                // append element to corresponding div (ie. custom home option div, custom about page div etc)
                parent.append(custom_elements[corresponding_subtab][subtab_subtext + '_text'])
                parent.append(custom_elements[corresponding_subtab][subtab_subtext])

                // create on-change event listener to set the corresponding custom_color element to our own input color value
                custom_elements[corresponding_subtab][subtab_subtext].addEventListener('change', function() {
                    custom_colors[corresponding_subtab][subtab_subtext] = custom_elements[corresponding_subtab][subtab_subtext].value
                })
            }
            
            // General theme options
            create_elem(general_option_div, 'Header color', 'general', 'header_color')
            create_elem(general_option_div, '\nHeader text color', 'general', 'header_text_color')
            create_elem(general_option_div, '\nBackground color', 'general', 'background')


            // Home theme options
            create_elem(home_option_div, 'Title color', 'home', 'title')
            create_elem(home_option_div, '\nSubtitle color', 'home', 'subtitle')
            create_elem(home_option_div, '\nStat text color', 'home', 'stattext')
            create_elem(home_option_div, '\nStat color', 'home', 'stat')

            create_elem(about_option_div, 'Question color', 'about', 'question')
            create_elem(about_option_div, '\nAnswer color', 'about', 'answer')

            // Upload theme options
            create_elem(upload_option_div, 'Dropzone color', 'upload', 'dropzone')
            create_elem(upload_option_div, '\nDropzone text', 'upload', 'dropzone-text')
            create_elem(upload_option_div, '\nProgress bar', 'upload', 'progressbar')

            // Uploads theme options
            create_elem(uploads_option_div, 'Image tab', 'uploads', 'image_tab')
            create_elem(uploads_option_div, '\nImage border', 'uploads', 'image_border')
            create_elem(uploads_option_div, '\nFile name', 'uploads', 'file-name')
            create_elem(uploads_option_div, '\nFile date', 'uploads', 'file-date')
            create_elem(uploads_option_div, '\nCopy link', 'uploads', 'copy_link')
            create_elem(uploads_option_div, '\nCopy link hover (hover)', 'uploads', 'copy_link_hover')
            create_elem(uploads_option_div, '\nDelete file', 'uploads', 'delete_file')
            create_elem(uploads_option_div, '\nDelete file (hover)', 'uploads', 'delete_file_hover')
        }
    } 
    
    if (theme_selected_color_is_custom) {
        if (window.location == 'https://dashboard.shibe.host/') {
            // Title color
            document.getElementsByClassName('text-3xl font-bold mb-2 text-center')[0].style.color = custom_colors['home']["title"]

            // Subitle color
            document.getElementsByClassName('text-gray-600 text-center mb-5')[0].style.color = custom_colors['home']["subtitle"]

            // Stat text color
            let stat_title_elems = document.getElementsByClassName('stat-title')
            for (i = 0; i < stat_title_elems.length; i++) {
                stat_title_elems[i].style.color = custom_colors['home']["stattext"]
            }

            // Stat color
            let stat_value_elements = document.getElementsByClassName('stat-value')
            for (i = 0; i < stat_value_elements.length; i++) {
                stat_value_elements[i].style.color = custom_colors['home']["stat"]
            }

        } else if (window.location == 'https://dashboard.shibe.host/about') {
            // Question colors
            let about_questions = document.getElementsByClassName('text-xl')
            for (i = 0; i < about_questions.length; i++) {
                about_questions[i].style.color = custom_colors['about']["question"]
            }

            let about_answers = document.getElementsByClassName('text-gray-500')
            for (i = 0; i < about_answers.length; i++) {
                about_answers[i].style.color = custom_colors['about']["answer"]
            }
        } else if (window.location == 'https://dashboard.shibe.host/uploads') {
            let upload_tabs = document.getElementsByClassName('bg-neutral p-4 md:p-6')
            for (i=0; i < upload_tabs.length; i++) {
                upload_tabs[i].style.backgroundColor = custom_colors['uploads']['image_tab']
            }

            let image_borders = document.getElementsByClassName('this element does not exist')
            for (i=0; i < image_borders.length; i++) {
                image_borders[i].style.backgroundColor = custom_colors['uploads']['image_border']
            }

            let file_names = document.getElementsByClassName('font-semibold mb-2 text-blue-500 text-l leading-tight break-words sm:leading-normal')
            for (i=0; i < file_names.length; i++) {
                file_names[i].style.color = custom_colors['uploads']['file-name']
            }

            let file_dates = document.getElementsByClassName('leading-none text-white')
            for (i=0; i < file_dates.length; i++) {
                file_dates[i].style.color = custom_colors['uploads']['file-date']
            }

            let copy_links = document.getElementsByClassName('btn text-sm bg-blue-600 hover:bg-blue-800 text-white')
            for (i=0; i < copy_links.length; i++) {
                copy_links[i].style.backgroundColor = custom_colors['uploads']['copy_link']
                // create shit for hover
            }

            let delete_files = document.getElementsByClassName('mt-4 btn text-sm bg-red-600 text-white hover:bg-red-800')
            for (i=0; i < delete_files.length; i++) {
                delete_files[i].style.backgroundColor = custom_colors['uploads']['delete_file']
                // create shit for hover
            }
        } else if (window.location == 'https://dashboard.shibe.host/upload') {
            document.getElementById('uploadZone').style.backgroundColor = custom_colors['upload']['dropzone']
            document.getElementsByClassName('dz-button')[0].style.color = custom_colors['upload']['dropzone-text']
            for (i=0; i < document.getElementsByClassName('dz-upload').length; i++) {
                document.getElementsByClassName('dz-upload')[i].style.color = custom_colors['upload']['progressbar']
            }
        } else if (window.location == 'https://dashboard.shibe.host/settings') {

        }

        // General theme shit
        // Header bg color
        document.getElementsByClassName('navbar mb-2 flex justify-between shadow-lg bg-neutral text-neutral-content')[0].style.backgroundColor = custom_colors['general']['header_color']
        let header_text_elems = document.getElementsByClassName('btn btn-ghost')
        for (i = 0; i < header_text_elems.length; i++) {
            header_text_elems[i].style.color = custom_colors['general']['header_text_color']
        }
        document.getElementsByClassName('text-lg font-bold')[0].style.color = custom_colors['general']['header_text_color']
        document.getElementsByClassName('svelte-165ybav')[0].style.color = custom_colors['general']['header_text_color']
        document.body.style.backgroundColor = custom_colors['general']['background']
    }
}, 1) 

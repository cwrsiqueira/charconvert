function convertStringToSlug (string) {
    string = string.replace(/^\s+|\s+$/g, '')
    string = string.toLowerCase()
  
    const from = 'àáäâãèéëêìíïîòóöôùúüûñç·/_,:;'
    const to = 'aaaaaeeeeiiiioooouuuunc------'
  
    for (let i = 0, l = from.length; i < l; i++) {
      string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }
  
    string = string.replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
  
    return string
}

function converter(selection) {
    // document.querySelector('#convertedText').classList.remove('centralizar')
    let text = document.querySelector('#text').value;
    if(!localStorage.getItem('initial_text')) {
        localStorage.setItem('initial_text', text);
    }

    switch (selection) {
        case 'restart':
            text = localStorage.getItem('initial_text')
            document.querySelector('#text').value = text
            break;
        case 'toUpperCase':
            text = localStorage.getItem('initial_text')
            document.querySelector('#text').value = text.toUpperCase()
            break;
        case 'toLowerCase':
            text = localStorage.getItem('initial_text')
            document.querySelector('#text').value = text.toLowerCase()
            break;
        case 'capitalize':
            text = localStorage.getItem('initial_text')
            let textToLowerCase = document.querySelector('#text').value = text.toLowerCase()
            document.querySelector('#text').value = textToLowerCase.charAt(0).toUpperCase() + textToLowerCase.slice(1)
            break;
        case 'altCapitalize':
            text = localStorage.getItem('initial_text')
            document.querySelector('#text').value = text.charAt(0).toUpperCase() + text.slice(1)
            break;
        case 'titleCase':
            text = localStorage.getItem('initial_text')
            document.querySelector('#text').value = 
                text.toLowerCase()
                .split(' ')
                .map((word) => {
                    return word[0].toUpperCase() + word.slice(1);
                }).join(' ')
            break;
        case 'inverseTitleCase':
            text = localStorage.getItem('initial_text')
            document.querySelector('#text').value = 
                text.toUpperCase()
                .split(' ')
                .map((word) => {
                    return word[0].toLowerCase() + word.slice(1);
                }).join(' ')
            break;
        case 'toggleLowerUpperCase':
            text = localStorage.getItem('initial_text')
            document.querySelector('#text').value = 
                text.split(' ')
                .map((word) => {
                    return word.split('')
                    .map((letter, index) => {
                        if(index % 2 == 0) {
                            return letter.toLowerCase()
                        } else {
                            return letter.toUpperCase()
                        }
                    }).join('')
                }).join(' ')
            break;
        case 'toggleUpperLowerCase':
            text = localStorage.getItem('initial_text')
            document.querySelector('#text').value = 
                text.split(' ')
                .map((word) => {
                    return word.split('')
                    .map((letter, index) => {
                        if(index % 2 == 0) {
                            return letter.toUpperCase()
                        } else {
                            return letter.toLowerCase()
                        }
                    }).join('')
                }).join(' ')
            break;
        case 'slug':
            text = localStorage.getItem('initial_text')
            document.querySelector('#text').value = convertStringToSlug(text)
            break;
        case 'clean':
            localStorage.clear();
            document.querySelector('#text').value = ''
            break;
        default:
            document.querySelector('#text').value = 'Opção inválida!'
            break;
    }
}
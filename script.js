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
    let text = document.querySelector('#text').value

    switch (selection) {
        case 'toUpperCase':
            document.querySelector('#convertedText').innerHTML = text.toUpperCase()
            break;
        case 'toLowerCase':
            document.querySelector('#convertedText').innerHTML = text.toLowerCase()
            break;
        case 'capitalize':
            let textToLowerCase = document.querySelector('#convertedText').innerHTML = text.toLowerCase()
            document.querySelector('#convertedText').innerHTML = textToLowerCase.charAt(0).toUpperCase() + textToLowerCase.slice(1)
            break;
        case 'altCapitalize':
            document.querySelector('#convertedText').innerHTML = text.charAt(0).toUpperCase() + text.slice(1)
            break;
        case 'titleCase':
            document.querySelector('#convertedText').innerHTML = 
                text.toLowerCase()
                .split(' ')
                .map((word) => {
                    return word[0].toUpperCase() + word.slice(1);
                }).join(' ')
            break;
        case 'inverseTitleCase':
            document.querySelector('#convertedText').innerHTML = 
                text.toUpperCase()
                .split(' ')
                .map((word) => {
                    return word[0].toLowerCase() + word.slice(1);
                }).join(' ')
            break;
        case 'toggleLowerUpperCase':
            document.querySelector('#convertedText').innerHTML = 
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
            document.querySelector('#convertedText').innerHTML = 
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
            document.querySelector('#convertedText').innerHTML = convertStringToSlug(text)
            break;
        default:
            document.querySelector('#convertedText').innerHTML = 'Opção inválida!'
            break;
    }
}
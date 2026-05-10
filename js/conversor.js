function convertStringToSlug(string) {
    string = string.replace(/^\s+|\s+$/g, '');
    string = string.toLowerCase();
    const from = 'àáäâãèéëêìíïîòóöôùúüûñç·/_,:;';
    const to   = 'aaaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
        string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    return string
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

const textarea = document.getElementById('text');

function updateCounter() {
    const text = textarea.value;
    document.getElementById('cnt-letters').textContent = (text.match(/[a-zA-ZÀ-ÿ]/g) || []).length;
    document.getElementById('cnt-words').textContent = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    document.getElementById('cnt-chars').textContent = text.replace(/\s/g, '').length;
    document.getElementById('cnt-chars-space').textContent = text.length;
}

textarea.addEventListener('input', updateCounter);

function converter(selection) {
    if (selection !== 'clean' && selection !== 'restart') {
        if (!localStorage.getItem('initial_text')) {
            localStorage.setItem('initial_text', textarea.value);
        }
    }
    const initial = localStorage.getItem('initial_text') || '';

    switch (selection) {
        case 'restart':
            textarea.value = initial;
            break;
        case 'toUpperCase':
            textarea.value = initial.toUpperCase();
            break;
        case 'toLowerCase':
            textarea.value = initial.toLowerCase();
            break;
        case 'capitalize': {
            const t = initial.toLowerCase();
            textarea.value = t.charAt(0).toUpperCase() + t.slice(1);
            break;
        }
        case 'altCapitalize':
            textarea.value = initial.charAt(0).toUpperCase() + initial.slice(1);
            break;
        case 'titleCase':
            textarea.value = initial
                .toLowerCase()
                .split(' ')
                .map(w => w ? w[0].toUpperCase() + w.slice(1) : w)
                .join(' ');
            break;
        case 'inverseTitleCase':
            textarea.value = initial
                .toUpperCase()
                .split(' ')
                .map(w => w ? w[0].toLowerCase() + w.slice(1) : w)
                .join(' ');
            break;
        case 'toggleLowerUpperCase':
            textarea.value = initial
                .split(' ')
                .map(w => w.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join(''))
                .join(' ');
            break;
        case 'toggleUpperLowerCase':
            textarea.value = initial
                .split(' ')
                .map(w => w.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join(''))
                .join(' ');
            break;
        case 'slug':
            textarea.value = convertStringToSlug(initial);
            break;
        case 'clean':
            localStorage.clear();
            textarea.value = '';
            document.querySelectorAll('input[name="mode"]').forEach(r => r.checked = false);
            break;
    }
    updateCounter();
}

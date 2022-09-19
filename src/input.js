export const createInput = (options) => {
    const input = document.createElement('input');
    input.className = 'tg-input';
    input.type = "text";

    if(typeof options['tagsPlaceholder'] !== 'undefined'
        && options['tagsPlaceholder'].length) {
        input.placeholder = options.tagsPlaceholder;
    }

    return input;
};

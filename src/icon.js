const closeTag = (tag) => {
    tag.dispatchEvent(new CustomEvent(
        'removedTag',
        {
            bubbles: true,
            detail: {
                tagValue: tag.dataset.tagValue
            }
        }
    ));
    tag.remove();
}

export const createCloseIcon = (tag) => {
    const i = document.createElement('i');
    i.className = 'material-symbols-outlined';
    i.innerHTML = 'close';
    i.addEventListener('click', () => closeTag(tag));

    return i;
};



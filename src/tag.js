import { createCloseIcon } from "./icon";

export const createTag = (text) => {
    const tag = document.createElement('span');
    tag.className = 'tg-tag';
    tag.innerHTML = text;
    tag.dataset["tagValue"] = text;
    tag.insertAdjacentElement(
        'beforeend',
        createCloseIcon(tag)
    );

    return tag;
};

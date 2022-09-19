import { createTag } from "./tag";
import { createInput } from "./input";
import { createWrapper } from "./wrapper";

export const initializeEditor = (editor) => {
    const input = createInput();
    const wrapper = createWrapper();
    let tagsList = [];

    editor.className = 'tg-editor';
    editor.insertAdjacentElement('beforeend', input);
    editor.insertAdjacentElement('beforeend', wrapper);

    const dispatchUpdateTagsListEvent = () => {
        editor.dispatchEvent(new CustomEvent(
            'updateTagsList', {
            bubbles: true,
            detail: {
                tagsList: tagsList
            }
        }));
    }

    const isFinishKey = (key) => {
        const finishKeys = [
            188, // Comma
            13   // Enter
        ];
        return finishKeys.includes(key);
    }

    const extractText = () => {
        const html = input.value;
        input.value = '';
        return html.replace(',', '').trim();
    }

    const insertTag = (key) => {
        if (isFinishKey(key)) {
            const text = extractText();
            if (text.length) {
                tagsList.push(text);
                editor.dataset['tagsList'] = tagsList;
                wrapper.insertAdjacentElement('beforeend', createTag(text));
                dispatchUpdateTagsListEvent();
            }
        }
    };

    const removeTag = (e) => {
        const text = e.detail.tagValue;
        tagsList = tagsList.filter((value) => {
            return value !== text;
        });
        editor.dataset['tagsList'] = tagsList;
        dispatchUpdateTagsListEvent();
    }

    input.addEventListener('keyup', (e) => insertTag(e.keyCode));
    editor.addEventListener('removedTag', (e) => removeTag(e));
};

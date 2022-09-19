import { createTag } from "./tag";
import { createInput } from "./input";
import { createWrapper } from "./wrapper";

export const initializeEditor = (editor) => {
    // Loads the tag list defined in the data-tags-list attribute.
    const loadTagList = () => {
        if(typeof editor.dataset['tagsList'] !== 'undefined'
            && editor.dataset['tagsList'].length) {
            return editor.dataset['tagsList'].split(',');
        }
        return [];
    }

    // Inserts the loaded tags into the wrapper.
    const insertLoadedTags = () => {
        for (const tag of tagsList) {
            wrapper.insertAdjacentElement('beforeend', createTag(tag));
        }
    }

    // Dispatches the updateTagsList event.
    const dispatchUpdateTagsListEvent = () => {
        editor.dispatchEvent(new CustomEvent(
            'updateTagsList', 
            {
                bubbles: true,
                detail: {
                    tagsList: tagsList
                }
            }
        ));
    }

    // Checks whether a finish key has been pressed.
    const isFinishKey = (key) => {
        const finishKeys = [
            188, // Comma
            13   // Enter
        ];
        return finishKeys.includes(key);
    }

    // Extracts the tag text from input field.
    const extractText = () => {
        const html = input.value;
        input.value = '';
        return html.replace(',', '').trim();
    }

    // Inserts a new tag.
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

    // Removes an inserted tag.
    const removeTag = (e) => {
        const text = e.detail.tagValue;
        tagsList = tagsList.filter((value) => {
            return value !== text;
        });
        editor.dataset['tagsList'] = tagsList;
        dispatchUpdateTagsListEvent();
    }

    // Tag Editor initialization.
    const input = createInput(editor.dataset);
    const wrapper = createWrapper();
    let tagsList = loadTagList();

    editor.className = 'tg-editor';
    editor.dataset['tagsList'] = tagsList;
    editor.insertAdjacentElement('beforeend', input);
    editor.insertAdjacentElement('beforeend', wrapper);

    insertLoadedTags();
    
    input.addEventListener('keyup', (e) => insertTag(e.keyCode));
    editor.addEventListener('removedTag', (e) => removeTag(e));
};

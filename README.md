# tags-editor

A tiny tags editor written in vanilla JavaScript.

## Goal

Create a tiny, very simple and zero dependency library that enables a HTML element to be used as a tags editor in plain JavaScript.

## How to install

```
npm install tags-editor
```

or load the bundle file directly at the end of your HTML document.

```
<script src="https://unpkg.com/tags-editor/dist/bundle.js"></script>
```

## How to use

1. Reference the editor library in your HTML document.
2. Add a link tag in your HTML document `<head>` to load the [Material Symbols](https://fonts.google.com/icons) icon set:

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

3. Add a `data-tags-editor` attribute to the HTML element you want to transform into an editor.

## How to dynamically create an editor

Use the exported function `window.__tagsEditor.initializeEditor()` which take as the first argument the DOM element (usually a `<div>`) that you want to transform to an editor. Refer to the `/public/index.html` for an example.

## How to get the tags

Listen for the `updateTagsList` event on the editor HTML element.

```
document
  .querySelectorAll('[data-tags-editor]')
  .forEach(editor =>
    editor.addEventListener('updateTagsList', e => console.log(e.detail.tagsList)
  )
);
```

## How to get the removed tag

Listen for the `removeTag` event on the editor HTML element.

```
document
  .querySelectorAll('[data-tags-editor]')
  .forEach(editor =>
    editor.addEventListener('removeTag', e => console.log(e.detail.tagValue)
  )
);
```

## Supported browsers

Modern browser (Chrome, Firefox, Edge,...) are supported. Tags Editor doesn't work on Internet Explorer.

## Acknowledgments

Tags editor architecture is based on [Fabian Vilers's Tiny Editor project](https://github.com/fvilers/tiny-editor).
import { initializeEditor } from "./editor";
import "./style.css";

document.querySelectorAll("[data-tags-editor]").forEach(initializeEditor);

window.__tagsEditor = {
    initializeEditor
};

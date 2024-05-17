"use strict";
const tree = document.querySelector(".tree");
const treeItems = document.querySelectorAll(".tree li");
treeItems.forEach((treeItem)=>{
    const span = document.createElement("span");
    treeItem.prepend(span);
    span.append(span.nextSibling);
});
function slideItem(e) {
    e.preventDefault();
    if (e.target.tagName === "SPAN") {
        const list = e.target.nextSibling;
        if (list) list.hidden = !list.hidden;
    }
}
tree.addEventListener("click", slideItem);

//# sourceMappingURL=index.f75de5e1.js.map

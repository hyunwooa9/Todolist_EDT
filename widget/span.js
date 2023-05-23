export function createspan(contents) {
    var el = document.createElement("span");
    el.textContent = contents;
    
    return {
        el: el,
    };
}
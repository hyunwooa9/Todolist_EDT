export function createinput(option) {
  var el = document.createElement("input");
  el.type = "checkbox";
  el.checked = option.done;
  el.addEventListener("change", option.onChange);

  return {
    el: el,
  };
}

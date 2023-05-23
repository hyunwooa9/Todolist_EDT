import { createButton } from "./button";
import { createinput } from "./input";
import { createList } from "./list";
import { createspan } from "./span";

window.Widget = {
  button: createButton,
  list: createList,
  span: createspan,
  input: createinput,
  getControl: function () {},

};

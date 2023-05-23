var todolist = [];
var donelist = [];

var inputBtnEl = document.getElementById("todo-input");
var contentsEl = document.getElementById("todo-contents");

var containerEl = document.getElementById("container");

var inputBtnControl = Widget.button({
  label: "입력",
  onClick: function () {
    if (!contentsEl.value) {
      alert("할 일을 입력해 주세요");
      return;
    }
    todolist.push({
      id: crypto.randomUUID(),
      contents: contentsEl.value,
      done: false,
    });
    todolistControl.reload(todolist);

    contentsEl.value = "";
    contentsEl.focus();
  },
});
containerEl.insertBefore(inputBtnControl.el, contentsEl.nextSibling);

var todolistControl = Widget.list({
  datas: todolist,
  columns: [
    {
      render: function (data) {
        var inputBtnControl = Widget.input({
          done: data.done,
          onChange: function (e) {
            data.done = e.target.checked;
            if (data.done) {
              donelist.push(data);
            } else {
              donelist.splice(donelist.findIndex(item => item.id === data.id), 1);
            }
            todolistControl.reload(todolist);
            donelistControl.reload(donelist);
          },
        });

        return inputBtnControl.el;
      },
    },
    {
      render: function (data){
        var spanContrl = Widget.span(data.contents);
        return spanContrl.el;
      },
    },
    {
      render: function (data) {
        var delBtnContrl = Widget.button({
          label: "삭제",
          onClick: function () {
            todolist.splice(todolist.findIndex(item => item.id === data.id), 1);
            todolistControl.reload(todolist);
          },
        });
        return delBtnContrl.el;
      },
    },
  ],
});

containerEl.append(todolistControl.el);

var donelistControl = Widget.list({
  datas: donelist,
  columns: [
    {
      render: function (data) {
        var inputBtnControl = Widget.input({
          done: data.done,
          onChange: function (e) {
            data.done = e.target.checked;
            if (!data.done) {
              todolist.push(data);
            } else {
              todolist.splice(todolist.findIndex(item => item.id === data.id), 1);
            }
            todolistControl.reload(todolist);
            donelistControl.reload(donelist);
          },
        });

        return inputBtnControl.el;
      },
    },
    {
      render: function (data){
        var spanContrl = Widget.span(data.contents);
        return spanContrl.el;
      },
    },
    {
      render: function (data) {
        var delBtnContrl = Widget.button({
          label: "삭제",
          onClick: function () {
            donelist.splice(donelist.findIndex(item => item.id === data.id), 1);
            donelistControl.reload(donelist);
          },
        });
        return delBtnContrl.el;
      },
    },
  ],
});

containerEl.append(donelistControl.el);




// var todolist = [];
// var donelist = [];

// var inputBtnEl = document.getElementById("todo-input");
// var contentsEl = document.getElementById("todo-contents");

// var containerEl = document.getElementById("container");

// var inputBtnControl = Widget.button({
//   label: "입력",
//   onClick: function () {
//     if (!contentsEl.value) {
//       alert("할 일을 입력해 주세요");
//       return;
//     }

//     todolist.push({
//       id: crypto.randomUUID(),
//       contents: contentsEl.value,
//       done: false,
//     });
//     todolistControl.reload(todolist);

//     contentsEl.value = "";
//     contentsEl.focus();
//   },
// });
// containerEl.insertBefore(inputBtnControl.el, contentsEl.nextSibling);

// var todolistControl = Widget.list({
//   datas: todolist,
//   columns: [
//     {
//       render: function (data) {
//         var inputBtnControl = Widget.input({
//           done: data.done,
//           onChange: function (e) {
//             data.done = e.target.checked;
//             todolist[todolist.indexOf(data)] = data;
//             todolistControl.reload(todolist);
//           },
//         });

//         return inputBtnControl.el;
//       },
//     },
//     {
//       render: function (data){
//         var spanContrl = Widget.span(data.contents);
//         return spanContrl.el;
//       },
//     },
//     {
//       render: function (data) {
//         var delBtnContrl = Widget.button({
//           label: "삭제",
//           onClick: function () {
//             todolist.splice(todolist.indexOf(data), 1);
//             todolistControl.reload(todolist);
//           },
//         });
//         return delBtnContrl.el;
//       },
//     },
//   ],
// });

// containerEl.append(todolistControl.el);

// var donelistControl = Widget.list({
//     datas: donelist,
//     columns: [
//       {
//         render: function (data) {
//           var inputBtnControl = Widget.input({
//             done: data.done,
//             onChange: function (e) {
//               data.done = e.target.checked;
//               donelist[donelist.indexOf(data)] = data;
//               donelistControl.reload(donelist);
//             },
//           });
  
//           return inputBtnControl.el;
//         },
//       },
//       {
//         render: function (data){
//           var spanContrl = Widget.span(data.contents);
//           return spanContrl.el;
//         },
//       },
//       {
//         render: function (data) {
//           var delBtnContrl = Widget.button({
//             label: "삭제",
//             onClick: function () {
//               donelist.splice(donelist.indexOf(data), 1);
//               donelistControl.reload(donelist);
//             },
//           });
//           return delBtnContrl.el;
//         },
//       },
//     ],
//   });
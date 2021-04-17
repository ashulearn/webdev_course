$(function() {
let newtodo = $('#newtodo');
let addtodo = $('#addtodo');
let todolist =$('#todolist');
 
addtodo.click(function () {
    let data = newtodo.val();
    // console.log(data);
    $.post('/todos/',{
        task:data
    },
    function (data) {
        todolist.empty();
        for(todos of data)
        {
            todolist.append('<li>'+todos.task+'</li>');
        }
    });
})


})
let ul=$('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpnewTask = $('#inpnewTask')

function addTask() {
    let ListItem = $('<li>', {
        'class':"list-group-item",
        text: inpnewTask.val()
    })

    ListItem.click(()=> {
        ListItem.toggleClass('done')
    })
    ul.append(ListItem)
    inpnewTask.val("")
}
btnAdd.click( ()=> {
    addTask()
})

inpnewTask.keypress((e) => {
    if(e.charCode == 13)
    {
        addTask()
    }
})
btnClear.click( ()=> {
    inpnewTask.val("")
})
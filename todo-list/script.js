let ul=$('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')
let inpnewTask = $('#inpnewTask')

function addTask() {
    let ListItem = $('<li>', {
        'class':"list-group-item",
        text: inpnewTask.val()
    })
    if(inpnewTask.val()=="")
    {
        alert("enter some task")
        return
    }

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
function clearDone() {
    $('#ulTasks .done').remove()
}
btnCleanup.click(clearDone)
function sortItem() {
    $('#ulTasks .done').appendTo(ul)
}
btnSort.click(sortItem)

function toggleInputButtons (valIsEmpty) {
    
}

inpnewTask.on('input',()=> {
    toggleInputButtons(inpnewTask.val()=='')
})
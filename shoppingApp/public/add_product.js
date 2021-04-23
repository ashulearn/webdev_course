function addProduct(name,manf,price,done) {
    $.post('/api/products', {
        name : name,
        manufacturer : manf,
        price : price
    }, function(data) {
        done(data)
    })
}
$(function() {
    let name = $('#productName')
    let manf = $('#manufacturer')
    let price = $('#price')
    $('#addBtn').click(function() {
        addProduct(name,manf,price,function(data) {
            window.alert("iten added")
            console.log("item added")
        })
    })
})
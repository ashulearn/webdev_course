
function fetchProducts(done) {
    $.get('/api/products', (data)=> {
        done(data)
    })
}
function createProductCard(product) {
    return $(`
    <div class="col-4 card ">
    <div class="product-name"><h4>${product.name}</h4></div>
    <div class="product-manufacturer">${product.manufacturer}</div>
    <div class="row">
        <div class="col "><b>Rs ${product.price}</b></div>
        <div class="col-6"><button class="btn btn-primary m-3">Buy</button></div>

    </div>
</div>
    `)
}
$(function() {

    let productlist = $('#productlist')
    fetchProducts(function(products) {
        productlist.empty()
        for (product of products) {
            productlist.append(createProductCard(product))
        }
    })
})
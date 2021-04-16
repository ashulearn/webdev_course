$(()=> {
    $('#pre').click(()=> {
        let a=($('#in').val());
        $('#list').prepend($(`<li>${a}</li>`));
    })
})
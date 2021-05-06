$(()=> {
    $('#navbar').load('/components/navbar.html', logInifneeded)
    $('#footer').load('/components/footer.html')

    
})

function logInifneeded() {
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(!currentUser)
    {
        $.post('/api/users',{}, (user)=> {
            if(user)
            {
                console.log('registed user as '+ user)
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                $('#nav-username').text(currentUser.username)
            }
        })
    }
    else {
        console.log('resume session as '+ currentUser.username)
        $('#nav-username').text(currentUser.username)

    }
}
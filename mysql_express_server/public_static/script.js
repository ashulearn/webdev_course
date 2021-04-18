$(function () {
    let name = $('#name')
    let age = $('#age')
    let city = $('#city')
    let submit = $('#submit')
    let table = $('#persons')

    function refreshPersonTable(persons) {
        table.empty();
        table.append( 
            `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>`
        )
        for(person of persons)
        {
            table.append(
                `<tr>
                <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.city}</td>
                </tr>`
            )
        }
    }

	$.get('api/persons', function (data) {
		refreshPersonTable(data);
	})
	submit.click(function () {
		$.post('/api/persons', {
			name: name.val(),
			age : age.val(),
			city : city.val()
		},function(data) {
			refreshPersonTable(data);
		})
	})
    submit.click(function() {
        console.log("button clicked");
    })
})
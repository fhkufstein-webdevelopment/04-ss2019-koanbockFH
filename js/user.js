$(document).ready(function() {

    var userListBody = $('.userList tbody');
    var usernameInput = $('#username');
    var numberOfUsers = 1;
    var numbersInUse = [1];

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here

        //get Number of new Item
        let newNumber = 1;
        //Loop through to get numbers that are free again - because items have been deleted
        while(numbersInUse.includes(++newNumber)){}

        //create Button and add the Click Event
        var button = $("<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>");
        button.click(function()
        {
            deleteItem(this);
        });
        //Create last Cell of Row and add the Button
        var lastCell = $("<td></td>");
        lastCell.append(button);

        //create row
        var row = $("<tr>");
        row.append($("<td>"+ newNumber + "</td>"))
            .append($("<td>"+ usernameInput.val() +"</td>"))
            .append($(lastCell));

        //add used Number to numberList and up UserCount
        numbersInUse.push(newNumber);
        numberOfUsers++;
        //Add row to table
        userListBody.append(row);
        //reset form
        $('.needs-validation')[0].reset();

        return false;
    });


    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here

        deleteItem(this);
    });

    //maybe some code follows here
    function deleteItem(el)
    {
        //ask if he wants to delete
        if(!confirm("Löschen?")){
            return;
        }
        // while there are parents, keep going until reach TR
        while (el.parentNode && el.tagName.toLowerCase() !== 'tr') {
            el = el.parentNode;
        }

        // If el has a parentNode it must be a TR, so delete it
        if (el.parentNode) {
            //remove used Number from UserNumberList, so it can be used again
            numbersInUse.splice(numbersInUse.indexOf(parseInt(el.firstChild.innerHTML)), 1 );
            //remove row from DOM
            el.parentNode.removeChild(el);
            //decrease UserCount
            numberOfUsers--;
        }
    }
});
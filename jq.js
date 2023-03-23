let data;
$(document).ready(function(){

    $.ajax({url:"user.json",success:function(result){
       data=result
        // $("#demo").text(data)
        console.log(data)
    }})

    
})
var input;

    $("#search").click(function(){
        input = $("#input-field").val()

        for(let i=0;i<data.length;i++){
            if(input === data[i].firstname)
            {
                $("#id").text(data[i].id)
                $("#firstname").text(data[i].firstname)
                $("#lastname").text(data[i].lastname)
                $("#address").text(data[i].address)
                $("#phone").text(data[i].phone)
            }
        }
        
    
    })







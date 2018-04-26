
function hideP(){
    $("p.hiden_p").hide();
}

$(document).ready(function(){
    $(document).on("click", ".more_info", function(){
        console.log("click me");

        $(this).children("h1, p").hide();
            
         $(this).children("p.hiden_p").show();

    });
        $("#forma").submit(function(){

            var f_name = $("#f_name").val();
            var l_name = $("#l_name").val();
            var description = $("#description").val();

            $(".right_section").append("<div class='more_info'><h1>" + f_name + " " + l_name + "</h1><p>Click for description</p><p class= 'hiden_p'>" +  description + "</p></div>");
            $("p.hiden_p").hide();
            // hideP();
            return false;
            

        });



})
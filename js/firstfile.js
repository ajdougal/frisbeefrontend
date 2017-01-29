/**
 * Created by adougal on 1/29/17.
 */


function makeCall(){
    $.ajax({
        url: "http://utmayhem.com/php/play.php",
        type: "POST",
        data: {testKey: "testingKey1"},
        success: function(response){
            console.log(response);
        }
    });
}
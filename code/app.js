var app= {
    init: function(){
        //alert("benvenuti nella casa blu!!!!");
        $.get("https://api.github.com/users/Matteo80300")
        .done(app.onSuccess);
    },
    onSuccess: function(mydata){
        console.log(mydata);
    }
};

$(document).ready(app.init);


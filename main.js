(function(){
var people = {
        people : [],
        init: function(){
            this.cacheDom();
        },
        cacheDom: function(){
            this.$el = $("#peopleModule");
            this.$button = $el.find("button");
            this.$input = $el.find("input");
            this.$ul = $el.find("ul");
            this.template = this.$el.find("#people-template").html();
        },
    };

    people.init();  
})();

//
//var people = [];
//var template = $("#people-template").html();
//
//$("#peopleModule").find("button").on("click",function(){
//    people.push($("#peopleModule").find("input").val());
//    $("peopleModule").find("input").val("");
//    //data for mustache template
//    var data = {
//        people: people,
//    }
//    $("#peopleModule").find("ul").html(Mustache.render(template, data));
//});
//
//$("#peopleModule").find("ul").delegate("i.del", "click", function(e){
//    var $remove = $(e.target).closest("li");
//    var i = $("peopleModule").find("ul").find("li").index($remove);
//    
//    $remove.remove();
//    
//    people.splice(i,1);
//});
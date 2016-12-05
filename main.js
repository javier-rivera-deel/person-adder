(function(){
    var people = {
        people : ["javier","miguel"],
        init: function(){
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function(){
            this.$el = $("#peopleModule");
            this.$button = this.$el.find("button");
            this.$input = this.$el.find("input");
            this.$ul = this.$el.find("ul");
            this.template = this.$el.find("#people-template").html();
        },
        render:function(){
            var data = {
                people : this.people
            };
            this.$ul.html(Mustache.render(this.template, data))
        },
        bindEvents: function(){
            this.$button.on("click", this.addPerson.bind(this));
            this.$ul.delegate("i.del","click",this.deletePerson.bind(this));
        },
        addPerson: function(){
            this.people.push(this.$input.val());
            this.render();
            this.$input.val("");
        },
        deletePerson: function(event){
            var $remove = $(event.target).closest("li");
            var i = this.$ul.find("li").index($remove);
            this.people.splice(i,1);
            this.render();
        }   
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
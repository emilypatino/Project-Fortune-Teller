$("button").click(function(){
    $(".content").fadeOut();
    $("p").fadeIn();

    var Name;
    Name = $(".Name").val(); 
    console.log(Name);
  $(".nameVal").html(Name);
  
   var Year;
    Year = $(".year-chosen").val(); 
    console.log(Year);
  $(".year-chosenVal").html(Year);
  
   var Birth;
    Birth = $(".year").val(); 
    console.log(Birth);
  $(".ageVal").html(Birth);
  $(".ageVal").html(parseInt(Year)-(Birth));
  
   var Challenges;
    Challenges = $(".problems").val(); 
    console.log(Challenges);
  $(".challengesVal").html(Challenges);
});
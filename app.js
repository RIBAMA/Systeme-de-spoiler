spoilers = document.querySelectorAll(".spoiler");



for (var i = 0; i < spoilers.length; i++) {
  var spoiler = spoilers[i];
  var systemSpoiler = document.createElement("button");
  var spoilerContent = document.createElement("span");
  // var toggleVisible =

  (function(systemSpoiler){//create a systemSpoiler button as trigger of the spoiler's system
    systemSpoiler.textContent = "Affiche le spoiler";
    systemSpoiler.value = "Afficher le spoiler";
    systemSpoiler.title = "affiche le spoiler";
  })(systemSpoiler);

  (function(spoiler, spoilerContent){//create a spoilerContent in a class spoiler
    spoilerContent.textContent = spoiler.textContent;
    spoilerContent.style = "display: inline-block;margin: 0;padding: 0;width: 0;height: 0;opacity: 0;overflow: hidden"

  })(spoiler, spoilerContent);

  (function(spoiler, systemSpoiler, spoilerContent){//add a child button system adn content in spoiler class
    spoiler.innerHTML  = "";
    spoiler.appendChild(systemSpoiler);
    spoiler.appendChild(spoilerContent);
  })(spoiler, systemSpoiler, spoilerContent);


  (function(systemSpoiler, spoilerContent){
    systemSpoiler.addEventListener("click", function(){
      spoilerContent.style = "color:red; transition: opacity .8s"
      systemSpoiler.style = "display: inline-block;margin: 0;padding: 0;width: 0;height: 0;opacity: 0;overflow: hidden"

    });
  })(systemSpoiler, spoilerContent);
}

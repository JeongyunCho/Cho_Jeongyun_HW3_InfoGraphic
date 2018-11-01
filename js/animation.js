(() => {
    let body = document.querySelector("body");
    let head = document.querySelector("#mainHead");
    let subhead = document.querySelector("#subHead1");
    let whiteRound1 = document.querySelector("#whiteRound1");
    let logo = document.querySelector("#mainLogo");
    let tv = document.querySelector("#tv");
    let minlogo = document.querySelector("#miniLogo");
    let redLogo = logo.contentDocument.querySelectorAll('.cls-1');
    let redLogoText = logo.contentDocument.querySelectorAll('.cls-3');
    let textSvg = document.querySelector("#textSvg");
    let videoSvg = document.querySelector("#videoSvg");
    let blackLogo = videoSvg.contentDocument.querySelector('#youtube-logo');
    let maxPlayer = document.querySelector("#mainPlayer1");    
    let miniPlayer1 = document.querySelector("#miniPlayer1");
    let miniPlayer2 = document.querySelector("#miniPlayer2");
    let miniPlayer3 = document.querySelector("#miniPlayer3");
    let miniPlayer4 = document.querySelector("#miniPlayer4");
    let maxPlayerC = maxPlayer.contentDocument.querySelector('#pointer');
    let maxPlayerCs = maxPlayer.contentDocument.querySelectorAll('.cls-6');
    let graph1 = document.querySelector("#graph1");
    let graph2 = document.querySelector("#graph2");
    let path = document.querySelector("#path");
    let phone = document.querySelector("#phone");
    let finalLogo = phone.contentDocument.querySelector('#youtube');
    let finalLogoR = phone.contentDocument.querySelector('#youtube-logo');
    let finalLogoT = phone.contentDocument.querySelector('#youtube-logo-2');

//TODO: make transition effect
body.style.visibility = "hidden";
//onload
TweenMax.from(body, 3, {y:1000, backgroundColor: "#ce201f", ease:Power4. easeInOut});
TweenMax.delayedCall(1, myFunction);

//waypoints
var waypoint = new Waypoint({
    element: tv,
    handler: function(direction) {
      //console.log('Scrolled to waypoint!');
      animation(this.element, ["white-6","white-7","white-8","white-9"],["white-3","white-4","white-5"],["dark-grey-3","white","white-2"]);
      this.destroy();
    }, offset: 1020
    
  });

  var waypoint = new Waypoint({
    element: minlogo,
    handler: function(direction) {
      //console.log('Scrolled to waypoint!');
      minlogoF();
      this.destroy();
    }, offset: 1520
    
  });

  var waypoint = new Waypoint({
    element: minlogo,
    handler: function(direction) {
     // console.log('Scrolled to waypoint!');
      textVideoSec();
      this.destroy();
    }, offset: 1120
    
  });

  
  var waypoint = new Waypoint({
    element: textSvg,
    handler: function(direction) {
      //console.log('Scrolled to waypoint2!');
      animation(this.element, ["grey","grey-2","grey-3","grey-4"],[],[]);
      this.destroy();
    }, offset: 1220
    
  });

  var waypoint = new Waypoint({
    element: maxPlayer,
    handler: function(direction) {
     // console.log('Scrolled to waypoint!!!!!');
      playersTransition();
      this.destroy();
    }, offset: 1220
    
  });

  var waypoint = new Waypoint({
    element: graph1,
    handler: function(direction) {
     // console.log('Scrolled to waypoint5');
      animation(this.element, ["dark-red-2","dark-red-3","dark-red-4","dark-red-5","white-5","white-30","white-55","white-80","inner-slash-5","inner-slash-6","inner-slash-7","youtube","facebook","instagram","others"],[],[]);
      this.destroy();
    }, offset: 1120
    
  });

  var waypoint = new Waypoint({
    element: graph2,
    handler: function(direction) {
     // console.log('Scrolled to waypoint6');
      animation(this.element, ["dark-red-2","dark-red-3","dark-red-4","dark-red-5","white-3","white-28","white-53","white-78","inner-slash-5","inner-slash-6","inner-slash-7","youtube","facebook","messenger","others"],[],[]);
      this.destroy();
    }, offset: 1120
    
  });

  var waypoint = new Waypoint({
    element: path,
    handler: function(direction) {
     //console.log('Scrolled to waypoint7');
      pathF();
      this.destroy();
    }, offset: 1320
    
  });

  var waypoint = new Waypoint({
    element: phone,
    handler: function(direction) {
     console.log('Scrolled to waypoint8');
      endF();
      this.destroy();
    }, offset: 720
    
  });


  //functions
  function animation(parent, elements, elements2, elements3){
    //console.log("animation!");
    //console.log(parent);
    let innerSVG = parent.contentDocument;
   // console.log(parent.contentDocument);

    //set up animation properties

    let animProps = {};
    switch (parent.id) {
        case "tv":
        animProps = {x:1000, rotation: 360, transformOrigin: "50% 50%", delay:.5};
        animProps2 = {x:-1000, rotation: 360, transformOrigin: "50% 50%", delay:1.5};
        animProps3 = {opacity: 0, delay:2}
        time= 1;
        TweenMax.from(tv,2,{scaleX: 1.2, scaleY: 1.2, transformOrigin: "50% 50%",  ease:Power2.easeOut})
        break;

        case "textSvg":
        animProps = {y:1000, transformOrigin: "50% 50%", delay:2};
        TweenMax.from(blackLogo, 1, animProps); 
        break;
        case "graph1":
        animProps = {delay:.5, opacity:0, scale:0};
        time= 1;
        break;
        case "graph2":
        animProps = {delay:.5, opacity:0, scale:2};
        time= 1;
        break;
        default:
        //do nothing
        break;
    }
          //simple vector animation with Greensock
          elements.forEach(item => {
            let target = innerSVG.querySelector(`#${item}`);
           // console.log(item);
            TweenMax.from(target, time, animProps);
        })
        elements2.forEach(item2 => {
            let target = innerSVG.querySelector(`#${item2}`);
            TweenMax.from(target, time, animProps2);
        })
        elements3.forEach(item3 => {
            let target = innerSVG.querySelector(`#${item3}`);
            TweenMax.from(target, 2, animProps3);
        })
    }

    function myFunction() {
        body.style.visibility = "visible";

    TweenMax.from(head, 1, {scale:0, ease:Power2.easeOut});
    TweenMax.from(logo, 1, {opacity:0, scale:0, delay:1, ease:Power2.easeOut});
    TweenMax.from(tv, 1, {opacity:0, scale:2, delay:3, ease:Power2.easeOut});
    TweenMax.from(redLogo[0], 1, {y:-100,opacity:0, delay:2, ease:Power2.easeOut});

    redLogoText.forEach(texts => {
        TweenMax.from(texts, 1, {y:100,opacity:0, delay:2});
    })
    }

    function minlogoF(){
        //console.log("a");
		TweenMax.from(minlogo, 3, {scale:0, ease:Bounce.easeOut, delay:1});
        TweenMax.from(subhead, 1, {scale:0, ease:Back.easeOut.config(2), delay:2.5});
        TweenMax.from(whiteRound1, 1, {scale:0, ease:Back.easeOut.config(3), delay:2});
  
    }

    function textVideoSec(){
        TweenMax.from(textSvg, 2, {x:1000, rotation: 360, transformOrigin: "50% 50%", delay:.5});
        TweenMax.from(videoSvg, 2, {x:-1000, rotation: 360, transformOrigin: "50% 50%", delay:.5});
    }
    
    function playersTransition(){
        var timeline = new TimelineMax();
        timeline.from(miniPlayer1,.5,{opacity: 0, x:1000});
        timeline.from(miniPlayer2,.6,{opacity: 0, x:1000});
        timeline.from(maxPlayer,.7,{opacity: 0, x:1000});
        timeline.from(miniPlayer3,.8,{opacity: 0, x:1000});
        timeline.from(miniPlayer4,.9,{opacity: 0, x:1000});
        timeline.from(maxPlayerC,1,{scale:0, ease:Bounce.easeOut, delay:1});
        
        maxPlayerCs.forEach(cs => {
            timeline.from(cs, .5, {scale:0, rotation:-500});
        })
    };

    function pathF(){
        //console.log("a");
        TweenMax.from(path, 1, {y:500,scale:0, opacity:0})
        TweenMax.from(phone, 3, {scale:0, ease:Bounce.easeOut, delay:1});
    
    };
    function endF(){
        TweenMax.from(finalLogo, 1, {opacity:0, scale:0, delay:1, ease:Power2.easeOut});
        TweenMax.from(finalLogoR, 1, {y:-100,opacity:0, delay:2, ease:Power2.easeOut});
        TweenMax.from(finalLogoT, 1, {y:100,opacity:0, delay:2});
        clickF();
    }
    function clickF(){
        finalLogoR.addEventListener("click",endF,false);
    }

})();
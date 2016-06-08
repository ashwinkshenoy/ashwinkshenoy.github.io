
$(document).ready(function($) {
  //scene 1
  var pinani1 = new TimelineMax()
    .add([
      TweenMax.from(".sec1-hd", 1,{opacity:0, top:'-200px', left: '-200px', position:'relative'},{opacity:1}),
      TweenMax.to("#myimg", 0.5,{delay:1, opacity:1, position:'relative'}),
      TweenMax.from(".arrow", 0.5,{delay:2,opacity:0,'margin-right':'-50px'},{opacity:1}),
      TweenMax.from(".sec1-hd2", 0.5,{delay:2.5,opacity:0,top:'200px'},{opacity:1}),
      TweenMax.from(".foo", 0.5,{delay:2.5,opacity:0,top:'200px'},{opacity:1}),
      TweenMax.to(".d1", 0.1,{color:'#ffffff'}),
    ]);
  //build scene
  var scene1 = new ScrollScene({
    triggerElement: ".jumbo1",
    triggerHook:'onLeave',
    reverse:true
  })
  .setTween(pinani1)
  .addTo(controller);
  //scene1.addIndicators({zindex: 100, colorEnd: "red"});
  //scene 1 end

  //scene 2
  var pinani2 = new TimelineMax()
    .add([
      //TweenMax.to(".sec1-hd", 8,{opacity:0,left:'-20000px',position:'relative',opacity:1},{opacity:0}),
      TweenMax.to("#body", 1,{delay:0.05,opacity:1,'background-color':'#A15AFF'}),
      TweenMax.from("#sec2-txt1", 0.5,{opacity:0,left:'-200px',position:'relative'},{opacity:1}),
      TweenMax.from("#sec2-txt2", 0.5,{delay:0.3,opacity:0,top:'200px',position:'relative'},{opacity:1}),
      TweenMax.from("#sec2-txt3", 0.5,{delay:0.6,opacity:0,left:'200px',position:'relative'},{opacity:1}),
      TweenMax.from("#sec2-txt4", 0.5,{delay:0.9,opacity:0,top:'200px',position:'relative'},{opacity:1}),
      TweenMax.to(".d1", 0.1,{color:'#3C3C3C'}),
      TweenMax.to(".d2", 0.1,{color:'#ffffff'}),
    ]);
  //build scene
  var scene2 = new ScrollScene({
    triggerElement: ".jumbo1",
    triggerHook:'onLeave',
    reverse:true,
    offset:300,
    duration:1500
  })
  .setTween(pinani2)
  .setPin(".section2")
  .addTo(controller);
  //scene2.addIndicators({zindex: 100, colorEnd: "red"});
  //scene 2 end

  //scene 3
  var pinani3 = new TimelineMax()
    .add([
      TweenMax.to("#body", 1,{delay:0.05,opacity:1,'background-color':'#ffffff'}),
      TweenMax.from("#sec3-hd", 0.5,{opacity:0,top:'200px',position:'relative'},{opacity:1}),
      TweenMax.from("#box1", 0.5,{delay:0.3,opacity:0,top:'200px',position:'relative'},{opacity:1}),
      TweenMax.from("#box2", 0.5,{delay:0.5,opacity:0,top:'200px',position:'relative'},{opacity:1}),
      TweenMax.from("#box3", 0.5,{delay:0.7,opacity:0,top:'200px',position:'relative'},{opacity:1}),
      TweenMax.to(".d2", 0.1,{color:'#3C3C3C'}),
      TweenMax.to(".d3", 0.1,{color:'#FF5A5A'}),
    ]);
  //build scene
  var scene3 = new ScrollScene({
    triggerElement: ".jumbo2",
    triggerHook:'onLeave',
    reverse:true,
    offset:1650,
    duration:1500
  })
  .setTween(pinani3)
  .setPin(".section3")
  .addTo(controller);
  //scene3.addIndicators({zindex: 100, colorEnd: "red"});
  //scene 3 end

  //scene 4
  var pinani4 = new TimelineMax()
    .add([
      TweenMax.to("#body", 1,{delay:0.05,opacity:1,'background-color':'#ffffff'}),
      TweenMax.from("#sec4-hd", 0.5,{opacity:0,top:'200px',position:'relative'},{opacity:1}),
      TweenMax.from("#ce1", 0.5,{opacity:0,left:'-200px',position:'relative'},{opacity:1}),
      TweenMax.from("#ce2", 0.5,{opacity:0,left:'200px',position:'relative'},{opacity:1}),
      TweenMax.to(".d3", 0.1,{color:'#3C3C3C'}),
      TweenMax.to(".d4", 0.1,{color:'#FF5A5A'}),
    ]);
  //build scene
  var scene4 = new ScrollScene({
    triggerElement: ".jumbo3",
    triggerHook:'onLeave',
    reverse:true,
    offset:1800,
    duration:1000
  })
  .setTween(pinani4)
  .setPin(".section4")
  .addTo(controller);
  //scene4.addIndicators({zindex: 100, colorEnd: "red"});
  //scene 4 end

  //scene 5
  var pinani5 = new TimelineMax()
    .add([
      TweenMax.to("#body", 1,{delay:0.05,opacity:1,'background-color':'#16B1EC'}),
      TweenMax.from("#sec5-hd", 0.5,{opacity:0,top:'200px',position:'relative'},{opacity:1}),
      TweenMax.from("#social1", 0.5,{delay:0.3,opacity:0,top:'200px',left:'-200px',position:'relative'},{opacity:1}),
      TweenMax.from("#social2", 0.5,{delay:0.3,opacity:0,top:'200px',left:'-50px',position:'relative'},{opacity:1}),
      TweenMax.from("#social3", 0.5,{delay:0.3,opacity:0,top:'200px',left:'50px',position:'relative'},{opacity:1}),
      TweenMax.from("#social4", 0.5,{delay:0.3,opacity:0,top:'200px',left:'200px',position:'relative'},{opacity:1}),
      TweenMax.to(".d4", 0.1,{color:'#3C3C3C'}),
      TweenMax.to(".d5", 0.1,{color:'#ffffff'}),
    ]);
  //build scene
  var scene5 = new ScrollScene({
    triggerElement: ".jumbo4",
    triggerHook:'onLeave',
    reverse:true,
    offset:1100,
    duration:1000
  })
  .setTween(pinani5)
  .setPin(".section5")
  .addTo(controller);
  //scene4.addIndicators({zindex: 100, colorEnd: "red"});
  //scene 4 end


  // Smooth scroll for internal links

});

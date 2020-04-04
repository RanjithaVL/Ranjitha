
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
  
  var content1= document.getElementById("content1");
  var content2= document.getElementById("content2");
  var content3= document.getElementById("content3");
  var content4= document.getElementById("content4");
  var content5= document.getElementById("content5");
  
  var btn1= document.getElementById("btn1");
  var btn2= document.getElementById("btn2");
  var btn3= document.getElementById("btn3");
  var btn4= document.getElementById("btn4");
  var btn5= document.getElementById("btn5");
  
  var moreinfo = document.getElementById("moreinfo");
  moreinfo.style.display="none";
  
  var contact = document.getElementById("contact");
  contact.style.display="none";
  
  function openHome(){
	  content1.style.transform = "translateX(0)";
	   content2.style.transform = "translateX(260%)";
	    content3.style.transform = "translateX(260%)";
		content4.style.transform = "translateX(260%)";
		content5.style.transform = "translateX(260%)";
		
		btn1.style.color= "#ff7846";
		btn2.style.color= "#000";
		btn3.style.color= "#000";
		btn4.style.color= "#000";
		btn5.style.color= "#000";
		
		content1.style.transitionDelay ="0.5s";
		content2.style.transitionDelay ="0s";
		content3.style.transitionDelay ="0s";
		content4.style.transitionDelay ="0s";
		content5.style.transitionDelay ="0s";
		  contact.style.display="none";
		moreinfo.style.display="none";
		 }
   function openPI(){
	  content1.style.transform = "translateX(260%)";
	   content2.style.transform = "translateX(0)";
	    content3.style.transform = "translateX(260%)";
		content4.style.transform = "translateX(260%)";
		content5.style.transform = "translateX(260%)";
		
		btn1.style.color= "#000";
		btn2.style.color= "#ff7846";
		btn3.style.color= "#000";
		btn4.style.color= "#000";
		btn5.style.color= "#000";
		
		content1.style.transitionDelay ="0s";
		content2.style.transitionDelay ="0.5s";
		content3.style.transitionDelay ="0s";
		content4.style.transitionDelay ="0s";
		content5.style.transitionDelay ="0s";
		  contact.style.display="none";
		moreinfo.style.display="none";
  }
   function openAD(){
	  content1.style.transform = "translateX(260%)";
	   content2.style.transform = "translateX(260%)";
	    content3.style.transform = "translateX(0)";
		content4.style.transform = "translateX(260%)";
		content5.style.transform = "translateX(260%)";
		
		btn1.style.color= "#000";
		btn2.style.color= "#000";
		btn3.style.color= "#ff7846";
		btn4.style.color= "#000";
		btn5.style.color= "#000";
		
		content1.style.transitionDelay ="0s";
		content2.style.transitionDelay ="0s";
		content3.style.transitionDelay ="0.5s";
		content4.style.transitionDelay ="0s";
		content5.style.transitionDelay ="0s";
		  contact.style.display="none";
		moreinfo.style.display="none";
		
  }
   function openHobbies(){
	  content1.style.transform = "translateX(260%)";
	   content2.style.transform = "translateX(260%)";
	    content3.style.transform = "translateX(260%)";
		content4.style.transform = "translateX(0)";
		content5.style.transform = "translateX(260%)";
		
		btn1.style.color= "#000";
		btn2.style.color= "#000";
		btn3.style.color= "#000";
		btn4.style.color= "#ff7846";
		btn5.style.color= "#000";
		
		content1.style.transitionDelay ="0s";
		content2.style.transitionDelay ="0s";
		content3.style.transitionDelay ="0s";
		content4.style.transitionDelay ="0.5s";
		content5.style.transitionDelay ="0s";
		  contact.style.display="none";
		moreinfo.style.display="none";
  }
   function openBio(){
	  content1.style.transform = "translateX(260%)";
	   content2.style.transform = "translateX(260%)";
	    content3.style.transform = "translateX(260%)";
		content4.style.transform = "translateX(260%)";
		content5.style.transform = "translateX(0)";
		
		btn1.style.color= "#000";
		btn2.style.color= "#000";
		btn3.style.color= "#000";
		btn4.style.color= "#000";
		btn5.style.color= "#ff7846";
		
		content1.style.transitionDelay ="0s";
		content2.style.transitionDelay ="0s";
		content3.style.transitionDelay ="0s";
		content4.style.transitionDelay ="0s";
		content5.style.transitionDelay ="0.5s";
		  contact.style.display="none";
		moreinfo.style.display="none";
  }
  
 function openMoreinfo() {
	 moreinfo.style.display="block";
 }
 
  function openContact() {
	 contact.style.display="block";
 }
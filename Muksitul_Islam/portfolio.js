var typingEffect = new Typed(".auto-type",{
  strings : ["Font-end Devoloper","Quick Learner","Researcher","SEO Expart","Designer","Self Motivator"],
  loop : true,
  typeSpeed : 50, 
  backSpeed : 30,
  backDelay : 2000
})

window.addEventListener("scroll", function(){
  var header =document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY>0)
})


const allquestions=document.querySelectorAll(".faq-content")

allquestions.forEach(allquestion => {
  allquestion.addEventListener("click" , ()=>{
    allquestion.classList.toggle("activeted")
  })
})
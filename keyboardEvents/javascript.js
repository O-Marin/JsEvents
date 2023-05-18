
/*
window.addEventListener(
    "keydown",
    (event) => {
      const p = document.createElement("p");
      p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
      document.getElementById("output").appendChild(p);
      window.scrollTo(0, document.body.scrollHeight);
    },
    true
  );
*/

const para = document.createElement('p')
window.addEventListener("keydown",function(e){console.log(e)
  para.textContent = e.code
  const divContainer = document.querySelector("#testContainer")
  divContainer.appendChild(para)});

const div = document.querySelector(".notPressed")



const button = document.querySelector('#btn')
button.addEventListener('click', function(){
  div.classList.add("testPressing")
  console.log(div)
    
})




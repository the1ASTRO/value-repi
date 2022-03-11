const desc = document.querySelector("#desc")
const text = document.querySelector("#text")
const btn = document.querySelector("#btn")

btn.onclick = (event) => {
  let a = +prompt('a:')
  let b = +prompt('b:')
 
  desc.innerText = a + " + " + b
  text.innerText = a + b
}
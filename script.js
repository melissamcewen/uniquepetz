const menu = document.getElementById('add-menu');

const menuLinks = [
  ["Home", "/"],
  ["Selective Breeds", "/selective-breeds.html"],
     ["Petz 4 Mac Guide", "/vm-tips.html"],
   ["Original site", "/original-index.html"],
     ["Minis", "/minis.html"],
       ["How To Play Petz", "/petz.html"],
         ["Face/personality swap", "/swap.html"],
           ["Downloads (breeds, etc.)", "/downloads.html"],
]


let html=""


menuLinks.forEach(link => {
  let newHTML = `<li class="pure-menu-item">
                <a href=" ${link[1]}" class="pure-menu-link"> ${link[0]}</a>
              </li>`
  console.log(newHTML)
  html += newHTML
});

menu.innerHTML = html
const elf = document.getElementById("elf")
const btn = document.getElementById("btn")

let elfCount = 0;

const emojis = ["🔧", "🔨", "🪛", "🪚",, "☕"];

function duplicateElf(){
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/
  if (elfCount < 100) {
    const clonedElf = elf.cloneNode(true);
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    if(randomEmoji !== undefined){
     
      const emojiSpan = document.createElement("span");
      emojiSpan.style.fontSize = "15px";
      emojiSpan.textContent = randomEmoji;
      clonedElf.appendChild(emojiSpan);
    }
    elf.parentElement.appendChild(clonedElf);
    elfCount++;
  } 
}

btn.addEventListener("click", duplicateElf);

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/
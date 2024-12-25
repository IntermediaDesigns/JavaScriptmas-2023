const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const addBtn = document.getElementById("add-btn");
const sortBtn = document.getElementById("sort-btn");

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
];

function sort() {
    // Clear the lists
    niceList.innerHTML = '';
    naughtyList.innerHTML = '';

    for (let i = 0; i < sorteesArr.length; i++) {
        const person = sorteesArr[i];
        const li = document.createElement('li');

        const deleteSpan = document.createElement('span');
        deleteSpan.innerHTML = '❌';
        deleteSpan.style.color = 'red';
        deleteSpan.style.cursor = 'pointer';
        deleteSpan.className = 'delete-emoji';
        deleteSpan.addEventListener('click', function() {
            deletePerson(person.name);
        });
        li.appendChild(deleteSpan);

        const nameText = document.createTextNode(' ' + person.name);
        li.appendChild(nameText);

        const switchBtn = document.createElement('button');
        switchBtn.textContent = ' Switch';
        switchBtn.addEventListener('click', function() {
            switchList(person.name);
        });
        li.appendChild(switchBtn);

        if (person.hasBeenGood) {
            niceList.appendChild(li);
        } else {
            naughtyList.appendChild(li);
        }
    }
}

sortBtn.addEventListener("click", sort);

function addPerson() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value;
    if (name) {
        const isDuplicate = sorteesArr.some(p => p.name === name);
        if (!isDuplicate) {
            sorteesArr.push({ name, hasBeenGood: false });
            nameInput.value = '';
            sort();
        } else {
            alert('This name already exists in the list.');
        }
    }
}

addBtn.addEventListener("click", addPerson);

function switchList(name) {
    const person = sorteesArr.find(p => p.name === name);
    if (person) {
        person.hasBeenGood = !person.hasBeenGood;
        sort();
    }
}

function deletePerson(name) {
    const index = sorteesArr.findIndex(p => p.name === name);
    if (index !== -1) {
        sorteesArr.splice(index, 1);
        sort();
    }
}




/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
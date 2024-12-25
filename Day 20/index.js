const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

function saveSanta(arr) {
    return arr.map(item => {
        if (Array.isArray(item)) {
            return saveSanta(item);
        } else {
            return item === "🎅" ? item : null;
        }
    }).filter(item => item !== null);
}

console.log(saveSanta(dangerArray));
const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

function generateSecretSantaPairs(arr) {
    let shuffled = [...arr];
    let pairs = {};

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === shuffled[i]) {
            [shuffled[i], shuffled[(i + 1) % arr.length]] = [shuffled[(i + 1) % arr.length], shuffled[i]];
        }
        pairs[arr[i]] = shuffled[i];
    }

    return pairs;
}

console.log(generateSecretSantaPairs(people))

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
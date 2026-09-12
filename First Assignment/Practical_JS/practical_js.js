const users = [
    { id: 1, name: "Mari", age: 22, active: true },
    { id: 2, name: "Jüri", age: 17, active: false },
    { id: 3, name: "Kati", age: 31, active: true },
    { id: 4, name: "Martin", age: 19, active: false },
    { id: 5, name: "Laura", age: 26, active: true }
]

// 3.1. Kuva console.log() abil kõikide kasutajate nimed:
console.log(users);

// 3.2. Kasuta .filter() meetodit, et leida kõik aktiivsed kasutajad.
const filteredUsers = users.filter(user => user.active == true);
console.log(filteredUsers);

// 3.3. Kasuta .filter() meetodit, et leida kõik vähemalt 18-aastased kasutajad.
const filteredAges = users.filter(user => user.age >= 18);
console.log(filteredAges);

// 3.4. Kasuta .map() meetodit, et luua uus massiiv, mis sisaldab ainult kasutajate nimesid.
const mappedUsers = users.map(user => user.name);
console.log(mappedUsers);

// 3.5. Kasuta .find() meetodit, et leida kasutaja, kelle id on 3.
const findUserById = users.find(user => user.id == 3);
console.log(findUserById);

/*
3.6. Kirjuta tavaline funktsioon getUserStatus(user), mis tagastab:
"Aktiivne", kui kasutaja on aktiivne;
"Mitteaktiivne", kui kasutaja ei ole aktiivne.
*/
function getUserStatus(user) {
    if (user.active) {
        return "Aktiivne";
    } else {
        return "Mitteaktiivne";
    }
}
const statuses = users.map(user => getUserStatus(user));
console.log(statuses);

// 3.7. Kirjuta arrow function getGreeting(user), mis kasutab template literal'it ja tagastab näiteks: "Tere, Mari! Sa oled 22 aastat vana."
const getGreeting = (user) => {
    return `Tere ${user.name}! Sa oled ${user.age} aastat vana.`;
}
for (const user of users) {
    console.log(getGreeting(user));
}

// 3.8. Kasuta destructuring'ut, et võtta ühe kasutaja objektist välja name ja age.
// Ma pole kindel, kas mõtlesid seda, et ma kirjutaks ümber tema andmed või lihtsalt võtan sealt tema vajalikud andmed välja...
const { name, age } = users[0];
console.log(name);
console.log(age);

// 3.9. Kasuta spread-süntaksit, et luua uus kasutaja, kelle andmed on: { id: 6, name: "Karl", age: 24, active: true }
// Lisa uus kasutaja uude massiivi nii, et esialgne users massiiv ei muutuks.
const newUser = { id: 6, name: "Karl", age: 24, active: true };
const updatedUsers = [...users, newUser];
console.log(updatedUsers);

// 3.10. Lisa ühele kasutajale valikuline omadus address: address: { city: "Tallinn" }
// Kuva kasutaja linn optional chaining'u abil: user.address?.city
// Kui linna ei ole, kuva nullish coalescing'u abil "Linn puudub": user.address?.city ?? "Linn puudub"
const optionalUserAddress = { ...users[0], address: { city: "Tallinn" } };
const userWithoutAddress = users[1];
console.log(optionalUserAddress.address?.city ?? "Linn puudub");
console.log(userWithoutAddress.address?.city ?? "Linn puudub");

// Käi kasutajad läbi .forEach() abil ja kuva iga kasutaja kohta: Mari – Aktiivne "\n" Jüri – Mitteaktiivne
updatedUsers.forEach(user => {
    const activityStatus = user.active ? "Aktiivne" : "Mitteaktiivne";
    console.log(`${user.name} - ${activityStatus}`);
});

// 3.12. Sorteeri kasutajad vanuse järgi noorimast vanimani.
console.log(updatedUsers.sort((a, b) => a.age - b.age));
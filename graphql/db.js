export const people = [
    {
        id: "1",
        name: "Soyoung",
        age: 26,
        gender: "female"
    },
    {
        id: "2",
        name: "Zini",
        age: 26,
        gender: "male"
    },
    {
        id: "3",
        name: "Jelly",
        age: 26,
        gender: "female"
    },
    {
        id: "4",
        name: "hisi",
        age: 26,
        gender: "female"
    }

];

export const getById = id => {
    const filteredPeople = people.filter(person => String(id) === person.id);
    return filteredPeople[0];
}
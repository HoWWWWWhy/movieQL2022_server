export const people = [
  {
    id: 1,
    name: "Jerry",
    age: 31,
    gender: "female",
  },
  {
    id: 2,
    name: "Tom",
    age: 32,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  //console.log(filteredPeople);
  return filteredPeople[0];
};

const phLetters = [
  {
    id: "letter1",
    title: "titulo",
    createAt: "12/05/2022",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi. ",
  },
  {
    id: "letter2",
    title: "titulo",
    createAt: "12/05/2022",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi. ",
  },
  {
    id: "letter3",
    title: "titulo",
    createAt: "12/05/2022",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi. ",
  },
  {
    id: "letter4",
    title: "titulo",
    createAt: "12/05/2022",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi. ",
  },
  {
    id: "letter5",
    title: "titulo",
    createAt: "12/05/2022",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi. ",
  },
];

const getLetters = () => 
{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phLetters);
    }, 1000);
  })
}

export default getLetters;
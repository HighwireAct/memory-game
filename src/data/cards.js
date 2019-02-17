const fighters = [
  ["lucina", "Lucina"],
  ["inkling", "Inkling"],
  ["mario", "Mario"],
  ["falcon", "Captain Falcon"],
  ["link", "Link"],
  ["dk", "Donkey Kong"],
  ["ness", "Ness"],
  ["dedede", "King Dedede"],
  ["mewtwo", "Mewtwo"],
  ["samus", "Samus"],
  ["sheik", "Sheik"],
  ["falco", "Falco"],
  ["fox", "Fox"],
  ["marth", "Marth"],
  ["kirby", "Kirby"],
  ["ice-climbers", "Ice Climbers"]
]

const cards = [];

for (let i = 0; i < fighters.length; i++) {
  cards.push({
    id: i + 1,
    image: `./assets/img/${fighters[i][0]}-thumb.png`,
    name: fighters[i][1]
  })
}

export default cards;

// [
//   {
//     "id": 1,
//     "image": "./assets/img/lucina-thumb.png",
//     "name": "Lucina"
//   },
//   {
//     "id": 2,
//     "image": "./assets/img/inkling-thumb.png",
//     "name": "Inkling"
//   },
//   {
//     "id": 3,
//     "image": "./assets/img/mario-thumb.png",
//     "name": "Mario"
//   },
//   {
//     "id": 4,
//     "image": "./assets/img/falcon-thumb.png",
//     "name": "Captain Falcon"
//   },
//   {
//     "id": 5,
//     "image": "./assets/img/link-thumb.png",
//     "name": "Link"
//   },
//   {
//     "id": 6,
//     "image": "./assets/img/dk-thumb.png",
//     "name": "Donkey Kong"
//   },
//   {
//     "id": 7,
//     "image": "./assets/img/ness-thumb.png",
//     "name": "Ness"
//   },
//   {
//     "id": 8,
//     "image": "./assets/img/dedede-thumb.png",
//     "name": "King Dedede"
//   },
//   {
//     "id": 9,
//     "image": "./assets/img/dedede-thumb.png",
//     "name": "King Dedede"
//   }
// ]
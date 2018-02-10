const words = [
  "dope",
  "pop",
  "fold",
  "map"
]

const random = (length) => Math.floor( Math.random() * length )

const giveRandomWord = (wordArr=words) => {
  const number = random(wordArr.length)
  return wordArr[number]
}

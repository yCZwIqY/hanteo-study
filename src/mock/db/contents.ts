const contents = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  rangking: i + 1,
  singer: `가수 ${i}`,
  songTitle: `노래 ${i}`,
}));

export default contents;

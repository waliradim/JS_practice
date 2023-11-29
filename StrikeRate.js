//Problem - 1

calculateStrikeRate = (ran, ball) => {
  return ((ran / ball) * 100).toFixed(2);
};

console.log(calculateStrikeRate(25, 40));

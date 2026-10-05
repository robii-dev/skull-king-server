function calculerScoreManche(annonce, plisRemportes, numeroManche) {
  if (annonce === null || annonce === undefined) return 0;

  const a = Number(annonce);
  const p = Number(plisRemportes);

  if (a === 0) {
    if (p === 0) {
      return 10 * numeroManche;
    } else {
      return -10 * numeroManche;
    }
  } else {
    if (p === a) {
      return 20 * a;
    } else {
      const ecart = Math.abs(a - p);
      return -10 * ecart;
    }
  }
}

module.exports = { calculerScoreManche }; 
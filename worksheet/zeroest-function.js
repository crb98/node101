export function zeroest(arr) {
  return arr.reduce((closest, current) => {
    const absClosest = Math.abs(closest);
    const absCurrent = Math.abs(current);
    
    if (absCurrent < absClosest || (absCurrent === absClosest && current > closest)) {
      return current;
    }
    return closest;
  });
}
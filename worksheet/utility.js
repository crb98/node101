/**
 * The subtract function is complete and ready for use.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a, b) {
  return a + b;
}

export function compare(a, b) {
  return a.length === b.length && a.every(function(v, i) {
    return v === b[i];
  });
}

export function largest(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

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
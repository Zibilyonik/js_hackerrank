function flippingMatrix(matrix) {
      let total = 0;
  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      total += Math.max(
        matrix[i][j],
        matrix[i][matrix.length - j - 1],
        matrix[matrix.length - i - 1][j],
        matrix[matrix.length - i - 1][matrix.length - j - 1]
      );
    }
  }
  return total;
}
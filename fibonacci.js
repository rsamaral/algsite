function fibonacci(quantFib) {
		const seqFib = [0, 1];

		for (let i = 2; i < quantFib; i++) {
			seqFib.push(seqFib[i - 2] + seqFib[i - 1]);
		}

	return seqFib;
}

module.exports = {
	fibonacci
}

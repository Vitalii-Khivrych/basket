export function generateRandomNumber(max: number): number {
	return Math.floor(Math.random() * (max * 10000)) + 1;
}

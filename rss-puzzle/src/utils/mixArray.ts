export default function mix(array: string[]): string[] {
    const mixedArray = array.slice();
    for (let i = mixedArray.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixedArray[i], mixedArray[j]] = [mixedArray[j], mixedArray[i]];
    }
    return mixedArray;
}

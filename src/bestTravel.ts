export class BestTravel {

    public static chooseBestSum = (maxDistance: number, cityNbrToVisit: number, cities: number[]): number | null => {
        const combinationList = combinations(cities.length, cityNbrToVisit);
        let maxSumOfDistances: number = 0;
        combinationList.forEach(comb => {
            const sumOfDistances = comb.map(cityIdx => cities[cityIdx])
                .reduce<number>((prev, curr) => prev + curr, 0);
            if (sumOfDistances > maxSumOfDistances && sumOfDistances <= maxDistance) {
                maxSumOfDistances = sumOfDistances;
            }
        });
        return maxSumOfDistances === 0 ? null : maxSumOfDistances;
    }

}

export const variations = (n: number, k: number, a: number[][]): number[][] => {
    if (k === 0) {
        return a;
    }
    const newArray: number[][] = [];
    for (let idxN = 0; idxN < n; idxN++) {
        if (a.length === 0) {
            newArray.push([idxN]);
        } else {
            for (let setIdx = 0; setIdx < a.length; setIdx++) {
                newArray.push(a[setIdx].concat(idxN));
            }
        }
    }
    return variations(n, k - 1, newArray);
};

const variationHasNotDuplicateItems = (array: number[], k: number): boolean =>
    new Set<number>(array).size === k;

const hasVariationWithSameItems = (variationList: number[][], variation: number[]): boolean =>
    variationList.some(v => JSON.stringify(v.sort()) === JSON.stringify(variation.sort()));

export const combinations = (n: number, k: number): number[][] => {
    const vars = variations(n, k, []);
    return vars
        .filter(variation => variationHasNotDuplicateItems(variation, k))
        .reduce<number[][]>((resultsVars, variation) => hasVariationWithSameItems(resultsVars, variation)
            ? resultsVars : resultsVars.concat([variation]), []);
};

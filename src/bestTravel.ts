export class BestTravel {

    public static chooseBestSum = (_targetDistance: number,
        _cityNbrToVisit: number, _list: number[]): number | null => {
        return null;
    }

}

export const variations = (n: number, k: number, a: number[][]): number[][] => {
    if (k === 0) {
        return a;
    }
    let newArray: number[][] = [];
    for (let idxN = 0; idxN < n; idxN++) {
        if (a.length === 0) {
            newArray.push([idxN]);
        } else {
            for (let setIdx = 0; setIdx < a.length; setIdx++) {
                newArray.push(a[setIdx].concat(idxN).sort());
            }
        }
    }
    return variations(n, k - 1, newArray);
}

const hasNotDuplicateItems = (array: number[], k: number): boolean =>
    new Set<number>(array).size === k;

export const combinations = (n: number, k: number): number[][] => {
    let vars = variations(n, k, []);
    return vars
        .filter(variation => hasNotDuplicateItems(variation, k))
        .reduce<number[][]>((resultsVars, variation) =>
            resultsVars.some(v => JSON.stringify(v) === JSON.stringify(variation))
                ? resultsVars
                : resultsVars.concat([variation])
            , []);
};

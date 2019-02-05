import { deepStrictEqual, equal } from "assert";

import { BestTravel, combinations, variations } from "../src/bestTravel";

/// <reference types="mocha" />
function dotest(t: number, k: number, ls: number[], expected: number | null) {
    equal(BestTravel.chooseBestSum(t, k, ls), expected);
}

describe("Fixed Tests", () => {

    describe("variations Tests", () => {

        it("variations 3 2", () => {
            deepStrictEqual(variations(3, 2, []), [
                [0, 0], [1, 0], [2, 0],
                [0, 1], [1, 1], [2, 1],
                [0, 2], [1, 2], [2, 2],
            ]);
        });

    });

    describe("combinations Tests", () => {

        it("combinations 3 2", () => {
            deepStrictEqual(combinations(3, 2), [
                [0, 1], [0, 2], [1, 2],
            ]);
        });
        it("combinations 4 2", () => {
            deepStrictEqual(combinations(4, 2), [
                [0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3],
            ]);
        });

    });

    describe("chooseBestSum Tests", () => {

        it("choosebestsum 1", () => {
            const ts = [50, 55, 56, 57, 58];
            dotest(163, 3, ts, 163);
        });

        it("choosebestsum 2", () => {
            const ts = [50];
            dotest(163, 3, ts, null);
        });

        it("choosebestsum 3", () => {
            const ts = [91, 74, 73, 85, 73, 81, 87];
            dotest(230, 3, ts, 228);
        });
    });

});

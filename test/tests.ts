/// <reference types="mocha" />
import { equal } from "assert";

import { BestTravel } from "../src/bestTravel";

function dotest(t: number, k, ls, expected) {
    equal(BestTravel.chooseBestSum(t, k, ls), expected);
}

describe("Fixed Tests", () => {

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

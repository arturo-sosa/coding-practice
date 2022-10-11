import {getFunctionMetrics, getReport} from "../../src/utils/report/report";
import {FunctionMetrics} from "../../src/utils/report/report.types";

describe("getFunctionMetrics", () => {
    test("should get execution time for a function", async () => {
        const mockFn = () => {};
        const report = await getFunctionMetrics(mockFn);

        expect(report.time.startTime).toBeGreaterThan(0);
        expect(report.time.endTime).toBeGreaterThan(0);
        expect(report.time.total).toBeGreaterThan(0);
    });

    test("should execute a function", async () => {
        const mockFn = jest.fn(() => {});
        await getFunctionMetrics(mockFn);

        expect(mockFn).toBeCalledTimes(1);
    });

    test("should report exception while executing a function", async () => {
        const mockFn = jest.fn(() => {
            throw new Error();
        });

        const report = await getFunctionMetrics(mockFn);
        expect(report.fn.error).not.toBeUndefined();
    });

    test("should handle inputs and outputs", async () => {
        const mockFn = jest.fn((a: number, b: number) => a + b);
        const input = [1, 2];
        const output = 3;
        const report = await getFunctionMetrics(mockFn, input, output);

        expect(report.fn.input).toEqual(input);
        expect(report.fn.output).toEqual(output);
        expect(report.fn.expected).toEqual(output);
    });
});

describe("getReport", () => {
    test("should return a report for executed functions", async () => {
        const mockFn = () => {};
        const report = await getReport([{fn: mockFn}]);

        expect(report["root"].time.startTime).toBeGreaterThan(0);
        expect(report["root"].time.endTime).toBeGreaterThan(0);
        expect(report["root"].time.total).toBeGreaterThan(0);
        expect(report[0]).not.toBeUndefined();
    });

    test("should handle function object", async () => {
        const mockFn = jest.fn((a: number, b: number) => a + b);
        const input = [1, 2];
        const output = 3;
        const report = await getReport([{fn: mockFn, input, expected: output}]);
        const fnReport = report[0] as FunctionMetrics;

        expect(fnReport.fn.output).toEqual(output);
    });
});

import {getReport, getTime} from "../../src/utils/function";

describe('getTime', () => {
    test('should get execution time for a function', async () => {
        const mockFn = () => {};
        const report = await getTime(mockFn);
        expect(report.time).toBeGreaterThan(0);
    });

    test('should execute a function', async () => {
        const mockFn = jest.fn(() => {});
        await getTime(mockFn);
        expect(mockFn).toBeCalledTimes(1);
    });

    test('should report exception while executing a function', async () => {
        const mockFn = jest.fn(() => {
            throw new Error();
        });

        const report = await getTime(mockFn);
        expect(report.error).not.toBeUndefined();
    });
});

describe('getReport', () => {
    test('should return a report for executed functions', async () => {
        const mockFn = () => {};
        const report = await getReport([mockFn]);
        expect(report["root"].time).toBeGreaterThan(0);
        expect(report[0]).not.toBeUndefined();
    });
});

import Performance from "../../src/utils";
import {getExecutionTime} from "../../src/utils/performance";

describe('getExecutionTime', () => {
    test('should return execution time for functions', async () => {
        const mockFn = () => {
        };

        const report = await Performance.getExecutionTime([mockFn]);
        expect(report["root"].time).toBeGreaterThan(0);
        expect(report[0].time).toBeGreaterThan(0);
    })

    test('should execute all functions', async () => {
        const mockFn = jest.fn(() => {
        });

        await Performance.getExecutionTime([mockFn]);

        expect(mockFn).toBeCalledTimes(1);
    })

    test('should report exceptions while executing functions', async () => {
        const mockFn = jest.fn(() => {
            throw new Error();
        });

        const report = await Performance.getExecutionTime([mockFn]);
        expect(report[0].error).not.toBeUndefined();
    })
})

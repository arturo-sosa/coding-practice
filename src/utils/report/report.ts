import {FnConfig, FunctionMetrics, ReportFunctionObject, ReportObject, SimpleMetrics} from "./report.types";

/**
 * Creates a new simple report object
 * @param label {string} name of the invoker
 * @returns {SimpleMetrics} object containing only a label and time metrics
 */
const getEmptySimpleMetrics = (label: string): SimpleMetrics => {
    return {
        label,
        time: {
            startTime: 0,
            endTime: 0,
            total: 0,
        },
    };
};

/**
 * Creates a new function report object
 * @param label {string} name of the invoker
 * @param fn {FnConfig} object containing a function, input parameters and expected output
 * @returns {FunctionMetrics} object containing a label, time report and function metrics
 */
const getEmptyFunctionMetrics = (label: string, fn: FnConfig): FunctionMetrics => {
    return {
        ...getEmptySimpleMetrics(label),
        fn: {
            input: fn.input,
            expected: fn.expected,
        },
    };
};

/**
 * Creates a report of time and function metrics
 * @param fn {Function} function to report
 * @param input {unknown} inputs for the function
 * @param expected {unknown} expected output for the function
 * @returns {Promise<FunctionMetrics>} object containing a label, time report and function report
 */
export const getFunctionMetrics = async <T, O>(fn: Function, input?: T, expected?: O): Promise<FunctionMetrics> => {
    const report: FunctionMetrics = getEmptyFunctionMetrics(fn.name, {input, expected});

    try {
        report.time.startTime = performance.now();
        report.fn.output = await fn.apply(null, input);
    } catch (ex) {
        report.fn.error = ex as Error;
    } finally {
        report.time.endTime = performance.now();
        report.time.total = report.time.endTime - report.time.startTime!;
    }

    return report;
};

/**
 * Creates a report that includes time and function metrics for each object in fns, it also includes a "root" report for the total time for the function batch
 * @param fns {ReportFunctionObject} array of function definitions to be reported
 * @returns {Promise<ReportObject>} object that contains all function reports ordered by index of execution
 */
export const getReport = async (fns: Array<ReportFunctionObject>): Promise<ReportObject> => {
    const root: SimpleMetrics = getEmptySimpleMetrics("Execution time report");
    const report: ReportObject = {root};

    root.time.startTime = performance.now();

    for (let idx = 0; idx < fns.length; idx++) {
        const fnObject = fns[idx];
        report[idx] = await getFunctionMetrics(fnObject.fn, fnObject.input, fnObject.expected);
    }

    root.time.endTime = performance.now();
    root.time.total = root.time.endTime - root.time.startTime!;

    return report;
};

export default {
    getFunctionMetrics,
    getReport,
};
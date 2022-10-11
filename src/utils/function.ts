type Execution = {
    label?: string,
    startTime?: number,
    endTime?: number,
    time?: number,
    error?: Error,
}

type ExecutionReport = { [key: string]: Execution }

/**
 * Returns a report of execution time for a passed function
 * @param fn - function to be timed
 * @returns Promise<Execution> - object that contains execution information
 * @type Function
 */
export const getTime = async (fn: Function): Promise<Execution> => {
    const report: Execution = {label: fn.name, startTime: performance.now()};

    try {
        await fn();
    } catch (ex) {
        report.error = ex as Error;
    } finally {
        report.endTime = performance.now();
        report.time = report.endTime - report.startTime!;
    }

    return report;
};

/**
 * Returns a report of execution times for each passed function and also for the total execution time of all of them
 * @param fns - array of functions to be timed
 * @returns ExecutionReport - object that contains execution information
 * @type Promise<Function>
 */
export const getReport = async (fns: [Function]): Promise<ExecutionReport> => {
    const root: Execution = {label: 'Execution time report', startTime: performance.now()};
    const report: ExecutionReport = {root};

    for (let idx = 0; idx < fns.length; idx++) {
        report[idx] = await getTime(fns[idx]);
    }

    root.endTime = performance.now();
    root.time = root.endTime - root.startTime!;

    return report;
};

export default {
    getTime,
    getReport
};
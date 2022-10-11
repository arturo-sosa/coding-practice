type Execution = {
    label?: string,
    startTime: number,
    endTime?: number,
    time?: number,
    error?: Error,
}

type ExecutionReport = { [key: string]: Execution }

/**
 * Returns a report of execution times for each passed function and also for the total execution time of all of them
 * @param fns - array of functions to be timed
 * @returns ExecutionReport - object that contains execution information
 * @type [Function]
 */
export const getExecutionTime = async (fns: [Function]) => {
    const root: Execution = {label: 'Execution time report', startTime: performance.now()};
    const report: ExecutionReport = {root}

    for (let idx = 0; idx < fns.length; idx++) {
        const fn = fns[idx];
        const entry: Execution = {label: fn.name, startTime: performance.now()}
        report[idx] = entry;

        try {
            await fn();
        } catch (ex) {
            entry.error = ex as Error;
        } finally {
            entry.endTime = performance.now();
        }
    }

    root.endTime = performance.now();
    root.time = root.endTime - root.startTime;

    for (let key in report) {
        if (key !== 'root') {
            report[key].time = report[key].endTime! - report[key].startTime;
        }
    }

    return report;
}

export default {
    getExecutionTime
};
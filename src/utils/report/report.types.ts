export type SimpleMetrics = {
  label: string
  time: {
    startTime: number
    endTime: number
    total: number
  }
}

export type FunctionMetrics = SimpleMetrics & {
  fn: {
    input?: Array<unknown>
    output?: unknown
    expected?: unknown
    error?: Error
  }
}

export type Report = SimpleMetrics | FunctionMetrics

export type ReportObject = { [key: string]: Report }

export type FnConfig = {
  input?: Array<unknown>
  expected?: unknown
}

export type ReportFunctionObject = FnConfig & {
  fn: Function
}

export type ReportResults = {
  label: string
  input: unknown
  output: unknown
  expected: unknown
  matches: boolean
}
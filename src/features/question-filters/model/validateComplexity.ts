export const COMPLEXITY_MAP: Record<string, number[]> = {
    '1-3': [1, 2, 3],
    '4-6': [4, 5, 6],
    '7-8': [7, 8],
    '9-10': [9, 10]
}

export const isValidComplexity = (value: string): boolean => value in COMPLEXITY_MAP

export const validateComplexity = (complexity: string[]): number[] | undefined => {

    if (!complexity?.length) {
        return undefined
    }

    const validComplexity = complexity.flatMap(level => COMPLEXITY_MAP[level] ?? [])

    return validComplexity.length > 0 ? validComplexity : undefined

}
export const ROUTES = {
    home: '/',
    questions: '/questions',
    questionDetail: (id: number | string) => `/questions/${encodeURIComponent(id)}`,
    notFound: '*'
} as const;
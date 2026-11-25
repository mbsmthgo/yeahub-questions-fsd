import {createBrowserRouter, Navigate} from "react-router-dom";
import {ROUTES} from "@/shared/config/routes";
import {lazy, Suspense} from "react";
import {QuestionDetailPageSkeleton} from "@/pages/question-detail/ui/QuestionDetailPageSkeleton";
import {QuestionPageSkeleton} from "@/pages/questions/ui/QuestionPageSkeleton";
import {RootErrorBoundary, RootLayout} from "@/app/layouts";

const QuestionsPage = lazy(() => import('@/pages/questions')
    .then(module => ({default: module.QuestionsPage})))
const QuestionDetailPage = lazy(() => import('@/pages/question-detail')
    .then(module => ({default: module.QuestionDetailPage})))
const NotFoundPage = lazy(() => import('@/pages/not-found')
    .then(module => ({default: module.NotFoundPage})))

export const router = createBrowserRouter([
    {
        path: ROUTES.home,
        element: <RootLayout/>,
        errorElement: <RootErrorBoundary/>,
        children: [
            {
                errorElement: <RootErrorBoundary/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to={ROUTES.questions} replace/>
                    },
                    {
                        path: 'questions',
                        children: [
                            {
                                index: true,
                                element: (
                                    <Suspense fallback={<QuestionPageSkeleton/>}>
                                        <QuestionsPage/>
                                    </Suspense>
                                )
                            },
                            {
                                path: ':questionId',
                                element: (
                                    <Suspense fallback={<QuestionDetailPageSkeleton/>}>
                                        <QuestionDetailPage/>
                                    </Suspense>
                                )
                            }
                        ]
                    },
                    {
                        path: ROUTES.notFound,
                        element: (
                            <Suspense fallback={null}>
                                <NotFoundPage/>
                            </Suspense>
                        )
                    }
                ]
            }
        ]
    }
])
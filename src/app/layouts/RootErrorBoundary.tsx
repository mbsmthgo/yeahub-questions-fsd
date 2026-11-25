import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export function RootErrorBoundary() {
    let error = useRouteError()
    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>{error.status} {error.statusText}</h1>
                <p>{error.data}</p>
            </>
        )
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Ошибка</h1>
                <p>{error.message}</p>
            </div>
        )
    } else {
        return <h1>Неизвестная ошибка</h1>
    }
}
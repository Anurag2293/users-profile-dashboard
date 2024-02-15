
// icon:loader | Feathericons https://feathericons.com/ | Cole Bemis
import * as React from "react";

function IconLoader(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
            className="animate-spin"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M18.364 5.636L16.95 7.05A7 7 0 1019 12h2a9 9 0 11-2.636-6.364z" />
        </svg>
    );
}

const Loading = () => {
    return (
        <div className="w-16 mx-auto">
            <IconLoader />
        </div>
    )
}

export default Loading
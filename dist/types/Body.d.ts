import React, { ReactNode, RefObject } from 'react';
export default function Panel({ children, className, ref, }: {
    children: ReactNode;
    className?: string;
    ref?: RefObject<HTMLBodyElement> | undefined;
}): React.JSX.Element;

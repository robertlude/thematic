import React, { ReactNode, RefObject } from 'react';
export default function Heading({ children, className, level, ref, }: {
    children: ReactNode;
    className?: string;
    level?: number;
    ref?: RefObject<HTMLHeadingElement> | undefined;
}): React.JSX.Element;

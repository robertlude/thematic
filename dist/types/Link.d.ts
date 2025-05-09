import React, { ComponentType, ReactNode, RefObject } from 'react';
export default function Link({ children, href, className, ref, }: {
    children: ReactNode;
    href: string;
    className?: string;
    ref?: RefObject<ComponentType<any>> | undefined;
}): React.JSX.Element;

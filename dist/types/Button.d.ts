import React, { MouseEvent, ReactNode, RefObject } from 'react';
export default function Button({ children, className, onClick, ref, }: {
    children: ReactNode;
    className?: string;
    onClick?: ((event: MouseEvent) => void) | undefined;
    ref?: RefObject<HTMLButtonElement> | undefined;
}): React.JSX.Element;

import React, { MouseEvent, ReactNode, RefObject } from 'react';
export default function Button({ children, onClick, className, ref, }: {
    children: ReactNode;
    onClick: (event: MouseEvent) => void;
    className?: string;
    ref?: RefObject<HTMLButtonElement> | undefined;
}): React.JSX.Element;

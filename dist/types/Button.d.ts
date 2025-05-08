import React, { ReactNode, MouseEvent } from 'react';
export default function Button({ children, className, onClick, }: {
    children: ReactNode;
    className?: string;
    onClick?: (event: MouseEvent) => void;
}): React.JSX.Element;

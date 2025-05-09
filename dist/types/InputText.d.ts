import React, { ChangeEvent, ReactNode, RefObject } from 'react';
export default function InputText({ children, className, onChange, ref, rows, value, }: {
    children: ReactNode;
    className?: string;
    onChange?: ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined;
    ref?: RefObject<any> | undefined;
    rows?: number;
    value?: string;
}): React.JSX.Element;

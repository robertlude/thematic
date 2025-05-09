import React, { ChangeEvent, RefObject } from 'react';
export default function InputText({ className, onChange, ref, rows, value, }: {
    className?: string;
    onChange?: ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined;
    ref?: RefObject<any> | undefined;
    rows?: number;
    value?: string;
}): React.JSX.Element;

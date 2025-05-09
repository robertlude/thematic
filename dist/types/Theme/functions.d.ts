import type { Theme, ThemeComponentValue, ThemeHeadersValue } from './types';
export declare function createTheme({ name, key, body, button, panel, header, custom, }: {
    name: string;
    key: string;
    body?: ThemeComponentValue;
    button?: ThemeComponentValue;
    panel?: ThemeComponentValue;
    header?: ThemeHeadersValue;
    custom?: Record<string, any>;
}): Theme;

import type { Theme, ThemeComponentTypeDefinition, ThemeComponentValue, ThemeHeadersValue } from './types';
export declare function createTheme({ name, key, body, button, panel, header, componentTypes, custom, }: {
    name: string;
    key: string;
    body?: ThemeComponentValue;
    button?: ThemeComponentValue;
    panel?: ThemeComponentValue;
    header?: ThemeHeadersValue;
    componentTypes?: undefined | {
        Link?: ThemeComponentTypeDefinition;
    };
    custom?: Record<string, any>;
}): Theme;

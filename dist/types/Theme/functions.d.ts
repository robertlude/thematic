import type { Theme, ThemeComponentTypeDefinition, ThemeComponentValue, ThemeHeadersValue } from './types';
export declare function createTheme({ name, key, body, button, link, panel, input, header, componentTypes, custom, }: {
    name: string;
    key: string;
    body?: ThemeComponentValue;
    button?: ThemeComponentValue;
    link?: ThemeComponentValue;
    panel?: ThemeComponentValue;
    input?: {
        text?: ThemeComponentValue | undefined;
    };
    header?: ThemeHeadersValue;
    componentTypes?: undefined | {
        Link?: ThemeComponentTypeDefinition;
    };
    custom?: any;
}): Theme;

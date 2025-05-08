export default class Theme {
    private readonly _header;
    readonly name: string;
    readonly key: string;
    readonly custom: any;
    readonly body: string;
    readonly button: string;
    readonly panel: string;
    get h1(): string;
    get h2(): string;
    get h3(): string;
    get h4(): string;
    get h5(): string;
    get h6(): string;
    constructor({ name, key, body, button, panel, header, custom, }: {
        name: string;
        key: string;
        body?: string;
        button?: string;
        panel?: string;
        header?: string | {
            common: string;
            h1?: string | undefined;
            h2?: string | undefined;
            h3?: string | undefined;
            h4?: string | undefined;
            h5?: string | undefined;
            h6?: string | undefined;
        };
        custom?: Record<string, any>;
    });
}

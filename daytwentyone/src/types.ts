export type BaseInfo = {
    id: number;
    name: string;
    email: string
}


export type AdminInfo = BaseInfo & {
    roles: Array<string>;
    superRole: () => void
}


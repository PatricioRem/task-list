import { Categoria } from "./categoria";

export interface Task {
    id?: number;
    text: string;
    datetime: any;
    reminder: boolean;
    categoria: any;


}
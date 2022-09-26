import {Task} from "./Task"
export const TASKS: Task[] = [
    {
        id: 1,
        text: "Terminar primer modulo de Angular",
        datetime: 'Agosto 5 a las 12:00',
        reminder: true,
        categoria: "MEDICO"
    },
    {
        id: 2,
        text: "Hacer las compras para la cena",
        datetime: 'Agosto 5 a las 17:00',
        reminder: true,
        categoria: "TRABAJO"
    },
    {
        id: 3,
        text: "Investigar sobre Bootstrap",
        datetime: 'Agosto 5 a las 19:00',
        reminder: false,
        categoria: "ESTUDIO"
    },
    {
        id: 4,
        text: "Leer mi libro favorito",
        datetime: 'Agosto 5 a las 21:00',
        reminder: false,
        categoria: "DOMESTICO"
    },
]
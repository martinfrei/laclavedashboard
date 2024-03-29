export interface Student {
    idStudent: string
    dni: string
    nombre: string
    telefono: string
    email: string
    compras: []
    alumnoClase: []
}
export type AmountClasses = 4 | 8;

export interface Payment {
    fecha: Date,
    cantidad: number,
}

export interface StudentClass {
    claseId: number
}

export interface StudentDashboardRow {
    id: number,
    dni: string,
    email: string,
    nombre: string,
    compras: Payment[],
    alumnoClase: StudentClass[]
}
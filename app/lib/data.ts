import prisma from '@/prisma/client'
import dayjs from 'dayjs';
import { PAYMENT_VALIDITY_DAYS } from './constants';


const fetchStudents = async () => {
    const allStudents = await prisma.alumno.findMany();

    return allStudents
}

const fetchStudentById = async (idStudent: number) => {
    const student = await prisma.alumno.findFirst({ where: { id: idStudent } });
    return student
}

const fetchStudentByDNI = async (dniStudent: string) => {
    const student = await prisma.alumno.findFirst({ where: { dni: dniStudent } });
    return student
}

const fetchStudentByName = async (nameStudent: string) => {
    const students = await prisma.alumno.findMany({
        where: {
            nombre: {
                contains: nameStudent
            }
        }
    });
    return students
}


const fetchClassesTakenByStudentSinceLastPayment = async (studentId: number, lastPaymentDate: Date = new Date()) => {
    const classesTaken = await prisma.alumnoClase.count({
        where: {
            alumnoId: studentId,
            clase: {
                fecha: {
                    gte: lastPaymentDate,

                }
            }
        }
    })
    console.log({ classesTaken })
    return classesTaken
}

const isPaymentValid = async (studentId: number) => {
    const lastPaymentDate = await fetchLastDateOfPayment(studentId);
    const lastPaymentDateFormatted = dayjs(lastPaymentDate)
    const currentDate = dayjs()

    const daysBetweenDates = currentDate?.diff(lastPaymentDateFormatted, 'day')

    return daysBetweenDates <= PAYMENT_VALIDITY_DAYS

}

const fetchLastDateOfPayment = async (studentId: number) => {
    const lastPayment = await prisma.compra.findFirst({
        orderBy: {
            fecha: 'desc'
        },
        where: {
            alumnoId: studentId,
        },
    })
    console.log({ fecha: lastPayment?.fecha })
    return lastPayment?.fecha
}
const fetchStudentDashboardData = async () => {
    try {
        const datos = await prisma.alumno.findMany({
          select: {
            id: true,
            nombre: true,
            dni: true,
            email: true,
            compras: {
              select: {
                fecha: true,
                cantidad: true
              },
              orderBy: {
                fecha: 'desc'
              },
              take: 1
            },
            
          }
        });
    
        console.log(datos);
        return datos
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } 
}
export {
    fetchStudents,
    fetchStudentById,
    fetchStudentByDNI,
    fetchStudentByName,
    fetchClassesTakenByStudentSinceLastPayment,
    isPaymentValid,
    fetchLastDateOfPayment,
    fetchStudentDashboardData
}
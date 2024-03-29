import prisma from '@/prisma/client'

async function main() {

    await seedUsers()
    await seedStudents()
    await seedPayment()
    await seedClassStyle()
    await seedClass()
    await seedStudentClass()
}

const seedUsers = async () => {
    await prisma.usuario.deleteMany({});

    await prisma.usuario.create({
        data: {
            nombre: 'Martin',
            email: 'martin.frei02@gmail.com',
            password: '123456'
        }
    })

    const user = await prisma.usuario.findFirst();

    console.log({ user })
}

const seedStudents = async () => {
    await prisma.alumno.deleteMany({})
    await prisma.alumno.createMany({
        data: [{
            id: 123,
            dni: '89765248',
            nombre: 'martin',
            telefono: '114325375908',
            email: 'martin.frei02@gmail.com'
        },
        {
            id: 456,
            dni: '857395',
            nombre: 'nico',
            telefono: '116744574574',
            email: 'nico@gmail.com'
        },
        {
            id: 789,
            dni: '174983274',
            nombre: 'kari',
            telefono: '114829578295',
            email: 'kari@gmail.com'
        }
        ]
    })

    const allStudents = await prisma.alumno.findMany()
    console.log({ allStudents })
}

const seedPayment = async () => {
    await prisma.compra.deleteMany({})
    await prisma.compra.createMany({
        data: [{
            cantidad: 4,
            fecha: new Date('2024-03-02').toISOString(),
            alumnoId: 789
        },
        {
            cantidad: 4,
            fecha: new Date('2024-02-20').toISOString(),
            alumnoId: 789
        },
        {
            cantidad: 4,
            fecha: new Date('2024-02-25').toISOString(),
            alumnoId: 123
        }
    ]
    })

    const allPayments = await prisma.compra.findMany()
    console.log({ allPayments })
}


const seedClassStyle = async () => {
    await prisma.estiloClase.deleteMany({})

    await prisma.estiloClase.createMany({
        data: [
            {
                id: 100,
                nombre: 'salsa principiante',
            },
            {
                id: 101,
                nombre: 'salsa intermedio/avanzado',
            },
            {
                id: 102,
                nombre: 'bachata principiante',
            },
            {
                id: 103,
                nombre: 'lyrical jazz',
            }
        ]
    })

    const allClassStyles = await prisma.estiloClase.findMany()

    console.log(allClassStyles)
}

const seedClass = async () => {
    await prisma.clase.deleteMany({})

    await prisma.clase.createMany({
        data: [{
            id: 321,
            fecha: new Date('2024-03-01'),
            estiloClaseId: 100
        },
        {
            id: 322,
            fecha: new Date('2024-03-07'),
            estiloClaseId: 101
        },
        {
            id: 323,
            fecha: new Date('2024-03-14'),
            estiloClaseId: 102
        },
        {
            id: 324,
            fecha: new Date('2024-03-21'),
            estiloClaseId: 100
        },
        {
            id: 325,
            fecha: new Date('2024-03-28'),
            estiloClaseId: 101
        },
        {
            id: 330,
            fecha: new Date('2024-03-29'),
            estiloClaseId: 101
        },
        {
            id: 331,
            fecha: new Date('2024-03-30'),
            estiloClaseId: 101
        },
        {
            id: 326,
            fecha: new Date('2024-02-24'),
            estiloClaseId: 103
        },
        {
            id: 327,
            fecha: new Date('2024-01-24'),
            estiloClaseId: 103
        }
        ]
    })

    const allClasses = await prisma.clase.findMany()
    console.log({ allClasses })
}

const seedStudentClass = async () => {
    await prisma.alumnoClase.deleteMany({})

    await prisma.alumnoClase.createMany({
        data: [
            {
                claseId: 321,
                alumnoId: 789
            },
            {
                claseId: 322,
                alumnoId: 789
            },
            {
                claseId: 323,
                alumnoId: 789
            },
            {
                claseId: 323,
                alumnoId: 123
            },
            {
                claseId: 324,
                alumnoId: 123
            },
            {
                claseId: 325,
                alumnoId: 123
            },
            {
                claseId: 330,
                alumnoId: 123
            },
            
        ]
    })

    const allStudentClass = await prisma.alumnoClase.findMany()

    console.log({ allStudentClass })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
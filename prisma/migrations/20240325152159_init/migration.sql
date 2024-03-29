-- CreateTable
CREATE TABLE "Alumno" (
    "id" SERIAL NOT NULL,
    "dni" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Alumno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Compra" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "alumnoId" INTEGER NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clase" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "estiloClaseId" INTEGER NOT NULL,

    CONSTRAINT "Clase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlumnoClase" (
    "alumnoId" INTEGER NOT NULL,
    "claseId" INTEGER NOT NULL,

    CONSTRAINT "AlumnoClase_pkey" PRIMARY KEY ("alumnoId","claseId")
);

-- CreateTable
CREATE TABLE "EstiloClase" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "EstiloClase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_dni_key" ON "Alumno"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_telefono_key" ON "Alumno"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_email_key" ON "Alumno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Compra_alumnoId_key" ON "Compra"("alumnoId");

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clase" ADD CONSTRAINT "Clase_estiloClaseId_fkey" FOREIGN KEY ("estiloClaseId") REFERENCES "EstiloClase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumnoClase" ADD CONSTRAINT "AlumnoClase_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumnoClase" ADD CONSTRAINT "AlumnoClase_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

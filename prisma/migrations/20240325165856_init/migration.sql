-- DropForeignKey
ALTER TABLE "AlumnoClase" DROP CONSTRAINT "AlumnoClase_alumnoId_fkey";

-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_alumnoId_fkey";

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumnoClase" ADD CONSTRAINT "AlumnoClase_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "AlumnoClase" DROP CONSTRAINT "AlumnoClase_claseId_fkey";

-- AddForeignKey
ALTER TABLE "AlumnoClase" ADD CONSTRAINT "AlumnoClase_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

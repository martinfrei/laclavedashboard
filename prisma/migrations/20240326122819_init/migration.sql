-- DropForeignKey
ALTER TABLE "Clase" DROP CONSTRAINT "Clase_estiloClaseId_fkey";

-- AddForeignKey
ALTER TABLE "Clase" ADD CONSTRAINT "Clase_estiloClaseId_fkey" FOREIGN KEY ("estiloClaseId") REFERENCES "EstiloClase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

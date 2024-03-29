import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function UpdateInvoice({ id }: { id: number }) {
    return (
      <Link
        href={`/dashboard/invoices/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
    );
  }
  export function AddClass({ id }: { id: number }) {
    return (
      <Link
        href={`/dashboard/alumnos/${id}/agregar-clase`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PlusIcon className="w-5" />
      </Link>
    );
  }
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export function ClassStatus({ isValid = true }: { isValid: boolean }) {
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-full px-2 py-1 text-xs',
                {
                    'bg-green-500 text-white': isValid,
                    'bg-red-100 text-red-500': !isValid,
                },
            )}
        >
            {isValid ? (
                <>
                    Válido
                    <CheckIcon className="ml-1 w-4 text-white" />
                </>
            ) : null}
            {!isValid ? (
                <>
                    Inválido
                    <XCircleIcon className="ml-1 w-4 text-red-500" />
                </>
            ) : null}
        </span>
    );
}

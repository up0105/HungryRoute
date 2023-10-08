import React from 'react';
import classNames from 'classnames';
import { CheckIcon } from '@heroicons/react/solid';

export default function OrderStatus({ currentStatus }) {
    const statuses = ['Ordered', 'Preparing', 'Baking', 'Quality Check', 'Ready', 'Delivering', 'Delivered'];
    const currentStatusIndex = statuses.indexOf(currentStatus);

    return (
        <div className="flex justify-between items-center space-x-2 md:space-x-4">
            {statuses.map((status, index) => (
                <React.Fragment key={index}>
                    {/* Current Step */}
                    <div className="flex flex-col items-center">
                        <span
                            className={classNames(
                                index <= currentStatusIndex ? 'bg-indigo-600 dark:bg-indigo-400' : 'bg-gray-200 dark:bg-gray-600',
                                'rounded-full flex items-center justify-center w-8 h-8 text-sm font-medium text-white mb-1'
                            )}
                        >
                            {index <= currentStatusIndex ? (
                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            ) : (
                                <span className="font-bold">{index + 1}</span>
                            )}
                        </span>
                        <span className="text-sm font-medium text-center text-white">{status}</span>
                    </div>

                    {index !== statuses.length - 1 && (
                        <>
                            {/* Arrow separator for lg screens and up */}
                            <div
                                className={classNames(
                                    index < currentStatusIndex ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-200 dark:text-gray-600',
                                    'hidden md:block absolute top-0 right-0 h-full w-5'
                                )}
                                aria-hidden="true"
                            >
                                <svg
                                    className="h-full w-full text-gray-300 dark:text-gray-800"
                                    viewBox="0 0 22 80"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0 -2L20 40L0 82"
                                        vectorEffect="non-scaling-stroke"
                                        stroke="currentcolor"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

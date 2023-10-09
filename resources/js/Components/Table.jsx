import { Link } from '@inertiajs/react';

export default function Table({ items, columns, primary, action }) {
    return (
        <div className="relative overflow-x-auto border shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">{primary}</th>
                    {columns.map((column) =>
                        <th key={column} scope="col" className="px-6 py-3">{column}</th>
                    )}
                    <th scope="col" className="px-6 py-3"></th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) =>
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            #{item.id}
                        </th>
                        {columns.map((column) =>
                            <td key={column} className="px-6 py-4">
                                {item[column]}
                            </td>
                        )}
                        <td className="px-6 py-4">
                            <Link href={route(action, item.id)} className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline">
                                {/* EYE */}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
                                </svg>
                            </Link>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
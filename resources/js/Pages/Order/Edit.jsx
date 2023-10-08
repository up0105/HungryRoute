import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import OrderDetails from '@/Pages/Order/Partials/OrderDetails';

export default function All({ auth, order }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Order #{order.id}</h2>}
        >
            <Head title={'Order #' + order.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 px-4">
                                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Order Information</h3>
                                <OrderDetails order={order} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

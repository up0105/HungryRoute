import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import Table from '@/Components/Table';

export default function All({ auth, orders }) {

    const columns = [
        'size',
        'chef',
        'sauce',
        'price',
        'instructions',
        'status',
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Orders</h2>}
            action="order.create"
        >
            <Head title="Orders" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <Table items={orders} columns={columns} primary="Order Number" action="order.edit" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

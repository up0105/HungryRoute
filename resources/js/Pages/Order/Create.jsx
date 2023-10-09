import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';
import { Head, router } from '@inertiajs/react';
import OrderStatus from './Partials/OrderStatus';
import { Link } from '@inertiajs/react';    
import {useEffect} from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MakeOrderForm from './Partials/MakeOrderForm';

export default function Create({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create Order" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <MakeOrderForm className="max-w-xxl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

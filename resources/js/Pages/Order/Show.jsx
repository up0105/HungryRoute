import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';
import { Head, router } from '@inertiajs/react';
import OrderStatus from './Partials/OrderStatus';
import { Link } from '@inertiajs/react';
import './Show.css';
import {useEffect} from "react";

export default function Show({ order }) {
    
    useEffect(() => {
        setInterval(() => {
            router.reload({ only: ['order'] });
        }, 3000);
    }, []);

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <Head title={'Order #' + order.id} />
            <div className="py-8 flex justify-center items-center h-full">
                <Link href="/">
                    <img src="/img/logo.png" alt="Logo" width="100px" height="100px" className="animated-image" />
                </Link>
            </div>
            <OrderStatus currentStatus={order.status} />
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center">
                <p className="text-lg mb-4 text-gray-800 dark:text-white">{order.chef} started {order.status.toLowerCase()} your order <span className="underline font-semibold">{order.last_updated}</span></p>
                <div className="flex justify-center">
                    <Link href="/">
                        <button className="btn btn-primary">Go back home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

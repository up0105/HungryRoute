<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        return Inertia::render('Order/All', [
            'orders' => $orders
        ]);
    }

    public function create()
    {
        return Inertia::render('Order/Create');
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Order $order)
    {
        return Inertia::render('Order/Show', [
            'order' => $order
        ]);
    }

    public function edit(Order $order)
    {
        return Inertia::render('Order/Edit', [
            'order' => $order
        ]);
    }

    public function update(Request $request, Order $order)
    {
        $order->update([
            'status' => $request->status
        ]);
    }

    public function destroy(Order $order)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    public function index() : Response
    {
        $orders = Order::all();
        return Inertia::render('Order/All', [
            'orders' => $orders
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Order/Create');
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Order $order): Response
    {
        return Inertia::render('Order/Show', [
            'order' => $order
        ]);
    }

    public function edit(Order $order): Response
    {
        return Inertia::render('Order/Edit', [
            'order' => $order
        ]);
    }

    public function update(Request $request, Order $order) : void
    {
        $order->update([
            'status' => $request->status
        ]);
    }
}

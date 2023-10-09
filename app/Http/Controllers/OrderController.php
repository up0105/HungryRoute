<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    public function index() : Response
    {
        $orders = Order::latest()->get();
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
        $request->validate([
            'size' => 'required',
            'crust' => 'required',
            'sauce' => 'required',
            'toppings' => 'required',
            'instructions' => 'required',
        ], [
            'size.required' => 'Come on, you can\'t have a pizza without picking a size!',
            'crust.required' => 'We need to know how to hold all those delicious toppings!',
            'sauce.required' => 'Every pizza needs a saucy foundation! Please pick one.',
            'toppings.required' => 'A pizza without toppings is like a sky without stars. Choose at least one!',
            'instructions.required' => 'We won\'t judge if you want to keep it simple, but we need to know!'
        ]);

        $order = Order::create([
            'user_id' => User::all()->random()->id,
            'size' => $request->size,
            'crust' => $request->crust,
            'sauce' => $request->sauce,
            'toppings' => $request->toppings,
            'instructions' => $request->instructions,
            'price' => $request->price,
            'status' => 'Ordered'
        ]);

        return Redirect::route('order.index');
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

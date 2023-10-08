<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $toppingOptions = ['pepperoni', 'sausage', 'bacon', 'pineapple', 'mushrooms', 'onions', 'olives', 'peppers'];
        $instructions = [
            'Double cheese, please!',
            'Add some jalapeños for an extra kick!',
            'Make it extra spicy, if you can!',
            'Load up on the veggies, please!',
            'Can I get it with a side of garlic aioli?',
            'Make it crispy, if possible!',
            'Could you make it gluten-free, please?',
            'A little extra seasoning, please!',
            'Add some avocado slices, if available!',
            'Could I get it well-done, please?',
        ];

        return [
            'id' => rand(11111, 999999),
            'user_id' => rand(1, 10),
            'status' => $this->faker->randomElement(['Ordered', 'Preparing', 'Baking', 'Quality Check', 'Ready', 'Delivering', 'Delivered']),
            'size' => $this->faker->randomElement(['Small', 'Medium', 'Large']),
            'crust' => $this->faker->randomElement(['Normal', 'Thin', 'Garlic']),
            'sauce' => $this->faker->randomElement(['tomato', 'bbq', 'alfredo']),
            'toppings' => $this->faker->randomElements($toppingOptions, $this->faker->numberBetween(3, 4)),
            'instructions' => $this->faker->randomElement($instructions),
            'price' => $this->faker->randomFloat(2, 200, 1000),
        ];
    }
}

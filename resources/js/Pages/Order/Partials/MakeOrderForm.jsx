import React from 'react';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Transition } from '@headlessui/react';

export default function MakeOrderForm({ className }) {
    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        toppings: [],
        size: '',
        crust: '',
        sauce: '',
        instructions: '',
        price: '',
    });

    const toggleCheckbox = (array, value) => {
        return array.includes(value)
            ? array.filter(item => item !== value)
            : [...array, value];
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route('order.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    const toppingOptions = ['Pepperoni', 'Sausage', 'Onions', 'Peppers', 'Pineapple', 'Ham', 'Spinach', 'Artichokes', 'Mushrooms', 'Anchovies'];
    const sizeOptions = ['Small', 'Medium', 'Large', 'Extra Large'];
    const crustOptions = ['Thin', 'Thick', 'Stuffed', 'Garlic'];
    const sauceOptions = ['Tomato', 'Alfredo', 'Pesto', 'BBQ'];

    const calculatePrice = () => {
        // Calculate the price of the pizza based on the size, crust, and toppings
        // Base price
        let price = 10;

        // Size
        if (data.size === 'Small') {
            price += 0;
        } else if (data.size === 'Medium') {
            price += 2;
        } else if (data.size === 'Large') {
            price += 4;
        } else if (data.size === 'Extra Large') {
            price += 6;
        }

        // Crust
        if (data.crust === 'Thin') {
            price += 0;
        } else if (data.crust === 'Thick') {
            price += 2;
        } else if (data.crust === 'Stuffed') {
            price += 4;
        } else if (data.crust === 'Garlic') {
            price += 6;
        }

        const random_int = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Toppings: Each toppings has different prices
        if (data.toppings.length > 0) {
            data.toppings.forEach((topping) => {
                if (topping === 'Pepperoni') {
                    price += random_int(20, 30);
                } else if (topping === 'Sausage') {
                    price += random_int(20, 30);
                } else if (topping === 'Onions') {
                    price += random_int(20, 30);
                } else if (topping === 'Peppers') {
                    price += random_int(20, 30);
                } else if (topping === 'Pineapple') {
                    price += random_int(20, 30);
                } else if (topping === 'Ham') {
                    price += random_int(20, 30);
                } else if (topping === 'Spinach') {
                    price += random_int(20, 30);
                } else if (topping === 'Artichokes') {
                    price += random_int(20, 30);
                } else if (topping === 'Mushrooms') {
                    price += random_int(20, 30);
                } else if (topping === 'Anchovies') {
                    price += random_int(20, 30);
                }
            });
        }

        // Sauce
        if (data.sauce === 'Tomato') {
            price += 0;
        } else if (data.sauce === 'Alfredo') {
            price += 2;
        } else if (data.sauce === 'Pesto') {
            price += 4;
        } else if (data.sauce === 'BBQ') {
            price += 6;
        }

        setData('price', price);
    };

    React.useEffect(() => {
        calculatePrice();
    }
    , [data.toppings, data.size, data.crust, data.sauce]);

    return (
        <section className={className}>

            <Head title="Make an Order" />

            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Make an Order</h2>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel value="Toppings" />
                    <div className="flex flex-wrap">
                        {toppingOptions.map((option, index) => (
                            <div key={index} className="flex items-center mr-4 mb-2">
                                <Checkbox
                                    id={`topping_${option}`}
                                    checked={data.toppings.includes(option)}
                                    onChange={() => setData('toppings', toggleCheckbox(data.toppings, option))}
                                    className="mr-2 h-4 w-4 border-gray-300 rounded"
                                />
                                <label htmlFor={`topping_${option}`} className='text-white'>{option}</label>
                            </div>
                        ))}
                    </div>

                    <InputError message={errors.toppings} className="mt-2" />
                </div>

                <div>
                    <InputLabel value="Size" />
                    <div className="flex flex-wrap">
                    {sizeOptions.map((option, index) => (
                        <div key={index} className="flex items-center mr-4 mb-2">
                            <Checkbox
                                id={`size_${option}`}
                                checked={data.size === option}
                                onChange={() => setData('size', option)}
                                className="mr-2 h-4 w-4 border-gray-300 rounded"
                            />
                            <label htmlFor={`size_${option}`} className='text-white'>{option}</label>
                        </div>
                    ))}
                    </div>

                    <InputError message={errors.size} className="mt-2" />
                </div>

                <div>
                    <InputLabel value="Crust" />
                    <div className="flex flex-wrap">
                        {crustOptions.map((option, index) => (
                            <div key={index} className="flex items-center mr-4 mb-2">
                                <Checkbox
                                    id={`crust_${option}`}
                                    checked={data.crust === option}
                                    onChange={() => setData('crust', option)}
                                    className="mr-2 h-4 w-4 border-gray-300 rounded"
                                />
                                <label htmlFor={`crust_${option}`} className='text-white'>{option}</label>
                            </div>
                        ))}
                    </div>

                    <InputError message={errors.crust} className="mt-2" />
                </div>

                <div>
                    <InputLabel value="Sauce" />
                    <div className="flex flex-wrap">
                        {sauceOptions.map((option, index) => (
                            <div key={index} className="flex items-center mr-4 mb-2">
                                <Checkbox
                                    id={`sauce_${option}`}
                                    checked={data.sauce === option}
                                    onChange={() => setData('sauce', option)}
                                    className="mr-2 h-4 w-4 border-gray-300 rounded"
                                />
                                <label htmlFor={`sauce_${option}`} className='text-white'>{option}</label>
                            </div>
                        ))}
                    </div>

                    <InputError message={errors.sauce} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="instructions" value="Instructions" />

                    <TextInput
                        id="instructions"
                        value={data.instructions}
                        onChange={(e) => setData('instructions', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="instructions"
                    />
                
                    <InputError message={errors.instructions} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="price" value="Price" />

                    <TextInput
                        id="price"
                        type="number"
                        className="mt-1 block w-full"
                        autoComplete="price"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                    />

                    <InputError message={errors.price} className="mt-2" />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton type="submit" disabled={processing}>Place Order</PrimaryButton>
                    
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    ></Transition>
                </div>
            </form>
        </section>
    );
}

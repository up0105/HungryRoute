import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import SelectInput from '@/Components/SelectInput';

export default function OrderDetails({ order, className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        size: order.size,
        crust: order.crust,
        sauce: order.sauce,
        toppings: order.toppings,
        status: order.status,
        instructions: order.instructions,
        price: order.price,
    });

    const statusOptions = [
        'Ordered', 'Preparing', 'Baking', 'Quality Check', 'Ready', 'Delivering', 'Delivered'
    ];

    function submit(e) {
        e.preventDefault();
        patch(route('order.update', order.id), {
            preserveScroll: true,
        });
    }

    return (
        <section className={className} onSubmit={submit}>
            <form className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="size" value="Size" />

                    <TextInput
                        name="size"
                        type="text"
                        value={data.size}
                        className="mt-1 block w-full"
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="crust" value="Crust" />

                    <TextInput
                        name="crust"
                        type="text"
                        value={data.crust}
                        className="mt-1 block w-full"
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="sauce" value="Sauce" />

                    <TextInput
                        name="sauce"
                        type="text"
                        value={data.sauce}
                        className="mt-1 block w-full"
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="toppings" value="Toppings" />
                    <TextInput
                        name="toppings"
                        type="text"
                        value={data.toppings}
                        className="mt-1 block w-full"
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <SelectInput
                        name="status"
                        value={data.status}
                        className="mt-1 block w-full"
                        options={statusOptions}
                        onChange={(e) => setData('status', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="instructions" value="Instructions" />

                    <TextInput
                        name="instructions"
                        type="text"
                        value={data.instructions}
                        className="mt-1 block w-full"
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="price" value="Price" />

                    <TextInput
                        name="price"
                        type="text"
                        value={order.price}
                        className="mt-1 block w-full"
                        disabled
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}

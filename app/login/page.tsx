'use client';

import { useRouter } from "next/navigation";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import { signIn, useSession } from "next-auth/react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "@/app/components/buttons/Button";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const session = useSession();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    if (session?.data?.user?.email) {
        router.push('/');
        return null;
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (data.email === '' || data.password === '') {
            toast.error('Por favor, llene todos los campos');
            return;
        }
        setIsLoading(true);
        signIn('credentials', {
            ...data,
            redirect: false,
        })
        .then((callback) => {
            if(callback?.error) {
                toast.error("Correo y/o contraseña incorrectos");
            }
            if (callback?.ok) {
                toast.success('Inicio de sesión exitos\nBienvenido');
                router.refresh();
                window.location.href = '/';
            }
        })
        .finally(() => setIsLoading(false))
    };
    
    
    return (
        <div className="w-full my-32 items-center justify-center flex flex-row">
            <div className="w-[80vw] text-sm md:text-md md:w-[60vw] lg:w-[50vw]">
                <div className="flex flex-col gap-4">
                    <Heading 
                        center
                        title="Bienvenido a Arbolista" 
                        subtitle="Inicia sesion y ayudanos a crear un mejor catalogo de plantas de Guayaquil."
                    />
                    <hr />
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <Input 
                        disabled={isLoading}
                        id="email" 
                        type="email"
                        label='Correo' 
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input 
                        disabled={isLoading}
                        id="password" 
                        type='password'
                        label='Contraseña' 
                        register={register}
                        errors={errors}
                        required
                    />
                    <Button label="Iniciar sesion" onClick={handleSubmit(onSubmit)} disabled={isLoading} />
                </div>
                <div className="flex flex-col gap-4 mt-3">
                    <div className='text-neutral-500 text-center mt-4 font-light'>
                        <div className='justify-center flex flex-row items-center gap-2'>
                            <div>¿Aun no tienes una cuenta?</div>
                            <div className='text-green-500 font-semibold cursor-pointer hover:underline'>
                            <Link href="/register">Registrate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
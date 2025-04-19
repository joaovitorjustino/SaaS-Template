"use client";

import { useStripe } from "../hooks/useStripe";

export default function Pagamentos() {
    const {
        createPaymentStripeChekout,
        createSubscripitionStripeChekout,
        handleCreateStripePortal
    } = useStripe();
    
    return(
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Pagamento</h1>
            <button className="border rounded-md px-1 mr-2 cursor-pointer" onClick={() => createPaymentStripeChekout({testId: "123"})}>Criar Pagamento Stripe</button>
            <button className="border rounded-md px-1 mr-2 cursor-pointer" onClick={() => createSubscripitionStripeChekout({testId: "123"})}>Criar Assinatura Stripe</button>
            <button className="border rounded-md px-1 mr-2 cursor-pointer" onClick={handleCreateStripePortal}>Criar Portal de Pagamentos</button>
        </div>
    )
}
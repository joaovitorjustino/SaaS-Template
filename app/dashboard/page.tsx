import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { handleAuth } from "../actions/handle-auth";
import Link from "next/link";

export default async function Dashboard() {
    const session = await auth();

    if (!session){
        redirect("/login")
    }
    

    return(
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">
              Protected Deshboard
            </h1>
            <p className="">{session?.user?.email ? session?.user?.email : "Usuáriso não esta logado."}</p>
            {session?.user?.email && (
                <form action={handleAuth}>
                    <button type="submit" className="border rounded-md px-2 cursor-pointer">Logout</button>
                </form>
            )}
            <Link href="/pagamentos">
                Pagamentos
            </Link>
        </div>
    );
}
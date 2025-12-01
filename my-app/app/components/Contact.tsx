
import { type ReactNode } from 'react'

import { createTask, getTasks } from './Tickets'



type contactsProps = {
    sectionName: string
    title: string
    company: string
    date: string
    children?: ReactNode
}

export default async function Contacts(props: contactsProps) {
    const tickets = await getTasks()
    return (
        <section className="relative max-w-[1000px] mx-auto my-[40px] p-[30px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">

            {/* + Button */}
            <form action={createTask}>
                <label>
                    New task: <input name="message" />
                </label>
                <button
                    className="absolute top-4 right-4 bg-[#667eea] text-white w-8 h-8 rounded-full
                   flex items-center justify-center text-xl font-bold
                   hover:bg-[#5566d4] transition cursor-pointer"
                >
                    +
                </button>
            </form>
            <ul>
                {tickets.map((tickets, id) => (
                    <li>{tickets.message}</li>
                ))}
            </ul>

            

        </section>
    )
}

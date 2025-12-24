import { type ReactNode } from 'react'

//import { createTask, getTasks } from './Tickets'

import { getSkills, addSkill } from '../../lib/tasks'

export default async function Skills() {
    const skills = await getSkills()
    return (
        <section className="relative max-w-[1000px] mx-auto my-[40px] p-[30px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">

            {/* + Button */}
            <form action={addSkill}>
                <label>
                    New skill: <input name="title" />
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
                {skills.map((skill) => (
                    <li key={skill.id} className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span>{skill.title}</span>
                        <div className="flex gap-2">
                            {/* Edit Button */}
                            <button
                                className="bg-blue-500 text-white w-8 h-8 rounded flex items-center justify-center
                                hover:bg-blue-600 transition cursor-pointer"
                                title="Éditer"
                            >
                                ✏️
                            </button>
                            
                            {/* Delete Button */}
                            <button
                                className="bg-red-500 text-white w-8 h-8 rounded flex items-center justify-center
                                hover:bg-red-600 transition cursor-pointer"
                                title="Supprimer"
                            >
                                🗑️
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

        </section>
    )
}
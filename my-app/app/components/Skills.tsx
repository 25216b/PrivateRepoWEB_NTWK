import { type ReactNode } from 'react'

//import { createTask, getTasks } from './Tickets'

import { getSkills, addSkill, removeSkill, editSkill } from '../../lib/tasks'

export default async function Skills() {
    const skills = await getSkills()
    return (
        <section className="relative max-w-[1000px] mx-auto my-[40px] p-[30px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">

            {/* + Button */}
            <form action={addSkill}>
                <label>
                    New skill: <input name="title" className="border rounded px-2 py-1" />
                </label>
                <button 
                    className="absolute top-4 right-4 bg-[#667eea] text-white w-8 h-8 rounded-full
                   flex items-center justify-center text-xl font-bold
                   hover:bg-[#5566d4] transition cursor-pointer"
                >
                    +
                </button>
            </form>
            <ul className="mt-4">
                {skills.map((skill) => (
                    <li key={skill.id} className="flex items-center justify-between py-3 border-b border-gray-200">
                        <span>{skill.title}</span>
                        <div className="flex gap-2">
                            {/* Edit Button - Opens edit form */}
                            <form action={editSkill} className="inline">
                                <input type="hidden" name="id" value={skill.id} />
                                <details className="relative">
                                    <summary className="bg-blue-500 text-white w-8 h-8 rounded flex items-center justify-center
                                    hover:bg-blue-600 transition cursor-pointer list-none"
                                    title="Éditer">
                                        ✏️
                                    </summary>
                                    <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg p-3 z-10 min-w-[200px]">
                                        <input 
                                            type="text" 
                                            name="title" 
                                            defaultValue={skill.title}
                                            className="border rounded px-2 py-1 w-full mb-2"
                                            placeholder="Nouveau titre"
                                        />
                                        <button 
                                            type="submit"
                                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 w-full"
                                        >
                                            Sauvegarder
                                        </button>
                                    </div>
                                </details>
                            </form>
                            
                            {/* Delete Button */}
                            <form action={removeSkill.bind(null, skill.id)} className="inline">
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white w-8 h-8 rounded flex items-center justify-center
                                    hover:bg-red-600 transition cursor-pointer"
                                    title="Supprimer"
                                >
                                    🗑️
                                </button>
                            </form>
                        </div>
                    </li>
                ))}
            </ul>

        </section>
    )
}
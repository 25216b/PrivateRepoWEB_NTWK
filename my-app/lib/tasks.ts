'use server'

import { db } from '@/db'
import { skillsTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getSkills() {
  return await db.select().from(skillsTable)
}

export async function addSkill(form: FormData) {
  await db.insert(skillsTable).values({
    title: String(form.get('title')),
    done: false,
  })
  revalidatePath('/') 

  redirect((await headers()).get('referer') ?? '/')
}

export async function editSkill(form: FormData) {
  await db
    .update(skillsTable)
    .set({
      title: String(form.get('title')),
      done: form.get('done') === 'on',
    })
    .where(eq(skillsTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeSkill(id: string) {
  await db.delete(skillsTable).where(eq(skillsTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}
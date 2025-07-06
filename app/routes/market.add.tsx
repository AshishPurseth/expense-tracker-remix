import { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/react'
import { MarketForm } from '~/component'

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()

    const raw = Object.fromEntries(formData) // ✅ Converts to plain object

    const { title, category } = raw

    if (typeof title !== 'string' || typeof category !== 'string') {
        return { error: 'Invalid form data' }
    }

    // Save to DB or further logic here

    return redirect('/market')
}

export default function MarketAdd() {
    return (
        <>
            <MarketForm />
        </>
    )
}

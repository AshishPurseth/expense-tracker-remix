import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
    return [{ title: 'Expense  Tracker' }, { name: 'description', content: 'Welcome to Expense Tracker' }]
}

export default function Index() {
    return <h2>Hello</h2>
}

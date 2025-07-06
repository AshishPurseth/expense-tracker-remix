/** @type {import('lint-staged').Config} */
const config = {
    '*.{js,ts,tsx,cjs}': ['pnpm lint', 'pnpm format:fix'],
    '*.scss': ['pnpm lint:stylelint', 'pnpm format:fix'],
    '*.{json,html,md,yml,yaml}': ['pnpm format:fix']
}

export default config

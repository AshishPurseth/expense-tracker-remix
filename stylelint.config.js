/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard-scss', // SCSS support + standard rules
        'stylelint-config-prettier-scss' // disables conflicting prettier rules
    ],
    plugins: ['stylelint-scss'],
    rules: {
        // fixes issue with unknown SCSS at-rules like @use, @include, etc.
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'selector-class-pattern': null
    }
}

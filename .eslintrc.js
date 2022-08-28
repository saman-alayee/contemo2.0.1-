const MAX_CHARS = 120;
const SPACES_PER_TAB = 4;
const MAX_NESTED_CALLBACKS = 3;
const MAX_PARAMS = 6;

module.exports = {
	// http://eslint.org/docs/rules/
	ecmaFeatures: {
		arrowFunctions: true,
		binaryLiterals: true,
		blockBindings: true,
		classes: true,
		defaultParams: true,
		destructuring: true,
		forOf: true,
		generators: false,
		modules: true,
		objectLiteralComputedProperties: true,
		objectLiteralDuplicateProperties: true,
		objectLiteralShorthandMethods: true,
		objectLiteralShorthandProperties: true,
		octalLiterals: true,
		regexUFlag: true,
		regexYFlag: true,
		restParams: true,
		spread: true,
		superInFunctions: true,
		templateStrings: true,
		unicodeCodePointEscapes: true,
		globalReturn: true,
		jsx: false,
	},

	env: {
		browser: true,
		node: true,
		amd: true,
		mocha: true,
		jasmine: true,
		phantomjs: true,
		jquery: true,
		prototypejs: true,
		shelljs: true,
	},

	globals: {},

	plugins: ['vue'],

	rules: {
		////////// Possible Errors //////////
		'comma-dangle': [2, 'always-multiline'],
		'no-cond-assign': 2,
		'no-console': 1,
		'no-constant-condition': 2,
		'no-control-regex': 2,
		'no-debugger': 1,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-empty': 2,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-parens': 0,
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-inner-declarations': 2,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-regex-spaces': 2,
		'no-sparse-arrays': 2,
		'no-unreachable': 2,
		'use-isnan': 2,
		'valid-jsdoc': 2,
		'valid-typeof': 2,
		'no-unexpected-multiline': 2,

		////////// Best Practices //////////

		'accessor-pairs': 0,
		'block-scoped-var': 0,
		complexity: 'off',
		'consistent-return': 0,
		curly: 2,
		'default-case': 2,
		'dot-location': [2, 'property'],
		// 'dot-notation': 2,
		eqeqeq: 2,
		'guard-for-in': 0,
		'no-alert': 2,
		'no-caller': 0,
		'no-div-regex': 0,
		// 'no-else-return': 2,
		'no-empty-label': 0,
		'no-empty-pattern': 0,
		'no-eval': 2,
		'no-extend-native': 0,
		'no-extra-bind': 0,
		'no-fallthrough': 2,
		'no-floating-decimal': 0,
		'no-implied-eval': 0,
		'no-iterator': 0,
		'no-labels': 0,
		'no-lone-blocks': 0,
		'no-loop-func': 0,
		'no-multi-spaces': 2,
		'no-multi-str': 0,
		'no-native-reassign': 0,
		'no-new-func': 0,
		'no-new-wrappers': 0,
		'no-new': 0,
		'no-octal-escape': 0,
		'no-octal': 0,
		'no-param-reassign': 0,
		'no-process-env': 0,
		'no-proto': 0,
		'no-redeclare': 0,
		'no-return-assign': 0,
		'no-script-url': 0,
		'no-self-compare': 0,
		'no-sequences': 0,
		'no-throw-literal': 0,
		'no-unused-expressions': 0,
		'no-void': 0,
		'no-warning-comments': 0,
		'no-with': 0,
		radix: 0,
		'vars-on-top': 0,
		'wrap-iife': 0,
		yoda: 0,

		////////// Strict Mode //////////

		strict: [2, 'global'],

		////////// Variables //////////

		'no-catch-shadow': 0,
		'no-delete-var': 2,
		'no-label-var': 0,
		'no-shadow': 0,
		'no-shadow-restricted-names': 0,
		'no-undef': 2,
		'no-undef-init': 0,
		'no-undefined': 0,
		'no-unused-vars': 2,
		'no-use-before-define': 0,

		////////// Node.js //////////

		// 'global-require': 2,
		'handle-callback-err': [2, '^.*(e|E)rr'],
		'no-mixed-requires': 0,
		'no-new-require': 0,
		'no-path-concat': 0,
		'no-process-exit': 0,
		'no-restricted-modules': 0,
		'no-sync': 0,

		////////// Stylistic Issues //////////

		'array-bracket-spacing': [2, 'never'],
		'block-spacing': [2, 'never'],
		'brace-style': [2, '1tbs', { allowSingleLine: true }],
		camelcase: 2,
		'comma-spacing': [2, { before: false, after: true }],
		'comma-style': [2, 'last'],
		'computed-property-spacing': [2, 'never'],
		// 'consistent-this': [2, 'self'],
		'eol-last': 2,
		'func-names': 0,
		'key-spacing': [2, { beforeColon: false, afterColon: true }],
		'linebreak-style': [2, 'unix'],
		'max-nested-callbacks': [2, MAX_NESTED_CALLBACKS],
		'new-cap': 2,
		'new-parens': 2,
		'no-array-constructor': 2,
		'no-continue': 0,
		'no-inline-comments': 2,
		// 'no-lonely-if': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-multiple-empty-lines': [2, { max: 1 }],
		'no-nested-ternary': 2,
		'no-new-object': 2,
		'no-spaced-func': 2,
		'no-ternary': 0,
		'no-trailing-spaces': 2,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 0,
		'one-var': [2, 'never'],
		'operator-assignment': 0,
		'operator-linebreak': 0,
		'padded-blocks': 0,
		'quote-props': [2, 'as-needed'],
		quotes: ['warn', 'single', 'avoid-escape'],
		'semi-spacing': 2,
		semi: [2, 'always'],
		'sort-vars': 2,
		'space-before-blocks': 2,
		// 'space-before-function-paren': [2, 'never'],
		'space-in-parens': [2, 'never'],
		'space-infix-ops': 2,
		'space-unary-ops': [2, { words: true, nonwords: false }],

		'wrap-regex': 0,

		////////// ECMAScript 6 //////////

		'constructor-super': 0,
		'generator-star-spacing': 0,
		'no-this-before-super': 0,
		'no-var': 0,
		'object-shorthand': 0,
		'prefer-const': 0,

		////////// Legacy //////////

		'max-depth': 2,
		'max-len': [2, MAX_CHARS, SPACES_PER_TAB],
		'max-params': [2, MAX_PARAMS],
		'no-bitwise': 2,
		'no-plusplus': 0,
	},

	extends: ['eslint:recommended', 'plugin:vue/essential'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		parser: 'babel-eslint',
	},
};

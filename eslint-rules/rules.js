/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  rules: {
    // The rules below are listed in the order they appear on the eslint
    // rules page. All rules are listed to make it easier to keep in sync
    // as new ESLint rules are added.
    // http://eslint.org/docs/rules/
    // - Rules in the `eslint:recommended` ruleset that aren't specifically
    //   mentioned by the google styleguide are listed but commented out (so
    //   they don't override a base ruleset).
    // - Rules that are recommended but contradict the Google styleguide
    //   are explicitely set to the Google styleguide value.

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'no-cond-assign': 0, // eslint:recommended
    // 'no-console': 1, // eslint:recommended
    // 'no-constant-condition': 1, // eslint:recommended
    // 'no-control-regex': 1, // eslint:recommended
    // 'no-debugger': 1, // eslint:recommended
    // 'no-dupe-args': 1, // eslint:recommended
    // 'no-dupe-keys': 1, // eslint:recommended
    // 'no-duplicate-case': 1, // eslint:recommended
    // 'no-empty-character-class': 1, // eslint:recommended
    // 'no-empty': 1, // eslint:recommended
    // 'no-ex-assign': 1, // eslint:recommended
    // 'no-extra-boolean-cast': 1, // eslint:recommended
    // 'no-extra-parens': 0,
    // 'no-extra-semi': 1, // eslint:recommended
    // 'no-func-assign': 1, // eslint:recommended
    // 'no-inner-declarations': 1, // eslint:recommended
    // 'no-invalid-regexp': 1, // eslint:recommended
    'no-irregular-whitespace': 1, // eslint:recommended
    // 'no-obj-calls': 1, // eslint:recommended
    // 'no-prototype-builtins': 0,
    // 'no-regex-spaces': 1, // eslint:recommended
    // 'no-sparse-arrays': 1, // eslint:recommended
    // 'no-template-curly-in-string': 0,
    'no-unexpected-multiline': 1, // eslint:recommended
    // 'no-unreachable': 1, // eslint:recommended
    // 'no-unsafe-finally': 1, // eslint:recommended
    // 'no-unsafe-negation': 0,
    // 'use-isnan': 2 // eslint:recommended
    'valid-jsdoc': [1, {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
      prefer: {returns: 'return'},
    }],
    // 'valid-typeof': 2 // eslint:recommended


    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------

    // 'accessor-pairs': 0,
    // 'array-callback-return': 0,
    // 'block-scoped-var': 0,
    // 'class-methods-use-this': 0,
    // 'complexity': 0,
    // 'consistent-return': 0
    // 'curly': 0, // TODO(philipwalton): add an option to enforce braces with
                   // the exception of simple, single-line if statements.
    // 'default-case': 0,
    // 'dot-location': 0,
    // 'dot-notation': 0,
    // 'eqeqeq': 0,
    'guard-for-in': 1,
    // 'no-alert': 0,
    'no-caller': 1,
    // 'no-case-declarations': 1, // eslint:recommended
    // 'no-div-regex': 0,
    // 'no-else-return': 0,
    // 'no-empty-function': 0,
    // 'no-empty-pattern': 1, // eslint:recommended
    // 'no-eq-null': 0,
    // 'no-eval': 0,
    'no-extend-native': 1,
    'no-extra-bind': 1,
    // 'no-extra-label': 0,
    // 'no-fallthrough': 1, // eslint:recommended
    // 'no-floating-decimal': 0,
    // 'no-global-assign': 0,
    // 'no-implicit-coercion': 0,
    // 'no-implicit-globals': 0,
    // 'no-implied-eval': 0,
    'no-invalid-this': 1,
    // 'no-iterator': 0,
    // 'no-labels': 0,
    // 'no-lone-blocks': 0,
    // 'no-loop-func': 0,
    // 'no-magic-numbers': 0,
    'no-multi-spaces': 0,
    'no-multi-str': 1,
    // 'no-new-func': 0,
    'no-new-wrappers': 1,
    // 'no-new': 0,
    // 'no-octal-escape': 0,
    // 'no-octal': 1, // eslint:recommended
    // 'no-param-reassign': 0,
    // 'no-proto': 0,
    // 'no-redeclare': 1, // eslint:recommended
    // 'no-return-assign': 0,
    // 'no-script-url': 0,
    // 'no-self-assign': 1, // eslint:recommended
    // 'no-self-compare': 0,
    // 'no-sequences': 0,
    'no-throw-literal': 1, // eslint:recommended
    // 'no-unmodified-loop-condition': 0,
    // 'no-unused-expressions': 0,
    // 'no-unused-labels': 1, // eslint:recommended
    // 'no-useless-call': 0,
    // 'no-useless-concat': 0,
    // 'no-useless-escape': 0,
    // 'no-void': 0,
    // 'no-warning-comments': 0,
    'no-with': 1,
    // 'radix': 0,
    // 'vars-on-top': 0,
    // 'wrap-iife': 0,
    // 'yoda': 0,

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    // 'script': 0,

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    // 'init-declarations': 0,
    // 'no-catch-shadow': 0,
    // 'no-delete-var': 1, // eslint:recommended
    // 'no-label-var': 0,
    // 'no-restricted-globals': 0,
    // 'no-shadow-restricted-names': 0,
    // 'no-shadow': 0,
    // 'no-undef-init': 0,
    // 'no-undef': 1, // eslint:recommended
    // 'no-undefined': 0,
    'no-unused-vars': [1, {args: 'none'}], // eslint:recommended
    // 'no-use-before-define': 0,

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -------------------------------------------------
    // 'callback-return': 0,
    // 'global-require': 0,
    // 'handle-callback-err': 0,
    // 'no-mixed-requires': 0,
    // 'no-new-require': 0,
    // 'no-path-concat': 0,
    // 'no-process-env': 0,
    // 'no-process-exit': 0,
    // 'no-restricted-modules': 0,
    // 'no-restricted-properties': 0,
    // 'no-sync': 0,

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'array-bracket-spacing': [1, 'never'],
    // 'block-spacing': 0,
    'brace-style': 0,
    // 'camelcase': [0, {properties: 'never'}],
    'comma-dangle': [1, 'always-multiline'],
    'comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': 1,
    // 'consistent-this': 0,
    'eol-last': 1,
    'func-call-spacing': 1,
    // 'func-name-matching': 0,
    // 'func-names': 0,
    // 'func-style': 0,
    // 'id-blacklist': 0,
    // 'id-length': 0,
    // 'id-match': 0,
    // 'indent': 0, // TODO(philipwalton): this rule isn't compatible with
                    // Google's 4-space indent for line continuations.
    // 'jsx-quotes': 0,
    // 'key-spacing': 1,
    'keyword-spacing': 0,
    // 'line-comment-position': 0,
    'linebreak-style': 1,
    // 'lines-around-comment': 0,
    // 'lines-around-directive': 0,
    // 'max-depth': 0,
    // 'max-len': [1, {
    //   code: 80,
    //   tabWidth: 2,
    //   ignoreUrls: true,
    //   ignorePattern: '^goog\.(module|require)',
    // }],
    // 'max-lines': 0,
    // 'max-nested-callbacks': 0,
    // 'max-params': 0,
    // 'max-statements-per-line': 0,
    // 'max-statements': 0,
    // 'multiline-ternary': 0, // TODO(philipwalton): add a rule to enforce the
                               // operator appearing at the end of the line.
    'new-cap': 1,
    // 'new-parens': 0,
    // 'newline-after-var': 0,
    // 'newline-before-return': 0,
    // 'newline-per-chained-call': 0,
    'no-array-constructor': 1,
    // 'no-bitwise': 0,
    // 'no-continue': 0,
    // 'no-inline-comments': 0,
    // 'no-lonely-if': 0,
    // 'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 1, // eslint:recommended
    'no-multiple-empty-lines': [1, {max: 2}],
    // 'no-negated-condition': 0,
    // 'no-nested-ternary': 0,
    'no-new-object': 1,
    // 'no-plusplus': 0,
    // 'no-restricted-syntax': 0,
    // 'no-tabs': 0,
    // 'no-ternary': 0,
    'no-trailing-spaces': 1,
    // 'no-underscore-dangle': 0,
    // 'no-unneeded-ternary': 0,
    // 'no-whitespace-before-property': 0,
    // 'object-curly-newline': 0,
    'object-curly-spacing': 1,
    // 'object-property-newline': 0,
    // 'one-var-declaration-per-line': 0,
    // 'one-var': [1, {
    //   var: 'never',
    //   let: 'never',
    //   const: 'never',
    // }],
    // 'operator-assignment': 0,
    // 'operator-linebreak': 0,
    // 'padded-blocks': [1, 'never'],
    'quote-props': [1, 'consistent'],
    'quotes': [1, 'single', {allowTemplateLiterals: true}],
    'require-jsdoc': [0, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    'semi-spacing': 1,
    'semi': 1,
    // 'sort-keys': 0,
    // 'sort-vars': 0,
    'space-before-blocks': 1,
    'space-before-function-paren': [1, 'never'],
    // 'space-in-parens': 0,
    // 'space-infix-ops': 0,
    // 'space-unary-ops': 0,
    'spaced-comment': [1, 'always'],
    // 'unicode-bom': 0,
    // 'wrap-regex': 0,

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    // 'arrow-body-style': 0,
    'arrow-parens': [1, 'always'], // TODO(philipwalton): technically arrow
                                   // parens are optional but recommended.
                                   // ESLint doesn't support a *consistent*
                                   // setting so "always" is used.
    // 'arrow-spacing': 0,
    'constructor-super': 1, // eslint:recommended
    'generator-star-spacing': [1, 'after'],
    // 'no-class-assign': 0,
    // 'no-confusing-arrow': 0,
    // 'no-const-assign': 0, // eslint:recommended
    // 'no-dupe-class-members': 0, // eslint:recommended
    // 'no-duplicate-imports': 0,
    'no-new-symbol': 1, // eslint:recommended
    // 'no-restricted-imports': 0,
    'no-this-before-super': 1,  // eslint:recommended
    // 'no-useless-computed-key': 0,
    // 'no-useless-constructor': 0,
    // 'no-useless-rename': 0,
    'no-var': 0,
    // 'object-shorthand': 0,
    // 'prefer-arrow-callback': 0,
    // 'prefer-const': 0,
    // 'prefer-numeric-literals': 0,
    // 'prefer-reflect': 0,
    // 'prefer-rest-params': 1,
    'prefer-spread': 1,
    // 'prefer-template': 0,
    // 'require-yield': 1, // eslint:recommended
    'rest-spread-spacing': 1,
    // 'sort-imports': 0,
    // 'symbol-description': 0,
    // 'template-curly-spacing': 0,
    'yield-star-spacing': [1, 'after'],
  },
};

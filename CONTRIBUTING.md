

# Contributing

Open the project in VSCode (or VSCodium) and press F5 to get started. This will build the grammar and launch a VSCode window with the extension installed.

The source for the grammar is located in `syntaxes/_hyperscript.tmLanguage.yaml`. This is a [TextMate grammar][]. It often makes use of [regex freespacing mode][]. Make sure to add `._hyperscript` at the end of all scope names so that color theme creators can make hyperscript-specific styles.

There are also two [injection grammars][], one for the `_` attribute and one for `<script type=text/hyperscript>`.

[regex freespacing mode]: https://www.rexegg.com/regex-modifiers.html#freespacing
[TextMate grammar]: https://github.com/microsoft/vscode-docs/blob/main/api/language-extensions/syntax-highlight-guide.md#textmate-grammars
[injection grammars]: https://github.com/microsoft/vscode-docs/blob/main/api/language-extensions/syntax-highlight-guide.md#injection-grammars

## Helpful Resources

* ["Where to find a list of scopes for Sublime2 (or textMate?)"](https://stackoverflow.com/questions/10834765/where-to-find-a-list-of-scopes-for-sublime2-or-textmate#21914803)
* [microsoft/vscode-docs: Syntax Highlight Guide](https://github.com/microsoft/vscode-docs/blob/main/api/language-extensions/syntax-highlight-guide.md)
* [TextMate Scope Selectors](https://macromates.com/manual/en/scope_selectors)
    * for injection grammars

# tree-sitter-fm

Tree-sitter grammar for FileMaker Pro calculations (`.fmfn` files).

Supports 250+ built-in functions (including FileMaker 2024/2025 AI functions, JSONMakeArray, etc.), `Get()` properties, `Let`/`If`/`Case`/`While` expressions, local/global variables, field references, and all operators.

## Building

Requires the [tree-sitter CLI](https://tree-sitter.github.io/tree-sitter/cli/installation):

```sh
tree-sitter generate
tree-sitter build
```

This produces a shared library (`fm.dylib` on macOS, `fm.so` on Linux).

## Neovim

1. Copy the parser into Neovim's parser directory:

```sh
cp fm.dylib ~/.local/share/nvim/site/parser/filemaker.so   # macOS
cp fm.so ~/.local/share/nvim/site/parser/filemaker.so       # Linux
```

2. Copy the highlight queries:

```sh
mkdir -p ~/.config/nvim/queries/filemaker
cp queries/highlights.scm ~/.config/nvim/queries/filemaker/highlights.scm
```

3. Register the filetype and language in your Neovim config:

```lua
vim.filetype.add { extension = { fmfn = 'filemaker' } }
vim.treesitter.language.register('filemaker', 'filemaker')
```

4. If you use nvim-treesitter's `FileType` autocmd to start highlighting, it will work automatically. Otherwise, enable it manually:

```lua
vim.treesitter.start(0, 'filemaker')
```

## Other Editors

Any editor with tree-sitter support can use this grammar. The general steps:

1. Build the parser as shown above.
2. Place the shared library where your editor expects tree-sitter parsers.
3. Copy `queries/highlights.scm` to the appropriate queries location for your editor.
4. Associate the `.fmfn` extension with the `filemaker` language.

Refer to your editor's tree-sitter documentation for specifics:

- **Helix:** Place the shared library in `~/.config/helix/runtime/grammars/` and queries in `~/.config/helix/runtime/queries/filemaker/`.
- **Zed:** Use a [tree-sitter extension](https://zed.dev/docs/extensions/languages).
- **Emacs (tree-sitter):** See [treesit](https://www.gnu.org/software/emacs/manual/html_node/elisp/Language-Grammar.html) documentation.

## Highlight Groups

The highlight queries map to these capture names:

| Capture | Description |
|---|---|
| `@comment` | Line and block comments |
| `@string` | String literals |
| `@number` | Numeric literals |
| `@variable` | Local variables (`$var`) |
| `@variable.global` | Global variables (`$$var`) |
| `@function.builtin` | Built-in functions |
| `@keyword` | `Let`, `If`, `Case`, `While` |
| `@keyword.operator` | `and`, `or`, `xor`, `not`, arithmetic/comparison operators |
| `@constant.builtin` | `Get()` property names |
| `@variable.member` | Field references |
| `@punctuation.bracket` | `()`, `[]` |
| `@punctuation.delimiter` | `;`, `::` |

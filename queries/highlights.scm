; Comments
(line_comment) @comment
(block_comment) @comment

; Strings
(string_literal) @string
(escape_sequence) @string.escape

; Numbers
(number_literal) @number

; Variables
(global_variable) @variable.global
(local_variable) @variable

; Keywords (Let, If, Case, While)
(let_expression (keyword) @keyword)
(if_expression (keyword) @keyword)
(case_expression (keyword) @keyword)
(while_expression (keyword) @keyword)

; Operators (logical and arithmetic)
(binary_expression (operator) @keyword.operator)
(unary_expression (operator) @keyword.operator)

; Built-in functions
(function_call (function_name) @function.builtin)

; Get() function
(get_function (function_name) @function.builtin)
(get_function (get_property) @constant.builtin)

; Field references
(field_reference) @variable.member

; Paragraph symbol
(literal_text) @string.special

; Variable declarations
(variable_declaration "=" @operator)

; Punctuation
["(" ")" "[" "]"] @punctuation.bracket
";" @punctuation.delimiter
"::" @punctuation.delimiter

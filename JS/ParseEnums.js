var _enum = require('./Enum.js');

exports.TokenKind = new _enum.Enum([
    "None",
    "Eof",
    "Unknown",
    "Identifier",
    "Real",
    "StringLiteral",
    "Break",
    "Continue",
    "If",
    "Then",
    "Else",
    "While",
    "Do",
    "Until",
    "For",
    "BitwiseComplement",
    "Not",
    "Inequality",
    "Mod",
    "BitwiseXor",
    "LogicalXor",
    "XorAssignment",
    "BitwiseAnd",
    "LogicalAnd",
    "AndAssignment",
    "Multiply",
    "MultiplyAssignment",
    "OpeningParenthesis",
    "ClosingParenthesis",
    "Minus",
    "SubtractionAssignment",
    "Plus",
    "AdditionAssignment",
    "Assignment",
    "Equality",
    "OpeningCurlyBrace",
    "ClosingCurlyBrace",
    "OpeningSquareBracket",
    "ClosingSquareBracket",
    "BitwiseOr",
    "LogicalOr",
    "OrAssignment",
    "Colon",
    "Semicolon",
    "LessThan",
    "LessThanOrEqual",
    "ShiftLeft",
    "ShiftRight",
    "GreaterThan",
    "GreaterThanOrEqual",
    "Comma",
    "Dot",
    "Divide",
    "DivideAssignment",
    "Div",
    "Var",
    "Globalvar",
    "Repeat",
    "Switch",
    "Case",
    "Default",
    "Exit",
    "With",
    "Return",
]);

exports.StatementKind = new _enum.Enum([
    'AdditionAssignment',
    'AndAssignment',
    'Assignment',
    'Break',
    'Call',
    'Case',
    'Continue',
    'Default',
    'DivideAssignment',
    'Do',
    'Exit',
    'For',
    'Globalvar',
    'If',
    'MultiplyAssignment',
    'OrAssignment',
    'Repeat',
    'Return',
    'Sequence',
    'SubtractionAssignment',
    'Switch',
    'Var',
    'While',
    'With',
    'XorAssignment',
    'Nop'
]);

exports.ExpressionKind = new _enum.Enum([
    "None",
    "Access",
    "Addition",
    "BitwiseAnd",
    "BitwiseOr",
    "BitwiseXor",
    "Call",
    "Complement",
    "Constant",
    "Div",
    "Divide",
    "Equality",
    "GreaterThan",
    "GreaterThanOrEqual",
    "Grouping",
    "Id",
    "LessThan",
    "LessThanOrEqual",
    "LogicalAnd",
    "LogicalOr",
    "LogicalXor",
    "Minus",
    "Mod",
    "Multiply",
    "Not",
    "NotEqual",
    "Plus",
    "ShiftLeft",
    "ShiftRight",
    "Subtraction"
]);
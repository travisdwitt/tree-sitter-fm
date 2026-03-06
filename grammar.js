/// <reference types="tree-sitter-cli/dsl" />

// All built-in FileMaker Pro functions (2025), case-insensitive
const BUILTIN_FUNCTIONS = [
  // Text
  'Char', 'Code', 'Exact', 'Filter', 'FilterValues', 'GetAsCSS', 'GetAsDate',
  'GetAsNumber', 'GetAsSVG', 'GetAsText', 'GetAsTime', 'GetAsTimestamp',
  'GetAsURLEncoded', 'GetValue', 'Left', 'LeftValues', 'LeftWords', 'Length',
  'Lower', 'Middle', 'MiddleValues', 'MiddleWords', 'PatternCount', 'Position',
  'Proper', 'Quote', 'Replace', 'Right', 'RightValues', 'RightWords',
  'SerialIncrement', 'SortValues', 'Substitute', 'Trim', 'TrimAll',
  'UniqueValues', 'Upper', 'ValueCount', 'WordCount',
  // Number
  'Abs', 'Ceiling', 'Combination', 'Div', 'Exp', 'Factorial', 'Floor', 'Int',
  'Lg', 'Ln', 'Log', 'Mod', 'Random', 'Round', 'SetPrecision', 'Sign', 'Sqrt',
  'Truncate',
  // Date
  'Date', 'Day', 'DayName', 'DayOfWeek', 'DayOfYear', 'Month', 'MonthName',
  'WeekOfYear', 'WeekOfYearFiscal', 'Year',
  // Time
  'Hour', 'Minute', 'Seconds', 'Time',
  // Timestamp
  'Timestamp',
  // Container
  'Base64Decode', 'Base64Encode', 'Base64EncodeRFC', 'CryptAuthCode',
  'CryptDecrypt', 'CryptDecryptBase64', 'CryptDigest', 'CryptEncrypt',
  'CryptEncryptBase64', 'CryptGenerateSignature', 'CryptVerifySignature',
  'GetContainerAttribute', 'GetHeight', 'GetLiveText', 'GetLiveTextAsJSON',
  'GetTextFromPDF', 'GetThumbnail', 'GetWidth', 'HexDecode', 'HexEncode',
  'ReadQRCode', 'TextDecode', 'TextEncode', 'VerifyContainer',
  // JSON
  'JSONFormatElements', 'JSONGetElement', 'JSONListKeys', 'JSONListValues',
  'JSONSetElement', 'JSONMakeArray', 'JSONDeleteElement', 'JSONParse',
  'JSONParsedState', 'JSONGetElementType',
  // Aggregate
  'Average', 'Count', 'List', 'Max', 'Min', 'StDev', 'StDevP', 'Sum',
  'Variance', 'VarianceP',
  // Logical
  'Choose', 'Evaluate', 'EvaluationError', 'ExecuteSQL', 'ExecuteSQLe',
  'GetAsBoolean', 'GetField', 'GetNthRecord', 'GetSummary', 'IsEmpty',
  'IsValid', 'IsValidExpression', 'Lookup', 'LookupNext', 'Self',
  'SetRecursion',
  // Trig
  'Acos', 'Asin', 'Atan', 'Cos', 'Degrees', 'Pi', 'Radians', 'Sin', 'Tan',
  // Financial
  'FV', 'NPV', 'PMT', 'PV',
  // Text Formatting
  'RGB', 'TextColor', 'TextColorRemove', 'TextFont', 'TextFontRemove',
  'TextFormatRemove', 'TextSize', 'TextSizeRemove', 'TextStyleAdd',
  'TextStyleRemove',
  // Repeating
  'Extend', 'GetRepetition', 'Last',
  // Design
  'BaseTableIDs', 'BaseTableNames', 'DatabaseNames', 'FieldBounds',
  'FieldComment', 'FieldIDs', 'FieldNames', 'FieldRepetitions', 'FieldStyle',
  'FieldType', 'GetNextSerialValue', 'LayoutIDs', 'LayoutNames',
  'LayoutObjectNames', 'RelationInfo', 'ScriptIDs', 'ScriptNames', 'TableIDs',
  'TableNames', 'ValueListIDs', 'ValueListItems', 'ValueListNames', 'WindowNames',
  // Mobile
  'GetAVPlayerAttribute', 'GetSensor', 'Location', 'LocationValues', 'RangeBeacons',
  // AI
  'AddEmbeddings', 'ComputeModel', 'CosineSimilarity', 'GetEmbedding',
  'GetEmbeddingAsFile', 'GetEmbeddingAsText', 'GetFieldsOnLayout',
  'GetModelAttributes', 'GetRAGSpaceInfo', 'GetTableDDL', 'GetTokenCount',
  'NormalizeEmbedding', 'PredictFromModel', 'SubtractEmbeddings',
  // Misc
  'ConvertFromFileMakerPath', 'ConvertToFileMakerPath', 'GetAddonInfo',
  'GetBaseTableName', 'GetFieldName', 'GetLayoutObjectAttribute',
  'GetLayoutObjectOwnerInfo', 'GetRecordIDsFromFoundSet', 'LayoutObjectUUID',
  // Japanese
  'DayNameJ', 'Furigana', 'Hiragana', 'KanaHankaku', 'KanaZenkaku',
  'KanjiNumeral', 'Katakana', 'MonthNameJ', 'NumToJText', 'RomanHankaku',
  'RomanZenkaku', 'YearName',
  // Get — handled separately as get_function
];

// Get() property names
const GET_PROPERTIES = [
  'AccountExtendedPrivileges', 'AccountGroupName', 'AccountName',
  'AccountPrivilegeSetName', 'AccountType', 'ActiveFieldContents',
  'ActiveFieldName', 'ActiveFieldTableName', 'ActiveLayoutObjectName',
  'ActiveModifierKeys', 'ActivePortalRowNumber', 'ActiveRepetitionNumber',
  'ActiveSelectionSize', 'ActiveSelectionStart', 'AllowAbortState',
  'AllowFormattingBarState', 'ApplicationArchitecture', 'ApplicationLanguage',
  'ApplicationVersion', 'CacheFileName', 'CacheFilePath', 'CalculationRepetitionNumber',
  'ConnectionAttributes', 'ConnectionState', 'CurrentDate', 'CurrentExtendedPrivileges',
  'CurrentHostTimestamp', 'CurrentPrivilegeSetName', 'CurrentTime',
  'CurrentTimestamp', 'CurrentTimeUTCMilliseconds', 'CurrentTimeUTCMicroseconds',
  'CustomMenuSetName', 'DesktopPath', 'Device', 'DocumentsPath',
  'DocumentsPathListing', 'EncryptionState', 'ErrorCaptureState',
  'FileMakerPath', 'FileName', 'FilePath', 'FileSize',
  'FoundCount', 'HighContrastColor', 'HighContrastState', 'HostApplicationVersion',
  'HostIPAddress', 'HostName', 'InstalledFMPlugins', 'InstalledFMPluginsAsJSON',
  'LastError', 'LastErrorDetail', 'LastErrorLocation', 'LastExternalErrorDetail',
  'LastMessageChoice', 'LastODBCError', 'LayoutAccess', 'LayoutCount',
  'LayoutName', 'LayoutNumber', 'LayoutTableName', 'LayoutViewState',
  'MenubarState', 'ModifiedFields', 'MultiUserState', 'NetworkProtocol',
  'NetworkType', 'OpenDataFileInfo', 'PageCount', 'PageNumber',
  'PersistentID', 'PreferencesPath', 'PrinterName', 'QuickFindText',
  'RecordAccess', 'RecordID', 'RecordModificationCount', 'RecordNumber',
  'RecordOpenCount', 'RecordOpenState', 'RegionDecimalSeparator',
  'RegionListSeparator', 'RegionMonitorEvents', 'RequestCount',
  'RequestOmitState', 'ScreenDepth', 'ScreenHeight', 'ScreenScaleFactor',
  'ScreenWidth', 'ScriptAnimationState', 'ScriptName', 'ScriptParameter',
  'ScriptResult', 'SortState', 'StatusAreaState', 'SystemDrive',
  'SystemIPAddress', 'SystemLanguage', 'SystemLocaleElements',
  'SystemNICAddress', 'SystemPlatform', 'SystemVersion', 'TemporaryPath',
  'TextRulerVisible', 'TotalRecordCount', 'TriggerCurrentPanel',
  'TriggerExternalEvent', 'TriggerGestureInfo', 'TriggerKeystroke',
  'TriggerModifierKeys', 'TriggerTargetPanel', 'TriggerTargetTabPanel',
  'UUID', 'UUIDNumber', 'UserCount', 'UserName',
  'UseSystemFormatsState', 'WindowContentHeight', 'WindowContentWidth',
  'WindowDesktopHeight', 'WindowDesktopWidth', 'WindowHeight', 'WindowLeft',
  'WindowMode', 'WindowName', 'WindowOrientation', 'WindowStyle',
  'WindowTop', 'WindowVisible', 'WindowWidth', 'WindowZoomLevel',
];

// Helper: create case-insensitive regex from a word
function ci(word) {
  return new RegExp(
    word.split('').map(c => {
      if (/[a-zA-Z]/.test(c)) return `[${c.toLowerCase()}${c.toUpperCase()}]`;
      return c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('')
  );
}

// Helper: create choice of case-insensitive keywords
function kw(...words) {
  return choice(...words.map(w => ci(w)));
}

module.exports = grammar({
  name: 'filemaker',

  extras: $ => [
    /\s/,
    $.line_comment,
    $.block_comment,
  ],

  word: $ => $._identifier,

  precedences: $ => [
    [
      'unary',
      'power',
      'multiplicative',
      'additive',
      'concatenation',
      'comparison',
      'not',
      'and',
      'xor',
      'or',
    ],
  ],

  rules: {
    source_file: $ => optional($._expression_list),

    _expression_list: $ => seq(
      $._expression,
      repeat(seq(';', $._expression)),
      optional(';'),
    ),

    _expression: $ => choice(
      $.let_expression,
      $.if_expression,
      $.case_expression,
      $.while_expression,
      $.binary_expression,
      $.unary_expression,
      $.function_call,
      $.get_function,
      $.string_literal,
      $.number_literal,
      $.global_variable,
      $.local_variable,
      $.field_reference,
      $.literal_text,
      $.parenthesized_expression,
    ),

    // Let( [ var = expr ; ... ] ; expr ) or Let( var = expr ; expr )
    let_expression: $ => seq(
      alias(ci('Let'), $.keyword),
      '(',
      choice(
        // Bracketed form: Let( [ a = 1 ; b = 2 ] ; expr )
        seq(
          '[',
          $.variable_declaration,
          repeat(seq(';', $.variable_declaration)),
          optional(';'),
          ']',
          ';',
          $._expression,
        ),
        // Simple form: Let( a = 1 ; expr )
        seq(
          $.variable_declaration,
          ';',
          $._expression,
        ),
      ),
      ')',
    ),

    variable_declaration: $ => seq(
      field('name', choice($.local_variable, $.global_variable, $._identifier)),
      '=',
      field('value', $._expression),
    ),

    // If( condition ; then ) or If( condition ; then ; else )
    if_expression: $ => seq(
      alias(ci('If'), $.keyword),
      '(',
      field('condition', $._expression),
      ';',
      field('then', $._expression),
      optional(seq(';', field('else', $._expression))),
      ')',
    ),

    // Case( test1 ; result1 ; test2 ; result2 ; ... ; default )
    case_expression: $ => seq(
      alias(ci('Case'), $.keyword),
      '(',
      $._expression,
      repeat(seq(';', $._expression)),
      optional(';'),
      ')',
    ),

    // While( [ var = expr ; ... ] ; condition ; [ var = expr ; ... ] ; result )
    while_expression: $ => seq(
      alias(ci('While'), $.keyword),
      '(',
      // Initial variables
      '[',
      $.variable_declaration,
      repeat(seq(';', $.variable_declaration)),
      optional(';'),
      ']',
      ';',
      // Condition
      $._expression,
      ';',
      // Logic (loop body variable reassignments)
      '[',
      $.variable_declaration,
      repeat(seq(';', $.variable_declaration)),
      optional(';'),
      ']',
      ';',
      // Result
      $._expression,
      ')',
    ),

    // Get( PropertyName )
    get_function: $ => seq(
      alias(ci('Get'), $.function_name),
      '(',
      alias(kw(...GET_PROPERTIES), $.get_property),
      ')',
    ),

    // FunctionName( args... )
    function_call: $ => seq(
      alias($._function_name_token, $.function_name),
      '(',
      optional(seq(
        $._expression,
        repeat(seq(';', $._expression)),
        optional(';'),
      )),
      ')',
    ),

    _function_name_token: $ => kw(...BUILTIN_FUNCTIONS),

    // Binary operators
    binary_expression: $ => choice(
      prec.left('or', seq($._expression, alias(ci('or'), $.operator), $._expression)),
      prec.left('xor', seq($._expression, alias(ci('xor'), $.operator), $._expression)),
      prec.left('and', seq($._expression, alias(ci('and'), $.operator), $._expression)),
      prec.left('comparison', seq($._expression, alias(choice('=', '≠', '<>', '<', '>', '≤', '≥', '<=', '>='), $.operator), $._expression)),
      prec.left('concatenation', seq($._expression, alias('&', $.operator), $._expression)),
      prec.left('additive', seq($._expression, alias(choice('+', '-'), $.operator), $._expression)),
      prec.left('multiplicative', seq($._expression, alias(choice('*', '/'), $.operator), $._expression)),
      prec.right('power', seq($._expression, alias('^', $.operator), $._expression)),
    ),

    // Unary operators
    unary_expression: $ => prec('unary', choice(
      seq(alias(ci('not'), $.operator), $._expression),
      seq(alias('-', $.operator), $._expression),
    )),

    parenthesized_expression: $ => seq('(', $._expression, ')'),

    // String: "..." with \" escapes
    string_literal: $ => seq(
      '"',
      repeat(choice(
        $.escape_sequence,
        /[^"\\]+/,
      )),
      '"',
    ),

    escape_sequence: $ => /\\./,

    // Numbers
    number_literal: $ => /\d+(\.\d+)?/,

    // Variables
    global_variable: $ => /\$\$[a-zA-Z_][a-zA-Z0-9_.:]*/,
    local_variable: $ => /\$[a-zA-Z_][a-zA-Z0-9_.:]*/,

    // Field references: TableName::FieldName or just FieldName
    field_reference: $ => seq(
      $._identifier,
      optional(seq('::', $._identifier)),
    ),

    // ¶ paragraph symbol as literal text
    literal_text: $ => '¶',

    // Base identifier (used for word rule and field names)
    _identifier: $ => /[a-zA-Z_][a-zA-Z0-9_.:]*/,

    // Comments
    line_comment: $ => seq('//', /[^\n]*/),
    block_comment: $ => seq('/*', /[^*]*\*+([^/*][^*]*\*+)*/, '/'),
  },
});

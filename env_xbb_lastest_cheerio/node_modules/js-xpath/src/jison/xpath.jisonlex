WhiteSpace          (\s+)
Digit               [0-9]
Letter              [A-Za-z]
NameStartChar       [A-Za-z_]
NameTrailChar       [A-Za-z0-9._-]
NCName              [A-Za-z_][A-Za-z0-9._-]*
QName               [A-Za-z_][A-Za-z0-9._-]*(":"[A-Za-z_][A-Za-z0-9._-]*)?

%s INITIAL OP_CONTEXT VAL_CONTEXT
      
%%

<*>{WhiteSpace}                         /* ignore whitespace */ 

<*>"node"/({WhiteSpace}?"(")                     { yy.xpathmodels.debuglog("NODETYPE", yytext); return "NODETYPE_NODE"; }
<*>"text"/({WhiteSpace}?"(")                     { yy.xpathmodels.debuglog("NODETYPE", yytext); return "NODETYPE_TEXT"; }

<*>"comment"/({WhiteSpace}?"(")                  { yy.xpathmodels.debuglog("NODETYPE", yytext); return "NODETYPE_COMMENT"; }
<*>"processing-instruction"/({WhiteSpace}?"(")   { yy.xpathmodels.debuglog("NODETYPE", yytext); return "NODETYPE_PROCINSTR"; }

<*>"$"{QName}                                      { this.begin("OP_CONTEXT"); yytext = yytext.substr(1,yyleng-1); yy.xpathmodels.debuglog("VAR", yytext); return "VAR"; }

<VAL_CONTEXT,INITIAL>{NCName}":*"  { this.begin("OP_CONTEXT"); 
                                     yytext = yytext.substr(0, yyleng-2);
                                     yy.xpathmodels.debuglog("NSWILDCARD", yytext); return "NSWILDCARD"; }
<VAL_CONTEXT,INITIAL>{QName}       { this.begin("OP_CONTEXT"); yy.xpathmodels.debuglog("QNAME", yytext); return "QNAME"; } 
<VAL_CONTEXT,INITIAL>"*"           { this.begin("OP_CONTEXT"); yy.xpathmodels.debuglog("WILDCARD", yytext); return "WILDCARD"; }

<OP_CONTEXT>"*"                    { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("MULT", yytext); return "MULT"; }
<OP_CONTEXT>("and")                  { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("AND", yytext); return "AND"; }
<OP_CONTEXT>("or")                   { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("OR", yytext); return "OR"; }
<OP_CONTEXT>("div")                  { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("DIV", yytext); return "DIV"; }
<OP_CONTEXT>("mod")                  { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("MOD", yytext); return "MOD"; }

<*>({Digit}+("."{Digit}*)?|("."{Digit}+))             { this.begin("OP_CONTEXT"); yy.xpathmodels.debuglog("NUM", yytext); return "NUM"; }


<*>"="         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("EQ", yytext); return "EQ"; }
<*>"!="        { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("NEQ", yytext); return "NEQ"; }
<*>"<="        { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("LTE", yytext); return "LTE"; }
<*>"<"         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("LT", yytext); return "LT"; }
<*>">="        { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("GTE", yytext); return "GTE"; }
<*>">"         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("GT", yytext); return "GT"; }
<*>"+"         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("PLUS", yytext); return "PLUS"; }
<*>"-"         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("MINUS", yytext); return "MINUS"; }
<*>"|"         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("UNION", yytext); return "UNION"; }
<*>"//"        { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("DBL", yytext); return "DBL_SLASH"; }
<*>"/"         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("SLASH", yytext); return "SLASH"; }
<*>"["         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("LBRACK", yytext); return "LBRACK"; }
<*>"]"         { this.begin("OP_CONTEXT");  yy.xpathmodels.debuglog("RBRACK", yytext); return "RBRACK"; }
<*>"("         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("LPAREN", yytext); return "LPAREN"; }
<*>")"         { this.begin("OP_CONTEXT");  yy.xpathmodels.debuglog("RPAREN", yytext); return "RPAREN"; }
<*>".."        { this.begin("OP_CONTEXT");  yy.xpathmodels.debuglog("DBL", yytext); return "DBL_DOT"; }
<*>"."         { this.begin("OP_CONTEXT");  yy.xpathmodels.debuglog("DOT", yytext); return "DOT"; }
<*>"@"         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("AT", yytext); return "AT"; }
<*>"::"        { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("DBL", yytext); return "DBL_COLON"; }
<*>","         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("COMMA", yytext); return "COMMA"; }
<*>"#"         { this.begin("VAL_CONTEXT"); yy.xpathmodels.debuglog("HASH", yytext); return "HASH"; }


<*>("\""[^"\""]*"\""|'\''[^'\'']*'\'')               { this.begin("OP_CONTEXT"); yy.xpathmodels.debuglog("STR", yytext); return "STR"; }


<*><<EOF>>                              return 'EOF';





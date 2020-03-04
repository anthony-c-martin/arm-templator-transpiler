// Generated from ./src/antlr4/ArmLang.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ArmLangLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly Identifier = 20;
	public static readonly Number = 21;
	public static readonly String = 22;
	public static readonly BlockComment = 23;
	public static readonly LineComment = 24;
	public static readonly Whitespace = 25;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "Identifier", "Number", "String", "NonDigit", "Digit", 
		"NonzeroDigit", "StringEscapeSequence", "StringChar", "BlockComment", 
		"LineComment", "Whitespace",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'input'", "'output'", "'resource'", "'{'", "'}'", "':'", "'['", 
		"']'", "'('", "')'", "','", "'string'", "'securestring'", "'int'", "'bool'", 
		"'object'", "'array'", "'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "Identifier", 
		"Number", "String", "BlockComment", "LineComment", "Whitespace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ArmLangLexer._LITERAL_NAMES, ArmLangLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ArmLangLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ArmLangLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ArmLang.g4"; }

	// @Override
	public get ruleNames(): string[] { return ArmLangLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ArmLangLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ArmLangLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ArmLangLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1B\xDF\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\x9E\n\x15\f\x15" +
		"\x0E\x15\xA1\v\x15\x03\x16\x03\x16\x07\x16\xA5\n\x16\f\x16\x0E\x16\xA8" +
		"\v\x16\x03\x17\x03\x17\x07\x17\xAC\n\x17\f\x17\x0E\x17\xAF\v\x17\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x05\x1C\xBE\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\xC4\n\x1D\f\x1D\x0E\x1D\xC7\v\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\xD2\n\x1E\f\x1E" +
		"\x0E\x1E\xD5\v\x1E\x03\x1E\x03\x1E\x03\x1F\x06\x1F\xDA\n\x1F\r\x1F\x0E" +
		"\x1F\xDB\x03\x1F\x03\x1F\x03\xC5\x02\x02 \x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
		"\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02" +
		"\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x021" +
		"\x02\x023\x02\x025\x02\x027\x02\x029\x02\x19;\x02\x1A=\x02\x1B\x03\x02" +
		"\t\x05\x02C\\aac|\x03\x022;\x03\x023;\x06\x02))^^pptt\x06\x02\f\f\x0F" +
		"\x0F))^^\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0E\x0F\"\"\x02\xE1\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02" +
		"\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02" +
		"\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x029\x03" +
		"\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x03?\x03\x02\x02" +
		"\x02\x05E\x03\x02\x02\x02\x07L\x03\x02\x02\x02\tU\x03\x02\x02\x02\vW\x03" +
		"\x02\x02\x02\rY\x03\x02\x02\x02\x0F[\x03\x02\x02\x02\x11]\x03\x02\x02" +
		"\x02\x13_\x03\x02\x02\x02\x15a\x03\x02\x02\x02\x17c\x03\x02\x02\x02\x19" +
		"e\x03\x02\x02\x02\x1Bl\x03\x02\x02\x02\x1Dy\x03\x02\x02\x02\x1F}\x03\x02" +
		"\x02\x02!\x82\x03\x02\x02\x02#\x89\x03\x02\x02\x02%\x8F\x03\x02\x02\x02" +
		"\'\x94\x03\x02\x02\x02)\x9A\x03\x02\x02\x02+\xA2\x03\x02\x02\x02-\xA9" +
		"\x03\x02\x02\x02/\xB2\x03\x02\x02\x021\xB4\x03\x02\x02\x023\xB6\x03\x02" +
		"\x02\x025\xB8\x03\x02\x02\x027\xBD\x03\x02\x02\x029\xBF\x03\x02\x02\x02" +
		";\xCD\x03\x02\x02\x02=\xD9\x03\x02\x02\x02?@\x07k\x02\x02@A\x07p\x02\x02" +
		"AB\x07r\x02\x02BC\x07w\x02\x02CD\x07v\x02\x02D\x04\x03\x02\x02\x02EF\x07" +
		"q\x02\x02FG\x07w\x02\x02GH\x07v\x02\x02HI\x07r\x02\x02IJ\x07w\x02\x02" +
		"JK\x07v\x02\x02K\x06\x03\x02\x02\x02LM\x07t\x02\x02MN\x07g\x02\x02NO\x07" +
		"u\x02\x02OP\x07q\x02\x02PQ\x07w\x02\x02QR\x07t\x02\x02RS\x07e\x02\x02" +
		"ST\x07g\x02\x02T\b\x03\x02\x02\x02UV\x07}\x02\x02V\n\x03\x02\x02\x02W" +
		"X\x07\x7F\x02\x02X\f\x03\x02\x02\x02YZ\x07<\x02\x02Z\x0E\x03\x02\x02\x02" +
		"[\\\x07]\x02\x02\\\x10\x03\x02\x02\x02]^\x07_\x02\x02^\x12\x03\x02\x02" +
		"\x02_`\x07*\x02\x02`\x14\x03\x02\x02\x02ab\x07+\x02\x02b\x16\x03\x02\x02" +
		"\x02cd\x07.\x02\x02d\x18\x03\x02\x02\x02ef\x07u\x02\x02fg\x07v\x02\x02" +
		"gh\x07t\x02\x02hi\x07k\x02\x02ij\x07p\x02\x02jk\x07i\x02\x02k\x1A\x03" +
		"\x02\x02\x02lm\x07u\x02\x02mn\x07g\x02\x02no\x07e\x02\x02op\x07w\x02\x02" +
		"pq\x07t\x02\x02qr\x07g\x02\x02rs\x07u\x02\x02st\x07v\x02\x02tu\x07t\x02" +
		"\x02uv\x07k\x02\x02vw\x07p\x02\x02wx\x07i\x02\x02x\x1C\x03\x02\x02\x02" +
		"yz\x07k\x02\x02z{\x07p\x02\x02{|\x07v\x02\x02|\x1E\x03\x02\x02\x02}~\x07" +
		"d\x02\x02~\x7F\x07q\x02\x02\x7F\x80\x07q\x02\x02\x80\x81\x07n\x02\x02" +
		"\x81 \x03\x02\x02\x02\x82\x83\x07q\x02\x02\x83\x84\x07d\x02\x02\x84\x85" +
		"\x07l\x02\x02\x85\x86\x07g\x02\x02\x86\x87\x07e\x02\x02\x87\x88\x07v\x02" +
		"\x02\x88\"\x03\x02\x02\x02\x89\x8A\x07c\x02\x02\x8A\x8B\x07t\x02\x02\x8B" +
		"\x8C\x07t\x02\x02\x8C\x8D\x07c\x02\x02\x8D\x8E\x07{\x02\x02\x8E$\x03\x02" +
		"\x02\x02\x8F\x90\x07v\x02\x02\x90\x91\x07t\x02\x02\x91\x92\x07w\x02\x02" +
		"\x92\x93\x07g\x02\x02\x93&\x03\x02\x02\x02\x94\x95\x07h\x02\x02\x95\x96" +
		"\x07c\x02\x02\x96\x97\x07n\x02\x02\x97\x98\x07u\x02\x02\x98\x99\x07g\x02" +
		"\x02\x99(\x03\x02\x02\x02\x9A\x9F\x05/\x18\x02\x9B\x9E\x05/\x18\x02\x9C" +
		"\x9E\x051\x19\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9C\x03\x02\x02\x02\x9E" +
		"\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0" +
		"*\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA6\x053\x1A\x02\xA3\xA5" +
		"\x051\x19\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4" +
		"\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7,\x03\x02\x02\x02\xA8\xA6" +
		"\x03\x02\x02\x02\xA9\xAD\x07)\x02\x02\xAA\xAC\x057\x1C\x02\xAB\xAA\x03" +
		"\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03" +
		"\x02\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB1\x07" +
		")\x02\x02\xB1.\x03\x02\x02\x02\xB2\xB3\t\x02\x02\x02\xB30\x03\x02\x02" +
		"\x02\xB4\xB5\t\x03\x02\x02\xB52\x03\x02\x02\x02\xB6\xB7\t\x04\x02\x02" +
		"\xB74\x03\x02\x02\x02\xB8\xB9\x07^\x02\x02\xB9\xBA\t\x05\x02\x02\xBA6" +
		"\x03\x02\x02\x02\xBB\xBE\n\x06\x02\x02\xBC\xBE\x055\x1B\x02\xBD\xBB\x03" +
		"\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE8\x03\x02\x02\x02\xBF\xC0\x07" +
		"1\x02\x02\xC0\xC1\x07,\x02\x02\xC1\xC5\x03\x02\x02\x02\xC2\xC4\v\x02\x02" +
		"\x02\xC3\xC2\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC6\x03\x02\x02" +
		"\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7\xC5\x03\x02\x02" +
		"\x02\xC8\xC9\x07,\x02\x02\xC9\xCA\x071\x02\x02\xCA\xCB\x03\x02\x02\x02" +
		"\xCB\xCC\b\x1D\x02\x02\xCC:\x03\x02\x02\x02\xCD\xCE\x071\x02\x02\xCE\xCF" +
		"\x071\x02\x02\xCF\xD3\x03\x02\x02\x02\xD0\xD2\n\x07\x02\x02\xD1\xD0\x03" +
		"\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03" +
		"\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD7\b" +
		"\x1E\x02\x02\xD7<\x03\x02\x02\x02\xD8\xDA\t\b\x02\x02\xD9\xD8\x03\x02" +
		"\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02" +
		"\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\b\x1F\x02\x02\xDE>\x03\x02\x02" +
		"\x02\v\x02\x9D\x9F\xA6\xAD\xBD\xC5\xD3\xDB\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ArmLangLexer.__ATN) {
			ArmLangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ArmLangLexer._serializedATN));
		}

		return ArmLangLexer.__ATN;
	}

}


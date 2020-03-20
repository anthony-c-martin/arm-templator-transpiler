// Generated from ArmLang.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly Identifier = 24;
	public static readonly Number = 25;
	public static readonly String = 26;
	public static readonly BlockComment = 27;
	public static readonly LineComment = 28;
	public static readonly Whitespace = 29;

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
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "Identifier", "Number", 
		"String", "NonDigit", "Digit", "StringEscapeSequence", "StringChar", "BlockComment", 
		"LineComment", "Whitespace",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'input'", "'output'", "':'", "'resource'", "'variable'", "'export'", 
		"'module'", "'{'", "'}'", "'['", "']'", "'('", "')'", "','", "'string'", 
		"'securestring'", "'int'", "'bool'", "'object'", "'array'", "'true'", 
		"'false'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "Identifier", "Number", "String", "BlockComment", 
		"LineComment", "Whitespace",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1F\xFA\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x07\x19\xBD" +
		"\n\x19\f\x19\x0E\x19\xC0\v\x19\x03\x1A\x06\x1A\xC3\n\x1A\r\x1A\x0E\x1A" +
		"\xC4\x03\x1B\x03\x1B\x07\x1B\xC9\n\x1B\f\x1B\x0E\x1B\xCC\v\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x05\x1F\xD9\n\x1F\x03 \x03 \x03 \x03 \x07 \xDF\n \f \x0E \xE2" +
		"\v \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x07!\xED\n!\f!\x0E!\xF0" +
		"\v!\x03!\x03!\x03\"\x06\"\xF5\n\"\r\"\x0E\"\xF6\x03\"\x03\"\x03\xE0\x02" +
		"\x02#\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b" +
		"\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
		"\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02" +
		"\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x029\x02" +
		"\x02;\x02\x02=\x02\x02?\x02\x1DA\x02\x1EC\x02\x1F\x03\x02\b\x05\x02C\\" +
		"aac|\x03\x022;\x06\x02))^^pptt\x06\x02\f\f\x0F\x0F))^^\x04\x02\f\f\x0F" +
		"\x0F\x05\x02\v\f\x0E\x0F\"\"\x02\xFD\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02" +
		"\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02" +
		"\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02" +
		"+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02?\x03\x02\x02\x02" +
		"\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x03E\x03\x02\x02\x02\x05K\x03" +
		"\x02\x02\x02\x07R\x03\x02\x02\x02\tT\x03\x02\x02\x02\v]\x03\x02\x02\x02" +
		"\rf\x03\x02\x02\x02\x0Fm\x03\x02\x02\x02\x11t\x03\x02\x02\x02\x13v\x03" +
		"\x02\x02\x02\x15x\x03\x02\x02\x02\x17z\x03\x02\x02\x02\x19|\x03\x02\x02" +
		"\x02\x1B~\x03\x02\x02\x02\x1D\x80\x03\x02\x02\x02\x1F\x82\x03\x02\x02" +
		"\x02!\x89\x03\x02\x02\x02#\x96\x03\x02\x02\x02%\x9A\x03\x02\x02\x02\'" +
		"\x9F\x03\x02\x02\x02)\xA6\x03\x02\x02\x02+\xAC\x03\x02\x02\x02-\xB1\x03" +
		"\x02\x02\x02/\xB7\x03\x02\x02\x021\xB9\x03\x02\x02\x023\xC2\x03\x02\x02" +
		"\x025\xC6\x03\x02\x02\x027\xCF\x03\x02\x02\x029\xD1\x03\x02\x02\x02;\xD3" +
		"\x03\x02\x02\x02=\xD8\x03\x02\x02\x02?\xDA\x03\x02\x02\x02A\xE8\x03\x02" +
		"\x02\x02C\xF4\x03\x02\x02\x02EF\x07k\x02\x02FG\x07p\x02\x02GH\x07r\x02" +
		"\x02HI\x07w\x02\x02IJ\x07v\x02\x02J\x04\x03\x02\x02\x02KL\x07q\x02\x02" +
		"LM\x07w\x02\x02MN\x07v\x02\x02NO\x07r\x02\x02OP\x07w\x02\x02PQ\x07v\x02" +
		"\x02Q\x06\x03\x02\x02\x02RS\x07<\x02\x02S\b\x03\x02\x02\x02TU\x07t\x02" +
		"\x02UV\x07g\x02\x02VW\x07u\x02\x02WX\x07q\x02\x02XY\x07w\x02\x02YZ\x07" +
		"t\x02\x02Z[\x07e\x02\x02[\\\x07g\x02\x02\\\n\x03\x02\x02\x02]^\x07x\x02" +
		"\x02^_\x07c\x02\x02_`\x07t\x02\x02`a\x07k\x02\x02ab\x07c\x02\x02bc\x07" +
		"d\x02\x02cd\x07n\x02\x02de\x07g\x02\x02e\f\x03\x02\x02\x02fg\x07g\x02" +
		"\x02gh\x07z\x02\x02hi\x07r\x02\x02ij\x07q\x02\x02jk\x07t\x02\x02kl\x07" +
		"v\x02\x02l\x0E\x03\x02\x02\x02mn\x07o\x02\x02no\x07q\x02\x02op\x07f\x02" +
		"\x02pq\x07w\x02\x02qr\x07n\x02\x02rs\x07g\x02\x02s\x10\x03\x02\x02\x02" +
		"tu\x07}\x02\x02u\x12\x03\x02\x02\x02vw\x07\x7F\x02\x02w\x14\x03\x02\x02" +
		"\x02xy\x07]\x02\x02y\x16\x03\x02\x02\x02z{\x07_\x02\x02{\x18\x03\x02\x02" +
		"\x02|}\x07*\x02\x02}\x1A\x03\x02\x02\x02~\x7F\x07+\x02\x02\x7F\x1C\x03" +
		"\x02\x02\x02\x80\x81\x07.\x02\x02\x81\x1E\x03\x02\x02\x02\x82\x83\x07" +
		"u\x02\x02\x83\x84\x07v\x02\x02\x84\x85\x07t\x02\x02\x85\x86\x07k\x02\x02" +
		"\x86\x87\x07p\x02\x02\x87\x88\x07i\x02\x02\x88 \x03\x02\x02\x02\x89\x8A" +
		"\x07u\x02\x02\x8A\x8B\x07g\x02\x02\x8B\x8C\x07e\x02\x02\x8C\x8D\x07w\x02" +
		"\x02\x8D\x8E\x07t\x02\x02\x8E\x8F\x07g\x02\x02\x8F\x90\x07u\x02\x02\x90" +
		"\x91\x07v\x02\x02\x91\x92\x07t\x02\x02\x92\x93\x07k\x02\x02\x93\x94\x07" +
		"p\x02\x02\x94\x95\x07i\x02\x02\x95\"\x03\x02\x02\x02\x96\x97\x07k\x02" +
		"\x02\x97\x98\x07p\x02\x02\x98\x99\x07v\x02\x02\x99$\x03\x02\x02\x02\x9A" +
		"\x9B\x07d\x02\x02\x9B\x9C\x07q\x02\x02\x9C\x9D\x07q\x02\x02\x9D\x9E\x07" +
		"n\x02\x02\x9E&\x03\x02\x02\x02\x9F\xA0\x07q\x02\x02\xA0\xA1\x07d\x02\x02" +
		"\xA1\xA2\x07l\x02\x02\xA2\xA3\x07g\x02\x02\xA3\xA4\x07e\x02\x02\xA4\xA5" +
		"\x07v\x02\x02\xA5(\x03\x02\x02\x02\xA6\xA7\x07c\x02\x02\xA7\xA8\x07t\x02" +
		"\x02\xA8\xA9\x07t\x02\x02\xA9\xAA\x07c\x02\x02\xAA\xAB\x07{\x02\x02\xAB" +
		"*\x03\x02\x02\x02\xAC\xAD\x07v\x02\x02\xAD\xAE\x07t\x02\x02\xAE\xAF\x07" +
		"w\x02\x02\xAF\xB0\x07g\x02\x02\xB0,\x03\x02\x02\x02\xB1\xB2\x07h\x02\x02" +
		"\xB2\xB3\x07c\x02\x02\xB3\xB4\x07n\x02\x02\xB4\xB5\x07u\x02\x02\xB5\xB6" +
		"\x07g\x02\x02\xB6.\x03\x02\x02\x02\xB7\xB8\x070\x02\x02\xB80\x03\x02\x02" +
		"\x02\xB9\xBE\x057\x1C\x02\xBA\xBD\x057\x1C\x02\xBB\xBD\x059\x1D\x02\xBC" +
		"\xBA\x03\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE" +
		"\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF2\x03\x02\x02\x02\xC0" +
		"\xBE\x03\x02\x02\x02\xC1\xC3\x059\x1D\x02\xC2\xC1\x03\x02\x02\x02\xC3" +
		"\xC4\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5" +
		"4\x03\x02\x02\x02\xC6\xCA\x07)\x02\x02\xC7\xC9\x05=\x1F\x02\xC8\xC7\x03" +
		"\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03" +
		"\x02\x02\x02\xCB\xCD\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xCE\x07" +
		")\x02\x02\xCE6\x03\x02\x02\x02\xCF\xD0\t\x02\x02\x02\xD08\x03\x02\x02" +
		"\x02\xD1\xD2\t\x03\x02\x02\xD2:\x03\x02\x02\x02\xD3\xD4\x07^\x02\x02\xD4" +
		"\xD5\t\x04\x02\x02\xD5<\x03\x02\x02\x02\xD6\xD9\n\x05\x02\x02\xD7\xD9" +
		"\x05;\x1E\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9>\x03" +
		"\x02\x02\x02\xDA\xDB\x071\x02\x02\xDB\xDC\x07,\x02\x02\xDC\xE0\x03\x02" +
		"\x02\x02\xDD\xDF\v\x02\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE2\x03\x02" +
		"\x02\x02\xE0\xE1\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE3\x03\x02" +
		"\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE4\x07,\x02\x02\xE4\xE5\x071\x02" +
		"\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\b \x02\x02\xE7@\x03\x02\x02\x02\xE8" +
		"\xE9\x071\x02\x02\xE9\xEA\x071\x02\x02\xEA\xEE\x03\x02\x02\x02\xEB\xED" +
		"\n\x06\x02\x02\xEC\xEB\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC" +
		"\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEE" +
		"\x03\x02\x02\x02\xF1\xF2\b!\x02\x02\xF2B\x03\x02\x02\x02\xF3\xF5\t\x07" +
		"\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF4\x03\x02" +
		"\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\b\"\x02" +
		"\x02\xF9D\x03\x02\x02\x02\v\x02\xBC\xBE\xC4\xCA\xD8\xE0\xEE\xF6\x03\x02" +
		"\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ArmLangLexer.__ATN) {
			ArmLangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ArmLangLexer._serializedATN));
		}

		return ArmLangLexer.__ATN;
	}

}


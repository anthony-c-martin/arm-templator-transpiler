import { readFileSync, writeFileSync } from 'fs';
const YAML = require('yamljs');

const ymlPath = `${__dirname}/../armlang.grammar.yml`;
const jsonPath = `${__dirname}/../armlang.grammar.json`;

const ymlFile = readFileSync(ymlPath, 'utf-8');
const object = YAML.parse(ymlFile);

writeFileSync(jsonPath, JSON.stringify(object, null, 2));
#!/usr/bin/env node

// on app start --> greet user, and present them with options:
//  1. find specific user
//  2. find all users, with option to filter by location and/or programming languages
require('dotenv').config();
import chalk from 'chalk';
import figlet from 'figlet';
import { Command } from 'commander';
import { clear } from 'console';
import { EOL } from 'os';
import { findUser } from './actions';
import { initializeRedis } from './container/redis';

const program = new Command();

async function main() {
  clear();
  await initializeRedis();
  // TODO: abstract out greeting process
  process.stdout.write(
    chalk.green(
      figlet.textSync('Github Users - CLI', {
        horizontalLayout: 'full'
      })
    ) + '\n'
  );

  // TODO: abstract out cli services setup
  program
    .name('Github Users CLI')
    .description('CLI to sift through Github users')
    .version('0.0.1');

  program
    .command('find')
    .description('Retrieve information for a specific Github user')
    .argument('<username>', 'username of Github user')
    .option('-s, --separator <char>', 'separator character', ',')
    .action(findUser);

  program
    .command('list')
    .description('Retrieve users already on database with optional filters')
    .option('-l', '--location <string>', 'filter by location')
    .option('-p', '--proficiency <languages...>');

  program.parse();
}

main();

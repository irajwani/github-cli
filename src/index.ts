// on app start --> greet user, and present them with options:
//  1. find specific user
//  2. find all users, with option to filter by location and/or programming languages

import { Command } from 'commander';
import { findUser } from './actions';
const program = new Command();

export function cli(args: string[]) {
  program
    .name('Custom Github CLI')
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

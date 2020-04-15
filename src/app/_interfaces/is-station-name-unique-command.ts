import { Command } from './command';

export class IsStationNameUniqueCommand extends Command {

  id: string;
  name: string;

  constructor(id: string, name: string) {
    super(IsStationNameUniqueCommand.name)
    this.id = id;
    this.name = name;
  }

}
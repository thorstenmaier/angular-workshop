import { Command } from './command';

export class DeleteStationCommand extends Command {

  id: string;

  constructor(id: string) {
    super(DeleteStationCommand.name)
    this.id = id;
  }

}
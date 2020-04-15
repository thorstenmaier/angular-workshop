import { Command } from './command';
import { Station } from './station';

export class AddStationCommand extends Command {

  station: Station;

  constructor(station: Station) {
    super(AddStationCommand.name)
    this.station = station;
  }

}
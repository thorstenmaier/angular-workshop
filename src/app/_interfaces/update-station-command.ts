import { Command } from './command';
import { Station } from './station';

export class UpdateStationCommand extends Command {

  station: Station;

  constructor(station: Station) {
    super(UpdateStationCommand.name)
    this.station = station;
  }

}
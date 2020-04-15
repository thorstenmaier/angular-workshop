import { Command } from './command';
import { Station } from './station';

export class UdpateStationCommand extends Command {

  station: Station;

  constructor(station: Station) {
    super(UdpateStationCommand.name)
    this.station = station;
  }

}
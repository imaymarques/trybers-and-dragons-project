import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType { return this._energyType; }
  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}
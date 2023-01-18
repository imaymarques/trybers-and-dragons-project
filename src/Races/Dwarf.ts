import Race from './Race';

export default class Dwarf extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}
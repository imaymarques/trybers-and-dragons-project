import Fighter, { SimpleFighter } from '../Fighter';
// import Fighter from './Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _p1: Fighter;
  private _swarm: (Fighter | SimpleFighter)[];

  constructor(p1: Fighter, swarm: (Fighter | SimpleFighter)[]) {
    super(p1);
    this._p1 = p1;
    this._swarm = swarm;
  }

  fight(): number {
    this._swarm.forEach((monster) => {
      while (this._p1.lifePoints > 0 && monster.lifePoints > 0) {
        this._p1.attack(monster);
        monster.attack(this.player);
      }
    });
    return super.fight();
  }
}
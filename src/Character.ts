import Fighter, { SimpleFighter } from './Fighter';
import Energy from './Energy';
import Archetype, { Mage } from './Archetypes';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  race: Race;
  archetype: Archetype;
  maxLifePoints: number;

  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = Math.ceil(Math.random() * 9);
    this.race = new Elf(name, this._dexterity);
    this.archetype = new Mage(name);
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = Math.ceil(Math.random() * 9);
    this._defense = Math.ceil(Math.random() * 9);
    this._energy = { 
      type_: this.archetype.energyType,
      amount: Math.ceil(Math.random() * 9),
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) { this._lifePoints -= damage; }
    if (damage <= 0) { this._lifePoints -= 1; }
    if (this._lifePoints <= 0) { this._lifePoints = -1; }
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  special(enemy: Fighter): void {
    const damage = 2 * this._strength;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    this.maxLifePoints += Math.ceil(Math.random() * 9);
    if (this.maxLifePoints > this.race.maxLifePoints) { 
      this.maxLifePoints = this.race.maxLifePoints; 
    }
    if (this._lifePoints < this.maxLifePoints) {
      this._lifePoints = this.maxLifePoints;
    }
    this._strength += Math.ceil(Math.random() * 9);
    this._dexterity += Math.ceil(Math.random() * 9);
    this._defense += Math.ceil(Math.random() * 9);
    this._energy.amount = 10;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._strength;
  }

  get energy() {
    return { ...this._energy };
  }

  get dexterity() {
    return this._dexterity;
  }
}
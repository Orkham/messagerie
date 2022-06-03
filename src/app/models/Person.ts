export class Person {
  private _nom: string;
  private _prenom: string;

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  constructor(nom: string, prenom: string) {
    this._nom = nom;
    this._prenom = prenom;
  }
}

import {Person} from "./Person";

export class Message {
  private _auteur: Person;
  private _text: string;
  private _date: Date;

  constructor(auteur: Person, text: string) {
    this._auteur = auteur;
    this._text = text;
    this._date = new Date();
  }

  get auteur(): Person {
    return this._auteur;
  }

  set auteur(value: Person) {
    this._auteur = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}

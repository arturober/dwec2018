import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit, OnDestroy {
  @ViewChild('personForm') personForm: NgForm;
  db: SQLiteObject = null;
  error = '';
  persons: { id?: number, name: string, age: number }[] = [];
  person: { id?: number, name: string, age: number } = {
    name: '',
    age: null
  };

  constructor(public sqlite: SQLite) {}

  async ngOnInit() {
    try {
      this.db = await this.sqlite.create({
        name: 'my.db',
        location: 'default'
      });
    } catch (e) {
      console.error('Connection error: ', e);
      return;
    }

    try {
      await this.db.executeSql('CREATE TABLE IF NOT EXISTS person (id integer primary key, name text, age integer)', []);
      const resultSet = await this.db.executeSql('SELECT * FROM person', []);

      for (let i = 0; i < resultSet.rows.length; i++) {
        this.persons.push({
          id: resultSet.rows.item(i).id,
          name: resultSet.rows.item(i).name,
          age: resultSet.rows.item(i).age
        });
      }
    } catch (e) {
      console.error('Can\'t create table: ', e);
    }
  }

  async ngOnDestroy() {
    if (this.db !== null) {
      await this.db.close();
      this.db = null;
    }
  }

  async add() {
    if (this.db === null) { return; }

    const res = await this.db.executeSql('INSERT INTO person (name, age) VALUES (?,?)', [this.person.name, this.person.age]);

    this.person.id = res.insertId;
    this.persons.push(this.person);
    this.person = { name: '', age: null };
    this.personForm.resetForm();
  }

  async remove(person, index: number) {
    if (this.db === null) { return; }

    const res = await this.db.executeSql('DELETE FROM person WHERE id = ?', [person.id]);
    if (res.rowsAffected > 0) {
      this.persons.splice(index, 1);
    }
  }
}

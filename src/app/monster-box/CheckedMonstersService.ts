import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckedMonstersService {
  checkedMonsters: number[] = [];
}

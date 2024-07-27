import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {
  gridSize: number = 12; // Number of cells per row
  cells: any[] = [];

  ngOnInit(): void {
    this.createGrid();
  }

  createGrid() {
    this.cells = Array.from({ length: this.gridSize * 12 });
  }
}

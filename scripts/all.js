const grid = [
    [ 1, 1, 1, 1, 1, 0, 0, 1, 1, 1 ],
    [ 0, 1, 1, 1, 1, 1, 0, 1, 0, 1 ],
    [ 0, 0, 1, 0, 1, 1, 1, 0, 0, 1 ],
    [ 1, 0, 1, 1, 1, 0, 1, 1, 0, 1 ],
    [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1 ],
    [ 1, 0, 1, 1, 1, 0, 0, 1, 1, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 1 ],
    [ 0, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
    [ 1, 1, 1, 1, 1, 0, 0, 1, 1, 1 ],
    [ 0, 0, 1, 0, 0, 1, 1, 0, 0, 1 ],
];
const gridSize = 10;

class MazeGenerator {
    generateMaze() {
        const table = document.createElement('table');

        for(let i = 0; i < gridSize; i++) {
            const row = document.createElement('tr');
            for(let j = 0; j < gridSize; j++) {
                const cell = document.createElement('td');
                const value = grid[i][j];

                value === 0 && cell.classList.add('blocked');
                (i === 0 && j === 0) && cell.classList.add('start');
                (i === gridSize - 1 && j === gridSize - 1) && cell.classList.add('end');
                cell.dataset.idx = `${i},${j}`;
                row.appendChild(cell);
            }

            table.appendChild(row);
        }

        document.body.appendChild(table);
    }
}


class Node {
    constructor(x, y, dist) {
        this.x = x;
        this.y = y;
        this.dist = dist;
    }
}

const maze = new MazeGenerator();
maze.generateMaze();
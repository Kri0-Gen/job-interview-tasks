module.exports = {
    getSpiralMatrix: (n) => {
        if (n <= 0) {
            return '';
        }

        const resultMatrix = [];
        for (let i = 0; i < n; i++) {
            resultMatrix.push(new Array(n));
        }

        // Every direction has horizontal or vertical shift and a next direction
        // Must change direction to the next then reach an edge of matrix or already filled element
        const directionMap = {
            RIGHT: {
                nextDirection: 'BOTTOM',
                horizontalShift: 1,
                verticalShift: 0
            },
            BOTTOM: {
                nextDirection: 'LEFT',
                horizontalShift: 0,
                verticalShift: 1
            },
            LEFT: {
                nextDirection: 'TOP',
                horizontalShift: -1,
                verticalShift: 0
            },
            TOP: {
                nextDirection: 'RIGHT',
                horizontalShift: 0,
                verticalShift: -1
            }
        };

        let i = 1;
        let currentRow = [0, 0];
        let direction = directionMap.RIGHT;
        resultMatrix[0][0] = 1;
        while (i < n * n) {
            let nextRow = [currentRow[0] + direction.verticalShift, currentRow[1] + direction.horizontalShift];
            // Should change direction if reach the edge of matrix or filled element
            if (nextRow[0] < 0 || nextRow[0] >= n || nextRow[1] < 0 || nextRow[1] >= n || resultMatrix[nextRow[0]][nextRow[1]]) {
                direction = directionMap[direction.nextDirection];
                nextRow = [currentRow[0] + direction.verticalShift, currentRow[1] + direction.horizontalShift];
            }
            resultMatrix[nextRow[0]][nextRow[1]] = ++i;
            currentRow = nextRow;
        }

        return resultMatrix.map((line) => line.join(' ')).join('\n');
    }
};

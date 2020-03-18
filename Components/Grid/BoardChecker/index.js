import {COLUMNS, ROWS} from "../../../Config";

const BoardChecker = (boardState, lastInsertedDiscPosition) => ({
    lastInsertedDisc: () => {
        const {columnIdx, rowIdx} = lastInsertedDiscPosition
        return boardState[columnIdx][rowIdx]
    },

    getVerticalLength() {
        const {columnIdx, rowIdx} = lastInsertedDiscPosition
        return Promise.resolve(
            1
            + this.getTopLength(columnIdx, rowIdx+1)
            + this.getBottomLength(columnIdx, rowIdx-1)
        )
    },

    getHorizontalLength() {
        const {columnIdx, rowIdx} = lastInsertedDiscPosition
        return Promise.resolve(1
            + this.getLeftLength(columnIdx-1, rowIdx)
            + this.getRightLength(columnIdx+1, rowIdx))
    },

    getLeftLength(columnIdx, rowIdx) {
        if(!this.outOfBounds(columnIdx, rowIdx)) {
            if(boardState[columnIdx][rowIdx] === this.lastInsertedDisc()) {
                return 1 + this.getLeftLength(columnIdx-1, rowIdx)
            }
        }
        return 0
    },

    getRightLength(columnIdx, rowIdx) {
        if(!this.outOfBounds(columnIdx, rowIdx)) {
            if(boardState[columnIdx][rowIdx] === this.lastInsertedDisc()) {
                return 1 + this.getRightLength(columnIdx+1, rowIdx)
            }
        }
        return 0
    },

    getLeftDiagonalLength() {
        const {columnIdx, rowIdx} = lastInsertedDiscPosition
        return Promise.resolve(1
            + this.getTopLeftLength(columnIdx-1, rowIdx+1)
            + this.getBottomRightLength(columnIdx+1, rowIdx-1))
    },

    getRightDiagonalLength() {
        const {columnIdx, rowIdx} = lastInsertedDiscPosition
        return Promise.resolve(1
            + this.getTopRightLength(columnIdx+1, rowIdx+1)
            + this.getBottomLeftLength(columnIdx-1, rowIdx-1))
    },

    getTopLength(columnIdx, rowIdx) {
        if(!this.outOfBounds(columnIdx, rowIdx)) {
            if(boardState[columnIdx][rowIdx] === this.lastInsertedDisc()) {
                return 1 + this.getTopLength(columnIdx, rowIdx+1)
            }
        }
        return 0
    },

    getBottomLength(columnIdx, rowIdx) {
        if(!this.outOfBounds(columnIdx, rowIdx)) {
            if(boardState[columnIdx][rowIdx] === this.lastInsertedDisc()) {
                return 1 + this.getBottomLength(columnIdx, rowIdx-1)
            }
        }
        return 0
    },

    getTopLeftLength(columnIdx, rowIdx) {
        if(!this.outOfBounds(columnIdx, rowIdx)) {
            if(boardState[columnIdx][rowIdx] === this.lastInsertedDisc()) {
                return 1 + this.getTopLeftLength(columnIdx-1, rowIdx+1)
            }
        }
        return 0
    },

    getTopRightLength(columnIdx, rowIdx) {
        if(!this.outOfBounds(columnIdx, rowIdx)) {
            if(boardState[columnIdx][rowIdx] === this.lastInsertedDisc()) {
                return 1 + this.getTopRightLength(columnIdx+1, rowIdx+1)
            }
        }
        return 0
    },

    getBottomLeftLength(columnIdx, rowIdx) {
        if(!this.outOfBounds(columnIdx, rowIdx)) {
            if(boardState[columnIdx][rowIdx] === this.lastInsertedDisc()) {
                return 1 + this.getBottomLeftLength(columnIdx-1, rowIdx-1)
            }
        }
        return 0
    },

    getBottomRightLength(columnIdx, rowIdx) {
        if(!this.outOfBounds(columnIdx, rowIdx)) {
            if(boardState[columnIdx][rowIdx] === this.lastInsertedDisc()) {
                return 1 + this.getBottomRightLength(columnIdx+1, rowIdx-1)
            }
        }
        return 0
    },

    outOfBounds(columnIdx, rowIdx) {
        const maxColumnIdx = COLUMNS - 1
        const maxRowIdx = ROWS - 1
        return (columnIdx < 0 || columnIdx > maxColumnIdx)
            || (rowIdx < 0 || rowIdx > maxRowIdx)
    },

    async fourInARow() {
        const [
            verticalLength,
            horizontalLength,
            leftDiagonalLength,
            rightDiagonalLength
        ] = await Promise.all([
            this.getVerticalLength(),
            this.getHorizontalLength(),
            this.getLeftDiagonalLength(),
            this.getRightDiagonalLength(),
        ])

        return (verticalLength === 4)
            || (horizontalLength === 4)
            || (leftDiagonalLength === 4)
            || (rightDiagonalLength === 4)
    }
})

export default BoardChecker
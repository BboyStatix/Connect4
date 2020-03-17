import React from 'react'
import BoardChecker from "./index";

describe('fourInARow', () => {
    it('returns true if it finds 4 of the same color disc in a vertical row', () => {
        const boardState = [
            [1,1,1,1,null,null],
            [2,null,null,null,null,null],
            [null,null,null,null,null,null],
            [2,null,null,null,null,null],
            [null,null,null,null,null,null],
            [2,null,null,null,null,null],
            [null,null,null,null,null,null],
        ]

        const lastInsertedDiscPosition = {columnIdx: 0, rowIdx: 3}
        const boardChecker = BoardChecker(boardState, lastInsertedDiscPosition)

        expect(boardChecker.fourInARow()).toBe(true)
    })

    it('returns true if it finds 4 of the same color disc in a horizontal row', () => {
        const boardState = [
            [1,2,null,null,null,null],
            [1,2,null,null,null,null],
            [1,2,null,null,null,null],
            [1,null,null,null,null,null],
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
        ]

        const lastInsertedDiscPosition = {columnIdx: 3, rowIdx: 0}
        const boardChecker = BoardChecker(boardState, lastInsertedDiscPosition)

        expect(boardChecker.fourInARow()).toBe(true)
    })

    it('returns true if it finds 4 of the same color disc in a right diagonal row', () => {
        const boardState = [
            [2,null,null,null,null,null],
            [1,2,null,null,null,null],
            [1,1,2,null,null,null],
            [1,2,1,2,null,null],
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
        ]

        const lastInsertedDiscPosition = {columnIdx: 3, rowIdx: 3}
        const boardChecker = BoardChecker(boardState, lastInsertedDiscPosition)

        expect(boardChecker.fourInARow()).toBe(true)
    })

    it('returns true if it finds 4 of the same color disc in a left diagonal row', () => {
        const boardState = [
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
            [1,2,1,2,null,null],
            [1,1,2,null,null,null],
            [1,2,null,null,null,null],
            [2,null,null,null,null,null],
        ]

        const lastInsertedDiscPosition = {columnIdx: 3, rowIdx: 3}
        const boardChecker = BoardChecker(boardState, lastInsertedDiscPosition)

        expect(boardChecker.fourInARow()).toBe(true)
    })
})
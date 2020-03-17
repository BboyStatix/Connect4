import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import {check4InARow} from "./index";
import {PLAYER1} from "../../Config";

// test('shows the children when the checkbox is checked', () => {
//     render(<Grid />)
//
//     // query* functions will return the element or null if it cannot be found
//     // get* functions will return the element or throw an error if it cannot be found
//     expect(screen.queryByText(testMessage)).toBeNull()
//
//     // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
//     fireEvent.click(screen.getByLabelText(/show/i))
//
//     // .toBeInTheDocument() is an assertion that comes from jest-dom
//     // otherwise you could use .toBeDefined()
//     expect(screen.getByText(testMessage)).toBeInTheDocument()
// })

describe('check4InARow', () => {
    it('returns true if it finds 4 of the same color disc in a row', () => {
        const boardState = [
            [1,1,1,1,null,null],
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
            [null,null,null,null,null,null],
        ]

        const lastInsertedElemPosition = {columnIdx: 0, rowIdx: 3}
        expect(check4InARow(boardState, lastInsertedElemPosition)).toBe(4)
    })
})
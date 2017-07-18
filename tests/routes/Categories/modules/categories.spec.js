import {
    CATEGORIES_ALL_SUCCESS,
    CATEGORIES_DELETE,
    default as categoriesReducer
} from 'routes/Categories/modules/categories'

describe("Categories > categories module", () => {

    describe("Reducer", () => {

        it("Should be a function", () => {
            expect(categoriesReducer).to.be.a('function')
        })

        describe(`Action ${CATEGORIES_ALL_SUCCESS}`, () => {
            
            it("Load Categories", () => {
                categoriesReducer(
                    [],
                    {
                        type: CATEGORIES_ALL_SUCCESS,
                        categories: ["1", "2"]
                    }
                ).should.deep.equal(["1", "2"])
            })
        })

        describe(`Action ${CATEGORIES_DELETE}`, () => {

            it("Delete category", () => {
                categoriesReducer(
                    [{id: '1'}, {id: '2'}],
                    {
                        type: CATEGORIES_DELETE,
                        id: '2'
                    }
                ).should.deep.equal([{id: '1'}])
            })

            it("Delete missing category = no change", () => {
                categoriesReducer(
                    [{id: '1'}, {id: '2'}],
                    {
                        type: CATEGORIES_DELETE,
                        id: '3'
                    }
                ).should.deep.equal([{id: '1'}, {id: '2'}])
            })

        })

        describe('Any other action', () => {

            const state = {}

            it ('Should not affect the state', () => {
                categoriesReducer(
                    state,
                    {
                        type: 'SOME UNKNOWN ACTION'
                    }
                ).should.equal(state)
            })

        })

    })

})
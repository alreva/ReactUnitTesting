import {
  IMAGES_CATEGORY_SWITCHED,
  IMAGES_ALL_SUCCESS,
  imagesAll,
  imagesCategorySwitched,
  imagesAllSuccess,
  initialState,
  default as imagesReducer
} from 'routes/Images/modules/images'
import { UNEXPECTED_ERROR, unexpectedError } from 'store/error'
import { jsonOk, jsonError } from '../../../mocks/fetch.spec'

describe('Images module', () => {
  describe('Async actions', () => {
    describe('imagesAll', () => {
      let _dispatchSpy, _getStateSpy

      describe('when OK', () => {
        let _getImages
        const _expectedImages = ['1', '2']

        beforeEach(() => {
          sinon.stub(window, 'fetch')
          window.fetch.returns(jsonOk(_expectedImages));
          _dispatchSpy = sinon.spy()
          _getStateSpy = sinon.spy()
        })

        afterEach(() => {
          window.fetch.restore()
        })

        it(`first dispatches ${IMAGES_CATEGORY_SWITCHED}`, () => {
          return imagesAll('1')(_dispatchSpy, _getStateSpy)
            .then(() => {
              _dispatchSpy.should.have.been
                .calledTwice()
              _dispatchSpy
                .firstCall.should.have.been
                .calledWith(imagesCategorySwitched('1'))
            })
        })

        it(`then dispatches ${IMAGES_ALL_SUCCESS}`, () => {
          return imagesAll(_getImages)(_dispatchSpy, _getStateSpy)
            .then(() => {
              _dispatchSpy.should.have.been.calledTwice()
              _dispatchSpy
                .secondCall.should.have.been
                .calledWith(imagesAllSuccess(_expectedImages))
            })
        })
      })

      describe('when error', () => {
        let _getImagesErr
        const _errorMessage = 'some error 29d7feca53374118aaf53ccc110bc70d'

        beforeEach(() => {
          sinon.stub(window, 'fetch')
          window.fetch.returns(jsonError('404', _errorMessage));
          _dispatchSpy = sinon.spy()
          _getStateSpy = sinon.spy()
        })
        
        afterEach(() => {
          window.fetch.restore()
        })

        it(`first dispatches ${IMAGES_CATEGORY_SWITCHED}`, () => {
          return imagesAll('1')(_dispatchSpy, _getStateSpy)
            .then(() => {
              _dispatchSpy.should.have.been.calledTwice()
              _dispatchSpy
                .firstCall.should.have.been
                .calledWith(imagesCategorySwitched('1'))
            })
        })

        it(`then dispatches ${UNEXPECTED_ERROR}`, () => {
          const expected = unexpectedError(new Error(_errorMessage))
          return imagesAll('1')(_dispatchSpy, _getStateSpy)
            .then(() => {
              _dispatchSpy.should.have.been.calledTwice()
              _dispatchSpy
                .secondCall.should.have.been
                .calledWith(sinon.match(actual => 
                  actual.type === expected.type
                    && actual.error.message === expected.error.message
                ))
            })
        })
      })
    })
  })

  describe('Reducer', () => {
    it('is a function', () => {
      imagesReducer.should.be.a('function')
    })

    it('returns initial state', () => {
      imagesReducer(undefined, {})
        .should.deep.equal(initialState)
    })

    describe(`Action ${IMAGES_CATEGORY_SWITCHED}`, () => {
      it('should have \'pending\' state', () => {
        imagesReducer(initialState, imagesCategorySwitched('1'))
          .should.deep.equal({ complete: false, categoryId: '1' })
      })
    })

    describe(`Action ${IMAGES_ALL_SUCCESS}`, () => {
      it('should set images and complete the loading', () => {
        const _images = ['2f0f3422593f4815b6cb09f834681332', 'e9e452710a1d4efeaeae2800b06a3f15']
        imagesReducer(initialState, imagesAllSuccess(_images))
          .should.deep.equal({ complete: true, images: _images })
      })
    })

    describe(`Action ${UNEXPECTED_ERROR}`, () => {
      it('should reset the state', () => {
        imagesReducer('not an initial state', unexpectedError(new Error('d73dc9a8e7024143a446f24e8ab947b8')))
          .should.equal(initialState)
      })
    })

    describe(`Any other action`, () => {
      it('should return the current state', () => {
        const currentState = '2f0f3422593f4815b6cb09f834681332'
        imagesReducer(currentState, { type: 'e9e452710a1d4efeaeae2800b06a3f15' })
          .should.equal(currentState)
      })
    })
  })
})

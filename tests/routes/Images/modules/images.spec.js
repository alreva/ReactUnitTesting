import {
  IMAGES_CATEGORY_SWITCHED,
  IMAGES_ALL_SUCCESS,
  imagesAll,
  imagesCategorySwitched,
  imagesAllSuccess,
  default as imagesReducer
} from 'routes/Images/modules/images'
import { UNEXPECTED_ERROR } from 'store/error'

describe('Images --> images module', () => {
  describe('Async actions', () => {
    describe('imagesAll', () => {
      let _getImages, _getImagesErr, _dispatchSpy, _getStateSpy
      const _expectedImages = ['1', '2']
      const _expectedError = new Error('some error 29d7feca53374118aaf53ccc110bc70d')

      beforeEach(() => {
        _getImages = () => new Promise((resolve, reject) => {
          resolve(_expectedImages)
        })
        _getImagesErr = () => new Promise((resolve, reject) => {
          throw _expectedError
        })
        _dispatchSpy = sinon.spy()
        _getStateSpy = sinon.spy()
      })

      it(`when OK, firstly dispatches ${IMAGES_CATEGORY_SWITCHED}`, () => {
        return imagesAll(_getImages)(_dispatchSpy, _getStateSpy)
          .then(() => {
            _dispatchSpy.should.have.been.calledTwice()
            _dispatchSpy.firstCall.should.have.been.calledWith({
              type: IMAGES_CATEGORY_SWITCHED
            })
          })
      })

      it(`when OK, secondly dispatches ${IMAGES_ALL_SUCCESS} first`, () => {
        return imagesAll(_getImages)(_dispatchSpy, _getStateSpy)
          .then(() => {
            _dispatchSpy.should.have.been.calledTwice()
            _dispatchSpy.secondCall.should.have.been.calledWith({
              type: IMAGES_ALL_SUCCESS,
              images: _expectedImages
            })
          })
      })

      it(`when error, firstly dispatches ${IMAGES_CATEGORY_SWITCHED}`, () => {
        return imagesAll(_getImagesErr)(_dispatchSpy, _getStateSpy)
          .then(() => {
            _dispatchSpy.should.have.been.calledTwice()
            _dispatchSpy.firstCall.should.have.been.calledWith({
              type: IMAGES_CATEGORY_SWITCHED
            })
          })
      })

      it(`when error, secondly dispatches ${UNEXPECTED_ERROR}`, () => {
        return imagesAll(_getImagesErr)(_dispatchSpy, _getStateSpy)
          .then(() => {
            _dispatchSpy.should.have.been.calledTwice()
            _dispatchSpy.secondCall.should.have.been.calledWith({
              type: UNEXPECTED_ERROR,
              error: _expectedError
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
        .should.deep.equal({
          complete: false,
          images: []
        })
    })
    describe(`Action ${IMAGES_CATEGORY_SWITCHED}`, () => {
      it('should have \'pending\' state', () => {
        const initialState = {}
        const expectedState = { complete: false, images: [] }
        imagesReducer(initialState, imagesCategorySwitched(2))
          .should.deep.equal(expectedState)
      })
    })
    describe(`Action ${IMAGES_ALL_SUCCESS}`, () => {
      it('should set images and complete the loading', () => {
        const images = ['2f0f3422593f4815b6cb09f834681332', 'e9e452710a1d4efeaeae2800b06a3f15']
        const initialState = {}
        const expectedState = { complete: true, images }
        imagesReducer(initialState, imagesAllSuccess(images))
          .should.deep.equal(expectedState)
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

'use strict'

/**
 * Dependencies
 */

import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

/**
 * Define store
 */

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    thunk
  )
)

/**
 * Export store
 */

export default store

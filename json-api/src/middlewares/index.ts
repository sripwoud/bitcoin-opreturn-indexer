import express from 'express'

const middlewares = [express.json()]

export { middlewares }
export { errorHandler } from './error-handler'

import express from 'express'

const middlewares = [express.json()]

export { middlewares }
export * from './error-handler'
export * from './post-processer'

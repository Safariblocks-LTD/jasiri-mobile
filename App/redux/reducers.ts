import {createAction} from '@reduxjs/toolkit'

function withPayloadType<T>() {
    return (t: T) => ({ payload: t })
  }
export const action = createAction('test', withPayloadType<string>())





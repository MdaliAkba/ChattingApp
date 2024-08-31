import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './Slices/UserSlices'

export default configureStore({
  reducer: {
    userLoginInfo: userSlice
  },
})
import { createRoot } from 'react-dom/client'

// 导入provider
import {  RouterProvider } from 'react-router-dom'
// 导入router实例
import { router } from './router/index'
import { fetchChannelAPI } from '@/apis/list'

fetchChannelAPI().then(res => {
  console.log(res.data.data.channels)
})

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>

)

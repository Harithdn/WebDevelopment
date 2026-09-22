import Todo from "../components/Todo"
import {Provider} from 'react-redux'
import { store } from "../app/app"
export default function App()
{
  return(
    <>
    <Provider store={store}>
      <Todo/>
    </Provider>
    
    </>
  )
}
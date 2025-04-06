// react + ts

// 根据初始值自动推断
// 场景：适合明确的初始值

import { useEffect, useRef, useState } from "react"

type User = {
  name: string
  age: number
}


interface Props {
  onGetMsg?: (msg: string) => void
  className?: string,
  title?: string
  children?: React.ReactNode
}
// type Props = {
//   className: string
// }
function Button (props: Props) {
  const {className, children} = props
  return <button className={className}>{children}</button>
}

function Son(props: Props) {
  const {onGetMsg} = props
  const clickHandler = () => {
    onGetMsg?.('this is msg')
  }
  return <button onClick={clickHandler}>sendMsg</button>
}


function App() {
  // useRef + ts
  // 1.获取dom
  const domRef = useRef<HTMLInputElement>(null)
  // 2.稳定引用的存储器
  const timerId = useRef<number | undefined>(undefined)
  useEffect(() => {
    // 可选链 面前不为空值（null / undefined）执行点运算
    // 类型守卫 防止出现空值点运算错误
    domRef.current?.focus()
    timerId.current = setInterval(() =>{
      console.log('123')
    }, 1000)

    return () => clearInterval(timerId.current)
  }, [])

  const [value, toggle] = useState(false)

  const [list, setList] = useState([1, 2, 3])

  const changeValue = () => {
    toggle(true)
  }
  
  const changeList = () => {
    setList([4, 5, 6])
  }

  /* const [user, setUSer] = useState<User>({
    name: 'jack',
    age: 18,
  }) */
  /* const [user, setUSer] = useState<User>(() => {
    return {
      name: 'jack',
      age: 18
    }
  }) */
    const [user, setUSer] = useState<User | null>(null)

    const changeUser = () => {
      setUSer(null)
      setUSer(() => ({
        name: 'john',
        age: 28
      }))
    }
  
  const getMsgHandler = (msg: string) => {
    console.log(msg)
  }

  return (
    <>
    <input ref={domRef}/>
    <Button className="test" title="this is title">click me!</Button>
    <Button className="test" title="this is title">
      <span>this is span</span>
    </Button>
    <Son onGetMsg={(msg) => console.log(msg)}/>
    <Son onGetMsg={getMsgHandler}/>
      this is App {value} {list} {/* {user.age} */} {user?.age} {/* 为了类型安全 可选链做类型守卫 只有user不为空值null的时候才进行点运算 */}
    </>
  )
}

export default App

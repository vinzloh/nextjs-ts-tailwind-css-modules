import { useEffect } from 'react'
import styles from './styles.module.scss'

const Button = (a: string) => {
  useEffect(() => {
    console.log(`a:`, a)
  }, [a]) // remove a to trigger eslint error
  return (
    <button className={styles.root + ' text-white bg-blue-400 p-2 rounded'}>
      Next.js 10 + TypeScript + Tailwind + SASS Modules + Prettier starter kit
    </button>
  )
}
export default Button

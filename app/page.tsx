import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Flex>
          <Label>Provide Business Summary: </Label>
          <input id="business_summary" isRequired={true}></input>
        </Flex>
      </div>
    </main>
  )
}

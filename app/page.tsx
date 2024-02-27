import Image from 'next/image'
import styles from './page.module.css'
import {TextAreaField} from '@aws-amplify/ui-react'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <TextAreaField>
          <Label>Provide Business Summary: </Label>
          <id="business_summary" isRequired={true}></id>
        </TextAreaField>
      </div>
    </main>
  )
}

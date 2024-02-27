import Image from 'next/image'
import styles from './page.module.css'
import {TextAreaField} from '@aws-amplify/ui-react'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <TextAreaField id="business_summary">
          <Label>Provide Business Summary: </Label>
        </TextAreaField>
      </div>
    </main>
  )
}

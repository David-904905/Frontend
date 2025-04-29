import {Suspense} from 'react'

import styles from "./page.module.css"

import UserProfile from './user/UserProfile'

const Page = () => {
  return (
    <Suspense fallback={<p>Loading user...</p>}>
      <UserProfile userId={2} />
      <div className={styles.container}>
        Water
      </div>
    </Suspense>
  )
}

export default Page
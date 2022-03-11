import React from 'react'
import { default as SignIn } from '@kmon/dapps/dist/containers/SignInPage'
import { Page } from '@kmon/ui'

import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import './SignInPage.css'

const SignInPage = () => {
  return (
    <>
      <Navbar isFullscreen />
      <Page className="SignInPage" isFullscreen>
        <SignIn />
      </Page>
      <Footer isFullscreen />
    </>
  )
}

export default React.memo(SignInPage)

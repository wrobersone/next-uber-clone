import React from 'react'
import tw from "tailwind-styled-components"

const Login = () => {
  return (
    <Wrapper>
        <UberLogo src='https://i.ibb.co/ZMhy8ws/uber-logo.png' />
        <Title>Log In to Access Your Account</Title>
        <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton>Sign In With Google</SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen bg-gray-100 w-screen p-4
`

const UberLogo = tw.img`
  h-20 w-auto object-contain self-start
`

const HeadImage = tw.img`
    object-contain w-full
`

const Title = tw.div`
    text-5xl pt-4 text-gray-500
`

const SignInButton = tw.button`
    bg-black text-white text-center py-4 mt-8 w-full self-center 
`
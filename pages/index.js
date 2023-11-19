import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from "./components/Map"

export default function Home() {

  return (
    <>
      <Head>
        <title>Uber Clone Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Wrapper>
        <Map />
        <ActionItems>
          {/* Header */}
          <Header>
            <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
            <Profile>
              <Name>Profile User</Name>
              <UserImage src="https://lh3.googleusercontent.com/a/ACg8ocJuFH3j5j5XYiReDUBZmGCT0a7Ds2f-iN-cx07TzA6Www=s288-c-no" />
            </Profile>
          </Header>
          {/* ActionButtons */}
          <ActionButtons>
            <ActionButton><ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' /> Ride</ActionButton>         
            <ActionButton><ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' /> Wheels</ActionButton>         
            <ActionButton><ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' /> Reserve</ActionButton>         
          </ActionButtons>
          {/* InputButton */}
        </ActionItems>
      </Wrapper>
    </>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1  p-4
`

const Header = tw.div`
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28 
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
  h-3/5
`
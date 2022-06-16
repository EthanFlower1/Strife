import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import VideoPlayer from "./components/VideoPlayer"
import { ContextProvider } from './util/context'

export default function Home() {
  return (
    <ContextProvider>
      <VideoPlayer />
    </ContextProvider>
  )
}

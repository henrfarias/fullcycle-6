import { NextPage } from 'next'
import Image from 'next/image'
import useSWR from 'swr'
import Title from '../components/Title'
import Tweet from '../components/Tweet'
import http from '../utils/http'
import { Tweet as TweetModel } from '../utils/models'

const fetcher = (url: string) => http.get(url).then((res) => res.data)

const TweetsPage: NextPage = () => {
  const { data: tweets } = useSWR<TweetModel[]>('tweets', fetcher, {
    refreshInterval: 5000,
  })
  return (
    <div>
      <Title>Tweets</Title>
      {tweets?.map((t, key) => (
        <Tweet tweet={t} key={key} />
      ))}
    </div>
  )
}

export default TweetsPage

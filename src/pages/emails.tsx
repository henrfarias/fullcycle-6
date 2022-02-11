import { NextPage } from 'next'
import { FormEvent } from 'react'
import useSWR from 'swr'
import Button from '../components/Button'
import Title from '../components/Title'
import http from '../utils/http'

const fetcher = (url: string) =>
  http.get(url).then((res) => (res.data === '' ? [] : res.data.emails))

const EmailsPage: NextPage = () => {
  const { data } = useSWR('mail-list', fetcher, { fallbackData: [] })
  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    const emailsTextarea = document.getElementById(
      'emails'
    ) as HTMLTextAreaElement
    await http.post('mail-list', { emails: emailsTextarea.value.split('\n') })
  }

  return (
    <div>
      <Title>Emails</Title>
      <div className="border-b m-3" />
      <form onSubmit={onSubmit}>
        <textarea
          id="emails"
          className="border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-transparent leading-tight focus:outline-none focus:shadow-outline"
          rows={10}
          defaultValue={data.join('\n')}
          placeholder="Digite os emails separados por linha"
        ></textarea>
        <Button text='Salvar' />
      </form>
    </div>
  )
}

export default EmailsPage

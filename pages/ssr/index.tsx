import { NextPage, GetServerSideProps } from 'next'

type Props = {
  message: string
}

const PageSSR: NextPage<Props> = (props) => {
  const { message } = props
  return (
    <>
      <h1>SSRページ</h1>
      <p>{ message }</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('📃context.resolvedUrl', context.resolvedUrl)
  console.log('➕context.query', context.query)
  console.log('👉context.req', context.req)
  console.log('👈context.res', context.res)
  return {
    props: {
      message: 'アクセスごとにSSRでpropsに渡されるメッセージ'
    }
  }
}

export default PageSSR
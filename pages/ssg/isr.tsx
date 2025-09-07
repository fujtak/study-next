import type { NextPage, GetStaticProps } from 'next'

type Props = {
  message: string
}

const PageISR: NextPage<Props> = (props) => {
  const { message } = props
  return (
    <>
      <h1>ISRページ</h1>
      <p>{ message }</p>
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      message: '定期的なISRビルド時にpropsに渡されるメッセージ'
    },
    revalidate: 60,
  }
}

export default PageISR
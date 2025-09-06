import { NextPage, GetStaticProps } from "next"

type Props = {
  message: string
}

const PageSSG: NextPage<Props> = (props) => {
  const { message } = props
  return (
    <>
      <h1>SSGページ</h1>
      <p>{message}</p>
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  console.log('🔥 getStaticProps')
  return {
    props: {
      message: 'SSGビルド時にpropsに渡されたメッセージ'
    }
  }
}

export default PageSSG
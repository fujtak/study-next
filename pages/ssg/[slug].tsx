import { NextPage, GetStaticPaths ,GetStaticProps } from "next"

type Props = {
  message: string
}

const PageSSGMulti: NextPage<Props> = (props) => {
  const { message } = props
  return (
    <>
      <h1>複数のSSGページ</h1>
      <p>{ message }</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: '1' } },
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const message = context.params?.slug
    ? `【slug:${context.params?.slug}】SSGビルド時にpropsに渡されたメッセージ`
    : ''
  return {
    props: {
      message
    }
  }
}

export default PageSSGMulti
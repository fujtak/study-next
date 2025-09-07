import { NextPage, GetStaticPaths ,GetStaticProps } from "next"
import { useRouter } from "next/router"

type Props = {
  message: string
}

const PageSSGMulti: NextPage<Props> = (props) => {
  const { message } = props
  const router = useRouter()

  if(router.isFallback) {
    return <p>...fallback中</p>
  }

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
    fallback: true
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
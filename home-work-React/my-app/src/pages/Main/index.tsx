import { Header } from "../../components/Header/Header"
import { PostList } from "../../components/Posts/List"
import { posts } from "../../mocks"

export const Main = () => {
  return (
    <>
      <Header/>
      <PostList posts={posts}/>
    </>
  )
}
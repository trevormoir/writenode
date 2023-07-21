import { useTitle } from "../hook/useTitle"
import { PostCard, SkeletonCard } from '../components';
import { useState, useEffect, useRef } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

export const HomePage = ({isAuth, setIsAuth}) => {
  useTitle("Home");

  const [posts, setPosts] = useState([false, false]);
  const postsRef = useRef(collection(db, "posts")); //had to wrap in reference so it can be used as a dependency in useEffect below
  const [toggle, setToggle] = useState(false);
  

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      setPosts(data.docs.map((document) => ({...document.data(), id: document.id})));
    }
    getPosts();
  },[postsRef, toggle, isAuth]) //can't use function or object as dependency; needed to wrap in reference (postsRef)

  // const posts = [
  //   {id: 1, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quidem magnam vitae, deserunt facilis, commodi accusamus doloribus fugiat, soluta debitis illo nostrum quo tempora consequatur quas illum nobis laboriosam recusandae distinctio nihil ratione. Minima reprehenderit maiores fugiat cupiditate dolorem, consequuntur asperiores nostrum voluptatem laboriosam temporibus obcaecati, nesciunt beatae possimus tenetur.", author: "Shubham"}, 
  //   {id: 2, title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quidem magnam vitae, deserunt facilis, commodi accusamus doloribus fugiat, soluta debitis illo nostrum quo tempora consequatur quas illum nobis laboriosam recusandae distinctio nihil ratione. Minima reprehenderit maiores fugiat cupiditate dolorem, consequuntur asperiores nostrum voluptatem.", author: "Shubham"}
  // ]

  return (
    <section>
        { posts.map((post, index) => (
          post ? (
            <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
          ) : (
            <SkeletonCard key={index} />
          )
          
        )) } 
    </section>
  )
}

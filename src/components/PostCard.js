import { doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/config';

export const PostCard = ({post, toggle, setToggle}) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;

  async function handleDelete(id) {
    const documentReference = doc(db, "posts", id);

    await deleteDoc(documentReference);
    setToggle(!toggle);
  }

  return (
    <div className="card">
      <p className="title">{post.title}</p>
      <p className="description">{post.description}</p>
      <p className="control">
        <span className="author">{post.author.name}</span>
        {isAuth && (post.author.id === auth.currentUser.uid) && <span className="delete cursor-pointer" onClick={() => handleDelete(post.id)}><i className="bi bi-trash3"></i></span> }
      </p>
    </div>
  )
}

import { useTitle } from "../hook/useTitle"
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

export const CreatePost = () => {
  useTitle("Create Post");
  const navigate = useNavigate();
  const postRef = collection(db, "posts");

  async function handleSubmit(event) {
    event.preventDefault();

    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    }
    await addDoc(postRef, document);
    navigate('/');
  }

  return (
    <section className="create">
        <div className="heading">
          <h1>Add New Post</h1>
        </div>
        <form className="createPost" onSubmit={handleSubmit}>
          <input type="text" className="title" name="title" placeholder="Title" maxLength="50" required></input>
          <textarea type="text" className="description" name="description" placeholder="Description" maxLength="600" required></textarea>
          <button type="submit" className="submit">Create</button>
        </form>
    </section>
  )
}

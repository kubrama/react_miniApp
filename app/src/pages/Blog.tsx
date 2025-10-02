import { useEffect, useState } from "react";
import type { Post } from "../types/blog";
import { fetchPosts } from "../services/blogService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Title,
  Form,
  PostList,
  PostCard,
  Actions,
} from "../assets/css/Blog.styled";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newPost, setNewPost] = useState<Omit<Post, "id">>({
    title: "",
    body: "",
  });
  const [editPostId, setEditPostId] = useState<number | null>(null);

 
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
        toast.error(`${message}`, { toastId: "fetch-error" });

      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);


  const addPost = () => {
    if (!newPost.title.trim() || !newPost.body.trim()) {
      toast.warn("Fill all the fields");
      return;
    }
    const newEntry: Post = { id: Date.now(), ...newPost };
    setPosts([newEntry, ...posts]);
    setNewPost({ title: "", body: "" });
    toast.success("Post is successfully created");
  };

 
  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
    toast.info("Post is deleted");
  };

 
  const startEdit = (post: Post) => {
    setEditPostId(post.id);
    setNewPost({ title: post.title, body: post.body });
  };

 
  const saveEdit = () => {
    if (editPostId === null) return;
    setPosts(
      posts.map((post) =>
        post.id === editPostId ? { ...post, ...newPost } : post
      )
    );
    setEditPostId(null);
    setNewPost({ title: "", body: "" });
    toast.success("Post is edited");
  };

  
  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR: {error}</p>;

  return (
    <Container>
      <Title> Blog</Title>

      <Form>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        {editPostId ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={addPost}>Add</button>
        )}
      </Form>

      <PostList>
        {posts.map((post) => (
          <PostCard key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Actions>
              <button onClick={() => deletePost(post.id)}>Delete</button>
              <button onClick={() => startEdit(post)}>Edit</button>
            </Actions>
          </PostCard>
        ))}
      </PostList>

      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};

export default Blog;

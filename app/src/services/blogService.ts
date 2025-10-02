import api from "./api";
import type { Post } from "../types/blog";


export const fetchPosts = async (): Promise<Post[]> => {
  const res = await api.get<Post[]>("/posts?_limit=6");
  return res.data;
};


export const createPost = async (newPost: Omit<Post, "id">): Promise<Post> => {
  const res = await api.post<Post>("/posts", newPost);
  return res.data;
};


export const deletePostById = async (id: number): Promise<void> => {
  await api.delete(`/posts/${id}`);
};


export const updatePost = async (id: number, updatedPost: Omit<Post, "id">): Promise<Post> => {
  const res = await api.put<Post>(`/posts/${id}`, updatedPost);
  return res.data;
};

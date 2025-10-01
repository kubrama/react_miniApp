import type {Post} from "../types/blog"

const API_URL= "https://jsonplaceholder.typicode.com/posts";

export async function fetchPosts(limit=6): Promise<Post[]>{
    const res= await fetch(`${API_URL}?_limit=${limit}`);
    if (!res.ok){
        throw new Error('Failed');
    }
    return res.json();
}
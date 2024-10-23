"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
const baseUrl = "https://api-creddit.eapi.joincoded.com/posts";
const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function fetchPosts() {
  const response = await fetch(`${baseUrl}/posts`);
  const posts = await response.json();
  return posts;
}

export async function fetchPost(id) {
  const response = await fetch(`${baseUrl}/posts/${id}`);
  const post = await response.json();
  return post;
}

export async function createPost(formData) {
  const postData = {
    ...Object.fromEntries(formData),
    adopted: 0,
  };
  const response = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify(postData),
  });
  const newPost = await response.json();
  revalidatePath("/posts");
  revalidatePath(`/posts/[id]`, "page");
  redirect(`/posts/${newPost.id}`);
}

export async function deletePet(id) {
  const response = await fetch(`${baseUrl}/posts/${id}`, {
    method: "DELETE",
    headers,
  });
  revalidatePath("/posts");
  revalidatePath(`/posts/[id]`, "page");
  redirect(`/posts`);
}

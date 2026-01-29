import axios from "axios";
import type { IPost } from "../shared/types/post.interface";

const BASE_URL = "https://jsonplaceholder.typicode.com"

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export interface FetchPostsParams {
  _page: number
  _limit: number
  title_like?: string
}

export interface PostsResponse {
  data: IPost[]
  total: number
}

export const fetchPosts = async ({
  _page = 1,
  _limit = 10,
  title_like
}: FetchPostsParams): Promise<PostsResponse> => {
  
  const params = {
    _page,
    _limit,
    ...(title_like?.trim() ? { title_like } : {})
  };

  const res = await axiosInstance.get<IPost[]>("/posts", { params })

  const total = Number(res.headers["x-total-count"] || 0)

  return { data: res.data, total }
};

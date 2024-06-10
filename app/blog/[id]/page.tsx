'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import Footer from "@/app/components/Footer";

export interface Post {
    map(arg0: (post: Post, index: number) => import("react").JSX.Element): import("react").ReactNode;
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
    views: string[];

}

function PostDetail() {

    const [data, setData] = useState<Post>();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                try {
                    const response = await axios.get(`https://dummyjson.com/posts/${id}`);
                    setData(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchData();
    }, [id]);

    return(
        <div className="flex">

            <div className="bg-white rounded-lg border-4 border-gray-300  w-full md:w-auto m-6 p-5">
                <h1 className="text-2xl">{data?.title}</h1>
                <p className="mt-5">{data?.body}</p>
                <p className="mt-5">Views: {data?.views}</p>
                {/*<p className="mt-5">Votes: {data?.reactions.likes - data?.reactions.dislikes}</p>*/}
                <p className="mt-5">User {data?.userId}</p>
            </div>


        </div>
    )
}

export default PostDetail;
"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from "next/link";
import {Post} from "@/app/blog/[id]/page";



const Posts = () => {
    // @ts-ignore
    const [data, setData] = useState<Post>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/posts');
                //console.log('Fetched data:', response.data.posts);
                setData(response.data.posts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    console.log(data);

    // @ts-ignore
    // @ts-ignore
    return (
        <div >

            {data.map((post: Post, index:number) => (
                <Link  key={index} href={`/blog/${post.id}`}>
                    <div className="bg-white rounded-lg border-4 border-gray-300  w-full md:w-auto m-6 p-5">
                        <h1 className="text-2xl">{post.title}</h1>
                        <p className="mt-5">{post.body}</p>

                        <p className="mt-5">Views: {post.views}</p>

                        <p className="mt-5">User {post.userId}</p>
                    </div>
                </Link>
            ))}

        </div>
    );
};

export default Posts;
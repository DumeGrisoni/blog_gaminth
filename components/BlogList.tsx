import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image"
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props ={
    posts: Post[];
}

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="text-center flex border-[#ffedd2] mb-4" />
      
      <article className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
          {posts.map((post) => (
            <ClientSideRoute route={`/post/${post.slug.current}`}  key={post._id}>
              <div className="flex flex-col group cursor-pointer" >
                <section className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out backface-hidden">
                  <Image 
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  className="object-cover object-left lg:object-center "
                  fill
                  />

                  <section className="absolute bottom-0 w-full bg-opacity-30 bg-black backdrop-blur-lg rounded-t drop-shadow-lg text-white p-5 flex justify-between ">
                    <div>
                      <p className="font-semibold">
                        {post.title}
                      </p>
                      <p className=" font-thin">
                      {new Date(post._createdAt).toLocaleDateString(
                        "fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        })}
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                      {post.categories.map(category => (
                        <div className="bg-[#ffedd2] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                          <p>
                            {category.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </section>

                <section className="mt-5 flex-1 text-white ">
                  <p className="underline text-lg font-bold">
                    {post.title}
                  </p>
                  <p className="text-gray-500 line-clamp-2 ">
                    {post.description}
                  </p>
                </section>
                <p className="mt-5 font-bold flex items-center group-hover:underline text-[#ffedd2]">
                  Lire l'article
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </p>   
              </div>
            </ClientSideRoute>
          ))}
      </article>
    </div>
  )
}

export default BlogList
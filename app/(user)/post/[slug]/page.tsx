import groq from 'groq'
import { client } from '../../../../lib/sanity.client';
import Image from 'next/image';
import urlFor from '../../../../lib/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponent } from '../../../../components/RichTextComponent';


type Props = {
    params: {
        slug: string;
    };
};

{/** Creation de pages en statiques / Evite le chargement des pages et l'utilisation des fetch Sanity */	}
export async function generateStaticParams() {

  const query = groq`*[_type == "post"]{
    slug
    }`;

    const slugs = await client.fetch(query);
    const slugRoute = slugs.map((slug:any) => slug.slug.current)

    return slugRoute.map( (slug: any) => ({
      slug,
    }))
};

{/** Rechargement de la page toutes les 2 minutes / Mets a jour le contenu qui n'est pas dans les pages statiques. Mise en Cache de la page changeante */	}
export const revalidate = 120;

{/** Query des posts en qroq pour sanity*/	}
async function Post ( {params: {slug}}: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->,
    }
  `
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className='px-10 pb-28 pt-20'>
        {/** Banner de l'article*/	}
      <section className='space-y-2 border text-white border-[#ffedd2] rounded-md'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-space-between'>

          {/** Image principale de l'article*/	}
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
            <Image 
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill/>
          </div>

          <section className=' p-5 bg-[#ffedd270] w-full '>
            <div className=' flex flex-col md:flex-row gap-y-5 justify-between '>

              {/** Titre de l'article*/	}
              <div>
                <h1 className=' text-4xl font-extrabold text-white '>
                  {post.title}
                </h1>

                {/* {Date de publication de l'article} */}
                <p>
                  {new Date(post._createdAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              {/* Image de profil de l'auteur */}
              <div className=' flex items-center space-x-2 '>
                <Image
                  className='rounded-full' 
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40} />

              {/* Bio de nom de l'auteur */}
                <div className='w-64'>
                  <h3 className='text-lg font-bold'>
                    {post.author.name}
                  </h3>
                  
                  {/* {post.author.bio} */}
                  <div>
                    
                  </div>

                </div>
              </div>
            </div>

            {/* {description article} */}
            <div>
              <h2 className='italic pt-4 text-white'>
                {post.description}
              </h2>

              {/* {mapping catagories} */}
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((category) => (
                  <span className=' bg-[#ffedd2] text-black mr-2 px-3 py-1 rounded-full text-sm font-semibold' key={category._id}>
                    {category.title}
                  </span>
                ))}
              </div>

            </div>

          </section>
        </div>
      </section>

      {/* {Contenu de l'article} */}
      <section className='mt-10 text-white  p-4 '>
        <PortableText value={post.body} components={RichTextComponent}/>
      </section>
    </article>
  );
};

export default Post
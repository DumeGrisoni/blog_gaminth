import React from 'react'
import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'
import  PreviewSuspense  from '../../components/PreviewSuspense'
import PreviewBlogList from '../../components/PreviewBlogList'
import BlogList from '../../components/BlogList'


const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(createdAt desc)
`

{/** Ajout du CRON toutes les 2 minutes sur la page static*/	}
export const revalidate = 120;

async function HomePage() {

if (previewData()) {
  return (
    <PreviewSuspense fallback={(
      <div role="status">
        <p className='text-center text-lg animate-pulse text-[#ffedd2]'>
          Chargement des données 'Preview'
        </p>
      </div>
    )}>
        <h1>Mode Preview</h1>
        <PreviewBlogList query={query} />
    </PreviewSuspense>
  )
}

const posts= await client.fetch(query);

  return (
    <BlogList posts={posts} />
  )
}

export default HomePage
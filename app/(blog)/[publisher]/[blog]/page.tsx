const Blog = ({params} : {params: {publisher: string, blog: string}}) => {
  return <main className='pt-24 py-18 max-w-2xl mx-auto'>
  {params.publisher} | {params.blog}
  </main>
}

export default Blog
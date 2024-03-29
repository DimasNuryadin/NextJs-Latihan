import Layout from "@/components/Layout";
import style from '../styles/Blog.module.css'

// Per masing2 blog
interface Post {
  id: number;
  title: string;
  body: string;
}
interface BlogProps {
  readonly dataBlog: Post[];
}
export default function Blog(props: BlogProps) {
  const { dataBlog } = props;

  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => (
        <div key={blog.id} className={style.card}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog: dataBlog
    }
  }
}
import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";

export default function Home({ posts }) {
  return (
   
    <div>
            <img src="https://res.cloudinary.com/picturecloud7/image/upload/e_background_removal/e_replace_color:red/b_black/co_red,l_text:Arial_140_bold_stroke_70:SKI-ANTLER.COM/fl_layer_apply,g_south,y_600/ski-antler-crop.jpg" alt="antler"></img>

      <h1 className="mt-24 mb-12 font-bold text-3xl">Latest Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          description={post.data.description}
          slug={post.slug}
        />
      ))}
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction.jsx";
import PostCard from "../components/post/PostCard.jsx";
import { useTranslation } from "react-i18next";

export default function Home() {
  const {t} = useTranslation("translation", {
    keyPrefix: "home"
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/post/getPosts`);
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="lg:px-44">
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl">
        <h1 className="text-3xl font-bold lg:text-6xl">{t("welcom")}</h1>
        <p className="text-gray-500 text-xs sm:text-sm">{t("contentWelcom")}</p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          {t("viewAllPosts")}
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              {t("recentPosts")}
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to="/search"
              className="text-lg text-teal-500 hover:underline text-center"
            >
              {t("viewAllPosts")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

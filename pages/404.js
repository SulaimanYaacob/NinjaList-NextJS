import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"; //literally useHistory

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooooooops....</h1>
      <h2>Page not found.</h2>
      <p>
        Please return where you came -{">"}{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

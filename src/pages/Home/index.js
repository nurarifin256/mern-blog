import React, { useEffect } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./Home.scss";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // const [dataBlog, setDataBlog] = useState([]); sebelum menggunakan state global
  // const { dataBlogs, name } = useSelector((state) => state);
  const { dataBlog } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  // console.log("data blog global: ", dataBlogs);

  useEffect(() => {
    Axios.get("http://localhost:4000/v1/blog/posts")
      .then((result) => {
        // console.log("data API", result.data);
        const responAPI = result.data;

        // setDataBlog(responAPI.data); sebelum menggunakan state global
        dispatch({ type: "UPDATE_DATA_BLOG", payload: responAPI.data });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() => history.push("./create-blog")}
        />
      </div>
      {/* <p>{name}</p> */}
      <Gap height={20} />
      <div className="content-wrapper">
        {/* {dataBlog.map((blog) => { sebelum menggunakan state global */}
        {dataBlog.map((blog) => {
          //setelah menggunakan state global
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;

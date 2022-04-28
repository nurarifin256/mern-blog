import React, { useEffect, useState } from "react";
import "./DetailBlog.scss";
import { Link } from "../../components";
import { useHistory, withRouter } from "react-router-dom";
import Axios from "axios";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    // console.log("params : ", props.match.params.id);
    const id = props.match.params.id;
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        // console.log("success: ", res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);
  const history = useHistory();
  if (data.author) {
    return (
      <div className="detail-blog-wrapper">
        <img
          className="img-cover"
          src={`http://localhost:4000/${data.image}`}
          alt="thumb"
        />
        <p className="blog-title">{data.title}</p>
        <p className="blog-author">
          {data.author.name} - {data.createdAt}
        </p>
        <p className="blog-body">{data.body}</p>
        <Link title="Kembali Ke Home" onClick={() => history.push("/")} />
      </div>
    );
  }
  return <p>Loading Data</p>;
};

export default withRouter(DetailBlog);

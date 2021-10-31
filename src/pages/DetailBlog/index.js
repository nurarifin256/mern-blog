import React from "react";
import { RegisterBg } from "../../assets";
import "./DetailBlog.scss";
import { Link } from "../../components";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title blog</p>
      <p className="blog-author">Author - Date post</p>
      <p className="blog-body">
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
      </p>
      <Link title="Kembali Ke Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;

import React from "react";
import { Button, Gap } from "../../atoms";
import { RegisterBg } from "../../../assets";
import "./BlogItem.scss";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date post</p>
        <p className="body">
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;

import React from "react";
import { Button, Gap, Input, TextArea, Upload, Link } from "../../components";
import "./CreateBlog.scss";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push("/")} />
      <p className="title">Create New Blog</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={10} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;

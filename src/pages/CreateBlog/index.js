import React, { useEffect, useState } from "react";
import { Button, Gap, Input, TextArea, Upload, Link } from "../../components";
import "./CreateBlog.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postToAPI,
  setForm,
  setImgPreview,
  updateToAPI,
} from "../../config/redux/action";
import { withRouter } from "react-router-dom";
import Axios from "axios";

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    // console.log("params: ", props);
    const id = props.match.params.id;
    if (props.match.params.id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          // console.log("success: ", data);
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch, props]);

  const onSubmit = () => {
    // console.log(title);
    if (isUpdate) {
      console.log("update data");
      const id = props.match.params.id;
      updateToAPI(form, id);
    } else {
      console.log("create data");
      postToAPI(form);
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };
  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push("/")} />
      <p className="title">{isUpdate ? "Update" : "Create New"} Blog Post</p>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={10} />
      <div className="button-action">
        <Button title={isUpdate ? "update" : "Simpan"} onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default withRouter(CreateBlog);

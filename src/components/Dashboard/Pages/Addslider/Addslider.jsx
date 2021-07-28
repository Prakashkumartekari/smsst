import React, { useState } from "react";
import { db, storage } from "../../../../firebase/config";
import { FaCamera } from "react-icons/fa";
import "./addslider.css";
import { useDispatch } from "react-redux";
import { showAlert } from "../../../../features/modal/Clickevent";
const Addslider = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState([
    {
      progress1: null,
      progress2: null,
      progress3: null,
    },
  ]);
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [error, setError] = useState({
    error1: false,
    error2: false,
    error3: false,
    size1:false,
    size2:false,
    size3:false
  });

  const type = ["image/jpeg", "image/jpg", "image/png"];
  const publish = (e) => {
    e.preventDefault();
    db.collection("slider")
      .add({
        url1,
        url2,
        url3,
      })
      .then(() => dispatch(showAlert("slider Added Successfully")))
      .catch((error) => console.log(error));
    setProgress({ url1: "", url2: "", url3: "" });
    setUrl1("");
    setUrl2("");
    setUrl3("");
  };
  const handleupload = (data) => {
        console.log(data)
    if (type.includes(data.image.type) && data.image.size <= 5000000) {
      switch (data.first) {
        case "img1":
          setError({ ...error, error1: false });
          break;
        case "img2":
          setError({ ...error, error2: false });
          break;
        case "img3":
          setError({ ...error, error3: false });
          break;
        default:
          break;
      }
   
      const uploadTask = storage
        .ref(`slider/${data.image.name}`)
        .put(data.image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percentage =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (data.first === "img1") {
            setProgress({ progress1: percentage });
          } else if (data.first === "img2") {
            setProgress({ progress2: percentage });
          } else {
            setProgress({ progress3: percentage });
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("slider")
            .child(data.image.name)
            .getDownloadURL()
            .then((url) => {
              if (data.first === "img1") {
                setUrl1(url);
                setProgress({ progress1: null });
              } else if (data.first === "img2") {
                setUrl2(url);
                setProgress({ progress2: null });
              } else {
                setUrl3(url);
                setProgress({ progress3: null });
              }
            });
        }
      );
    } else {
      if (data.first === "img1") setError({ ...error, error1: true });
      if (data.first === "img2") setError({ ...error, error2: true });
      if (data.first === "img3") setError({ ...error, error3: true });
    }
  };
  return (
    <div className="addslider_section">
      <div className="addnews_image_container">
        <div className="adddnewsback">
          <div className="addnews_image">
            <h4>First Image</h4>
            {progress.progress1 > 0 && (
              <div
                className="progressbar"
                style={{ width: `${progress.progress1}"%"` }}
              ></div>
            )}
            {url1 !== "" && (
              <div className="uploaded_image_container">
                <img src={url1} alt="img1" />
              </div>
            )}
            {error.error1 && (
              <div style={{ color: "red" }}>File Must be JPEG/JPG/PNG or size less than 5 MB</div>
            )}
            <div className="icon_container">
              <label htmlFor="first_image">
                <FaCamera />
                <h5>upload</h5>
              </label>
              <input
                type="file"
                name="first_image"
                id="first_image"
                onChange={(e) =>
                  handleupload({ first: "img1", image: e.target.files[0] })
                }
              />
            </div>
          </div>
        </div>
        <div className="adddnewsback">
          <div className="addnews_image">
            <h4>Second Image</h4>
            {progress.progress2 > 0 && (
              <div
                className="progressbar"
                style={{ width: `${progress.progress2}"%"` }}
              ></div>
            )}
            {url2 !== "" && (
              <div className="uploaded_image_container">
                <img src={url2} alt="img1" />
              </div>
            )}
            {error.error2 && (
              <div style={{ color: "red" }}>File Must be JPEG/JPG /PNG or size less than 5 MB</div>
            )}
            <div className="icon_container">
              <label htmlFor="second_image">
                <FaCamera />
                <h5>upload</h5>
              </label>
              <input
                type="file"
                name="second_image"
                id="second_image"
                onChange={(e) =>
                  handleupload({ first: "img2", image: e.target.files[0] })
                }
              />
            </div>
          </div>
        </div>
        <div className="adddnewsback">
          <div className="addnews_image">
            <h4>Third Image</h4>
            {progress.progress3 > 0 && (
              <div
                className="progressbar"
                style={{ width: `${progress.progress3}"%"` }}
              ></div>
            )}
            {url3 !== "" && (
              <div className="uploaded_image_container">
                <img src={url3} alt="img1" />
              </div>
            )}
            {error.error3 && (
              <div style={{ color: "red" }}>File Must be JPEG/JPG/PNG or size less than 5 MB</div>
            )}
            <div className="icon_container">
              <label htmlFor="third_image">
                <FaCamera />
                <h5>upload</h5>
              </label>
              <input
                type="file"
                name="third_image"
                id="third_image"
                onChange={(e) =>
                  handleupload({ first: "img3", image: e.target.files[0] })
                }
              />
            </div>
          </div>
        </div>
        <div className="btn_container">
          <button
            type="submit"
            className="btn"
            onClick={(e) => {
              publish(e);
            }}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default Addslider;

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Sidebar() {
  const [userInfo, setUserInfo] = useState([]);
  const [newUserInfo, setNewUserInfo] = useState([]);
  const [editOpen, setEditOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    company: "",
    location: "",
    website: "",
    twitter_username: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`https://api.github.com/users/Praneshchaa`);
      console.log(data);
      setUserInfo([data.data]);
    };
    fetchData();
  }, [setUserInfo]);

  const changeEditState = () => {
    setEditOpen(!editOpen);
    console.log(editOpen);
  };

  const sendEditData = () => {
    console.log(formData);
    axios({
      method: "patch",
      url: "https://api.github.com/user",
      data: {
        name: formData.name,
        bio: formData.bio,
        company: formData.company,
        location: formData.location,
        website: formData.website,
        twitter_username: formData.twitter_username,
      },
      headers: {
        Authorization: "Bearer " + "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",
      },
    }).then((res) => {
      setNewUserInfo(res.data);
      console.log(newUserInfo, "userInfo");
    });
  };

  return (
    <div className="sidebar">
      {userInfo.map((info) => (
        <>
          <div className="image">
            <img src={info.avatar_url} alt="pranesh" />
          </div>
          <div className="user-description">
            <div className="user-name">
              <p>{info.name}</p>
            </div>
            <div className="user-username">
              <p>{info.login}</p>
            </div>
            <div className="user-company">
              <p>{info.company}</p>
            </div>
            <div className="user-location">
              <p>{info.location}</p>
            </div>

            <div className="user-website">
              <p>{info.website}</p>
            </div>

            <div className="user-location">
              <p>{info.twitter_username}</p>
            </div>
            <div className="user-slug"></div>
            <button onClick={changeEditState}>Edit Profile</button>
            <div>
              {editOpen ? (
                <>
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="name"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <textarea
                      type="text"
                      name="bio"
                      id="bio"
                      placeholder="bio"
                      onChange={(e) =>
                        setFormData({ ...formData, bio: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="company"
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="location"
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      placeholder="website"
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="twitterUsername"
                      id="twitterUsername"
                      placeholder="twitterUsername"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          twitter_username: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button onClick={() => sendEditData()}>Update</button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Sidebar;

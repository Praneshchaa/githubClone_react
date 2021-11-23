import React, { useEffect, useState } from "react";
import axios from "axios";

function Repositories() {
  const [repoData, setRepoData] = useState([]);
  const [searchData, setSearchData] = useState({
    search: "",
  });

  const fetchRepodata = async () => {
    const data = await axios.get(
      `https://api.github.com/users/praneshchaa/repos`
    );
    console.log(data.data);
    setRepoData(data.data);
    const date = repoData.created_at;
    console.log(date, "date");
  };

  useEffect(() => {
    fetchRepodata();

    return () => {};
  }, []);

  const searchHandler = () => {};

  return (
    <div className="repositories-collection">
      <div className="repositories-selectors">
        <input
          type="search"
          id="search"
          placeholder="Find a repository..."
          onChange={(e) =>
            setSearchData({ ...searchData, search: e.target.value })
          }
        />
        <button onClick={() => setSearchData()}>Search</button>
        <select>
          <option value="Type">Type</option>
          <option value="Language">Sources</option>
          <option value="Sort">Forks</option>
          <option value="Language">Archived</option>
          <option value="Sort">Mirrors</option>
        </select>

        <select>
          <option value="Type">Language</option>
        </select>

        <select>
          <option value="Type">Sort</option>
        </select>
      </div>

      <div className="repositories-section">
        {repoData.map((repo) => (
          <a href={repo.html_url}>
            <div className="single-repo">
              <div className="repo-left">
                <div className="repo-name">{repo.full_name}</div>
                <div className="repo-date">{}</div>
                <div className="repo-language">{repo.language}</div>
              </div>
              <div className="repo-right">
                <div className="repo-visibility">{repo.visibility}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Repositories;

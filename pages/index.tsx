import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileList from "../lib/components/ProfileList";
import { Profile, Results } from "../lib/types";
import Layout from "../lib/components/Layout";
import SearchBar from "../lib/components/SearchBar";

const Home = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
        .get<Results<Profile>>("https://randomuser.me/api", {
          params: { results: 20 },
        })
        .then((res) => setProfiles(res.data.results))
        .catch((err) => {
          console.error(err);
          alert("Profile request failed");
        });
  }, []);
  const filteredProfiles = profiles.filter((profile) => {
    const fullName = `${profile.name.first} ${profile.name.last}`.toLowerCase();
    const location = profile.location.city.toLowerCase();
    return (
        fullName.includes(search.toLowerCase()) ||
        location.includes(search.toLowerCase())
    );
  });


  return (
      <Layout>
        <SearchBar search={search} setSearch={setSearch} />
        {!profiles.length ? (
            <h1>Loading profiles...</h1>
        ) : (
            <ProfileList profiles={filteredProfiles} />
        )}
      </Layout>
  );
};
export default Home;

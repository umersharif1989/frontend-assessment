import React from "react";
import { PROFILE_PARAMS } from "../profileUtils";
import ProfilePreview from "./ProfilePreview";
import { Profile } from "../types";

const ProfileList = ({ profiles }: { profiles: Profile[] }) => {
    return (
        <div className="table-responsive mb-5">
            <table className="table table-striped text-center align-middle mb-5">
                <thead className="table-dark">
                    <tr>
                        {PROFILE_PARAMS.map(({ columnTitle }, i) => (
                            <th className="text-start" key={i}>{columnTitle}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {profiles.map((profile, i) => (
                    <ProfilePreview profile={profile} key={i} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProfileList;

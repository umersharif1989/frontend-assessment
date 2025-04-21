import React from "react";
import { PROFILE_PARAMS } from "../profileUtils";
import { Profile } from "../types";
import Link from "next/link";

const ProfilePreview = ({ profile }: { profile: Profile }) => {
    return (
        <tr>
            {PROFILE_PARAMS.map(({ renderValue }, i) => (
                <td className="text-start" key={i}>
                    <Link
                        href={{
                            pathname: `/user/${profile.login.uuid}`,
                            query: { user: JSON.stringify(profile) },
                        }}
                        className={`text-decoration-none ${
                            i === 0 ? "text-primary" : "text-dark"
                        }`}
                    >
                        {renderValue(profile)}
                    </Link>
                </td>
            ))}
        </tr>
    );
};

export default ProfilePreview;
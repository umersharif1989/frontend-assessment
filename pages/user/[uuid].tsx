import { useRouter } from "next/router";
import Layout from "../../lib/components/Layout";
import { Profile } from "../../lib/types";

const ProfilePage = () => {
    const router = useRouter();
    const { user } = router.query;

    if (!user) return <Layout><p>Loading...</p></Layout>;

    let profile: Profile;
    try {
        profile = JSON.parse(user as string);
    } catch (e) {
        return <Layout><p>Error loading user data</p></Layout>;
    }

    return (
        <Layout>
            <h3 className="fw-bold mb-4">Profile Setting</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="card p-4 text-center h-100">
                        <img
                            src={profile.picture.large}
                            alt="Profile"
                            className="rounded-circle mx-auto mb-3 img-fluid"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold mb-0">Account Details</h5>
                        </div>
                        <div className="mb-2">
                            <strong>Full Name:</strong> {profile.name.title} {profile.name.first} {profile.name.last}
                        </div>
                        <div className="mb-2"><strong>Email:</strong> {profile.email}</div>
                        <div className="mb-2">
                            <strong>Phone number:</strong> 🇵🇰 {profile.phone}
                        </div>
                        <div className="mb-2">
                            <strong>Username:</strong> {profile.login.username}
                        </div>
                        <div className="mb-2">
                            <strong>Age:</strong> {profile.dob.age}
                        </div>
                        <div className="mb-2">
                            <strong>Address:</strong> {profile.location.street.number} {profile.location.street.name}, {profile.location.city}, {profile.location.state}, {profile.location.country}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;

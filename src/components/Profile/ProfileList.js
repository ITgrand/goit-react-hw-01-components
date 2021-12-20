import PropTypes from "prop-types";
import Profile from "./Profile";

function ProfileList({ user }) {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

ProfileList.propTypes = {
  props: PropTypes.node,
};

export default ProfileList;

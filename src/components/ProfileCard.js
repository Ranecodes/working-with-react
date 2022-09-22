import Avatar from "./Avatar";
import "../styles/card.css"

function UserProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="card-name">Kelly Wu</div>
      <div>Kelly Wu was the first woman to become a president.</div>
    </div>
  );
}

export default UserProfileCard;

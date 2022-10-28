// styles
import './SocialAvatar.css'

export default function Avatar({ src }) {
  return (
    <div className="avatar">
      <img src={src} alt="user avatar" />
    </div>
  )
}

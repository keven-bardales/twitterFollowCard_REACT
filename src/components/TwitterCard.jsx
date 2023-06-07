import { MdVerified } from 'react-icons/md';
import { useState } from 'react';
function TwitterCard({
  children,
  userName,
  isVerified,
  formatUsername,
  initialIsFollowing,
}) {
  const [isFollowingState, setIsFollowingState] = useState(initialIsFollowing);

  const text = isFollowingState ? 'Following' : 'Follow';
  const buttonClasname = isFollowingState
    ? 'followCard_button isFollowing'
    : 'followCard_button';

  const handleClick = () => {
    setIsFollowingState(!isFollowingState);
  };

  return (
    <article className='followCard'>
      <header className='followCard_header'>
        <img
          className='followCard_avatar'
          alt='Cristiano Ronaldo avatar'
          src={`https://unavatar.io/twitter/${userName}`}
        ></img>
        <div className='followCard_info'>
          <strong>{children}</strong>
          <span className='followCard_username'>
            {formatUsername(userName)}
            {isVerified ? <MdVerified style={{ color: '#3591E8' }} /> : ''}
          </span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClasname}>
          <span className='followCard_text'>{text}</span>
          <span className='followCard_stopFollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  );
}

export default TwitterCard;

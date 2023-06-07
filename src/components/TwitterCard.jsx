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
  const [textButtonState, setTextButtonState] = useState(text);
  const buttonClasname = isFollowingState
    ? 'followCard_button isFollowing'
    : 'followCard_button';

  const handleClick = () => {
    setIsFollowingState(!isFollowingState);
  };

  const handleOver = () => {
    isFollowingState
      ? setTextButtonState('Unfollow')
      : setTextButtonState('Follow');
  };

  const handleOut = () => {
    isFollowingState
      ? setTextButtonState('Following')
      : setTextButtonState('Follow');
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
        <button
          onClick={handleClick}
          onMouseOver={handleOver}
          onMouseOut={handleOut}
          className={buttonClasname}
        >
          {textButtonState}
        </button>
      </aside>
    </article>
  );
}

export default TwitterCard;

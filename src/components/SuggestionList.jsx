import React from 'react';
import TwitterCard from './TwitterCard';
import '../styles/SuggestionList.css';

function SuggestionList() {
  const formatUsername = (userName) => `@${userName}`;
  return (
    <section className='SuggestionList'>
      <h1>Suggestions</h1>
      <TwitterCard
        formatUsername={formatUsername}
        userName={'Cristiano'}
        isVerified
        initialIsFollowing
      >
        Cristiano Ronaldo
      </TwitterCard>
      <TwitterCard
        formatUsername={formatUsername}
        userName={'KMbappe'}
        isVerified
      >
        Kylian Mbappé
      </TwitterCard>
      <TwitterCard formatUsername={formatUsername} userName={'pedro'}>
        Pedro
      </TwitterCard>
      <TwitterCard
        formatUsername={formatUsername}
        userName={'SergioRamos'}
        isVerified
        initialIsFollowing
      >
        Sergio Ramos
      </TwitterCard>
    </section>
  );
}

export default SuggestionList;

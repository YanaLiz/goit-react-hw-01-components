import css from './FriendList.module.css';
import  PropTypes  from 'prop-types';


export const FriendList = ({friends}) => {
  return (
    <ul key={friends.id} className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          
          <li className={css.item}
            key={id}
            id={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}>
          
  <span className={isOnline?css.status_online:css.status_offline}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
        )
      })}
</ul>
  )
}

FriendList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id:PropTypes.number.isRequired
  }))

}


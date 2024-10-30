import { getImageUrl } from './utils2.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile(person) {
  return (
    <Avatar
      size={40}
      person={person}
    />
  );
}

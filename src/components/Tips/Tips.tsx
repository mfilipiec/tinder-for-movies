import './Tips.scss';
import AcceptIcon from '../../icons/AcceptIcon';
import RejectIcon from '../../icons/RejectIcon';

export default function Tips() {
  return (
    <div className="tips">
      <AcceptIcon className="tips__icon tips__icon--accept" />
      <RejectIcon className="tips__icon tips__icon--reject" />
    </div>
  );
}

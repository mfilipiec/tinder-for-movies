import './DiscoverControls.scss';
import { HandleDiscoverStackTypes } from '../Discover/Discover';
import Button from '../../components/Button/Button';
import AcceptIcon from '../../icons/AcceptIcon';
import RejectIcon from '../../icons/RejectIcon';

export default function DiscoverControls({
  handleDiscoverStack
}: {
  handleDiscoverStack: HandleDiscoverStackTypes;
}) {
  return (
    <div className="controls">
      <Button onClick={() => handleDiscoverStack('accept')}>
        <AcceptIcon className="button__icon button__icon--accept" />
        Accept
      </Button>
      <Button onClick={() => handleDiscoverStack('reject')}>
        Reject
        <RejectIcon className="button__icon button__icon--reject" />
      </Button>
    </div>
  );
}

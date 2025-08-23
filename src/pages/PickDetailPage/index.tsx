import { useParams } from 'react-router';

const PickDetailPage = () => {
  const { id } = useParams();
  return <div>PickDetailPage {id}</div>;
};
export default PickDetailPage;

import ModalLayout from '@/components/modal/modalLayout';
import Image from 'next/image';
import CloseIcon from '@/public/icons/Close.svg';
import AddCommunityCardForm from '@/components/modal/addCommunityCard/addCommunityCardForm';
import ModalContainer from '../modalContainer';

interface AddCommunityCardProps {
  onClick: () => void;
}

function AddCommunityCard({ onClick }: AddCommunityCardProps) {
  return (
    <ModalLayout onClick={onClick} >
      <ModalContainer onClick={onClick} title='글쓰기'>
        <AddCommunityCardForm/>
      </ModalContainer>
    </ModalLayout>
  );
}

export default AddCommunityCard;

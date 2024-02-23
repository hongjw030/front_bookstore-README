import ModalContainer from "@/components/modal/modalContainer"
import ModalLayout from "@/components/modal/modalLayout"
import AddReviewForm from "@/components/modal/addReview/addReviewForm";

export interface AddReviewProps {
  onClick: () => void;
  bookId: number;
  bookTitle: string;
  authors: string;
}

function AddReview({onClick, bookId, bookTitle, authors} : AddReviewProps) {
  return (
    <ModalLayout onClick={onClick}>
      <ModalContainer onClick={onClick} title="리뷰 작성하기">
        <AddReviewForm onClick={onClick} bookId={bookId} bookTitle={bookTitle} authors={authors}/>
      </ModalContainer>
    </ModalLayout>
  )
}

export default AddReview
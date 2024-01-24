import Image from 'next/image';
import EmojiButtonContainer from '@/components/communityCard/emoji/emojiButtonContainer';
import KebabImg from '@/public/icons/Kebab.svg';
import ProfileImg from '@/public/images/SampleBookCover1.jpeg';
import SampleBookCoverImg from '@/public/images/SampleBookCover3.jpeg';

interface CommunityCardProps {
  profileImg : string;
  userNickname: string;
  createAt: string;
  bookCover: string;
  bookTitle: string;
  review: string;
}

function CommunityCard({
  profileImg,
  userNickname,
  createAt,
  bookCover,
  bookTitle,
  review,
} : CommunityCardProps) {
  return (
    <div className='relative flex flex-col w-347 h-439 border-[1px] border-solid border-[#dbdbdb] rounded-[10px] py-20 gap-20'>
      <div className='flex items-center px-20'>
        <div className='relative w-48 h-48 overflow-hidden rounded-full'>
          <Image src={ProfileImg} alt="프로필이미지" fill />
        </div>
        <div className='flex flex-col justify-start py-5 pl-12'>
          <p className='text-14 font-bold text-[#505050]'>{userNickname}</p>
          <p className='text-12 font- text-[#767676]'>{createAt}</p>
        </div>
        <Image className='absolute top-23 right-20' src={KebabImg} alt="케밥버튼" />
      </div>
      <div className='flex-center w-345 h-180 bg-[#f5f5f5] '>
        <Image src={SampleBookCoverImg} alt="책표지" className='h-full w-auto'  />
      </div>
      <div className='flex flex-col px-20'>
        <p className='text-16 font-bold text-[#505050]'>{bookTitle}</p>
        <p className='text-14 font-light text-[#767676]'>{review}</p>
      </div>
      <EmojiButtonContainer />
    </div>
  );
}

export default CommunityCard;

// import TitleContentTable from '@/components/modal/addReview/titleContentTable';
// import Image from 'next/image';
// import LineIcon from '@/public/icons/Line.svg';
// import Radio from '@/components/input/radio';
// import RegisterButton from '@/components/button/register/registerButton';
// import useFormControl from '@/hooks/useFormControl';
// import DropDown from '@/components/dropDown/dropDown';
// import { useState } from 'react';
// import { REFUND } from '@/constants/dropDownMenu';
// import RefundPrice from '@/components/modal/getRefund/refundPrice';
// import Input from '@/components/input/input';

// function GetRefundForm() {
//   const [selectedItem, setSelectedItem] = useState(REFUND[0]);
//   const onSelectedItem = (menu: string) => {
//     setSelectedItem(menu);
//   };
//   const option = selectedItem.length === 0 ? false : selectedItem;
//   const { control, handleSubmit, isButtonActive, onSubmit } = useFormControl(option);
      //TODO: 환불 api나오면 연결필요, 주석해제시 에러
//   return (
//     <>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-40 overflow-scroll">
//         <TitleContentTable
//           title1="책 제목"
//           content1="스물 아홉 생일, 1년 후 죽기로 결심하다"
//           title2="저자"
//           content2="이제니"
//         />
//         <Image src={LineIcon} alt="구분선" />
//         <div className="flex">
//           <Radio
//             title="신청 유형 선택"
//             control={control}
//             name="application"
//             label1="교환"
//             label2="환불"
//           />
//           <Radio
//             title="회수 방법"
//             control={control}
//             name="return"
//             label1="직접 발송"
//             label2="상품 회수"
//           />
//         </div>
//         <Input
//           type="email"
//           title="이메일"
//           description="처리 내역이 해당 이메일로 발송"
//           control={control}
//           name="email"
//         />
//         <Input
//           type="text"
//           title="내용"
//           control={control}
//           name="description"
//           as={
//             <DropDown
//               menus={REFUND}
//               selectedItem={selectedItem}
//               onSelectedItem={onSelectedItem}
//             />
//           }
//         />
//         <RefundPrice refundPrice="19,800" />
//       </form>
//       <RegisterButton disabled={isButtonActive}>
//         교환/환불 신청하기
//       </RegisterButton>
//     </>
//   );
// }

// export default GetRefundForm;

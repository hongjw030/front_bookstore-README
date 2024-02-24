import { QUERY_KEY } from '@/constants/queryKey';
import {
  GetCommunityOption,
  PostCommunityData,
  PutCommunityOption,
} from '@/types/api/community';
import {
  useDelete,
  useFetch,
  useUpdate,
  useUpdateType,
} from '@/utils/reactQuery';
import { instance } from 'src/libs/instance';

//커뮤니티 글 전체조회, 내가쓴글 조회,
export const getCommunity = async (option: GetCommunityOption) => {
  const { endpoint, params } = option;
  const result = await instance.get(
    `community${endpoint ? `/${endpoint}` : ''}`,
    {
      params,
    },
  );
  return result.data.data;
};

export const useGetCommunity = (option: GetCommunityOption) => {
  return useFetch(QUERY_KEY.community, getCommunity, option);
};

//글 등록
const postCommunity = async (data: PostCommunityData) => {
  const result = await instance.post('community', {
    memberId: data.option,
    ...data,
  });
  return result.data;
};

export const usePostCommunity = (data: PostCommunityData) => {
  return useUpdate(postCommunity, data);
};

//글 삭제
const deleteCommunity = async (communityId?: number) => {
  const result = await instance.delete(`community/${communityId}`);
  return result.data;
};

export const useDeleteCommunity = (communityId?: number) => {
  return useDelete(deleteCommunity, communityId);
};

//글 수정
const putCommunity = async (putFormData: PutCommunityOption) => {
  const { option, required, content } = putFormData;

  const result = await instance.put(`community/${option}`, {
    content,
    rating: required,
  });
  return result.data;
};

export const usePutCommunity = (putFormData: PutCommunityOption) => {
  return useUpdate(putCommunity, putFormData);
};

//커뮤니티 이모지 상태 토클
interface PostCommunityEmoji {
  type: string;
  check: boolean;
  communityId: number;
}

const postCommunityEmoji = async (data: PostCommunityEmoji) => {
  const result = await instance.post(`community/${data.communityId}/emoji`, {
    type: data.type,
    check: data.check,
    communityId: data.communityId,
  });

  return result.data;
};

export const usePostCommunityEmoji = (
  data: PostCommunityEmoji,
  { onSuccess, onError, onSettled, onMutate }: useUpdateType = {},
) => {
  return useUpdate(postCommunityEmoji, data, {
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
};

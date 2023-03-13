import { List, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreListSkeleton = () => {
  return (
    <>
      <Skeleton>
        <ListItem>
          <SkeletonText />
        </ListItem>
      </Skeleton>
    </>
  );
};

export default GenreListSkeleton;

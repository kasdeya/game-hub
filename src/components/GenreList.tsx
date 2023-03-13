import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreListContainer from './GenreListContainer';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { isLoading, data, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListContainer key={skeleton}>
            <GenreListSkeleton />
          </GenreListContainer>
        ))}
      {data.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

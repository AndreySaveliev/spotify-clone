import SongBar from './SongBar';
import { useEffect, useState } from 'react';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  const [relatedTracks, setRelatedTracks] = useState();

  // const fetchData = () => {
  //   if (data) {
  //     fetch('https://cdn.shazam.com/shazam/v3/en-US/GB/web/-/tracks/track-similarities-id-267429991', {
  //       method: 'GET',
  //       mode: 'no-cors',
  //       headers: {
  //         accept:
  //           'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  //       },
  //     })
  //       .then((res) => JSON.stringify(res))
  //       .then((res) => console.log(res))
  //       .then((res) => setRelatedTracks(res));
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">More info:</h1>
      <div className="mt-6 w-full flex flex-col">
        <p className="text-gray-300 text-xl">Album - {data?.sections[0].metadata[0]?.text}</p>
        <p className="text-gray-300 text-xl">Released {data?.sections[0].metadata[2]?.text}</p>
        <p className="text-gray-300 text-xl">{data?.sections[1]?.footer}</p>
      </div>
    </div>
  );
};

export default RelatedSongs;

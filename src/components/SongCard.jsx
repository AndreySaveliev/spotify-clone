import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazamCode';
import { useState } from 'react';

const SongCard = ({ song, isPlaying, activeSong, data, index }) => {
  const dispatch = useDispatch();
  const { data: songData } = useGetSongDetailsQuery(song?.key);
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'
          }
            `}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song img" src={songData?.images.coverart} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-white text-lg truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="mt-1 text-gray-300 text-sm truncate">
          <Link to={`/artists/${songData?.artists[0].adamid}`}>{song.subtitle}</Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;

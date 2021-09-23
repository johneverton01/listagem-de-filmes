import { useEffect, useState } from "react";
import { Button } from '../components/Button';
import { api } from '../services/api';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenrePrps {
  genres: GenreResponseProps[],
  selectedGenreId: number,
  handleClickButton: Function
}





export function SideBar({ genres, selectedGenreId, handleClickButton  }: GenrePrps) {
  return (
    <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
    </div>
  )
}
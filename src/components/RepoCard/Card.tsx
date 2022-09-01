import React, { FC, useState } from 'react'
import { useActions } from '../../hooks/actions'
import { IRepo } from '../../models/models'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useAppSelector } from '../../hooks/redux'
import style from './Card.module.scss'

const Card: FC<IRepo> = repo => {
  const { addFavourite, removeFavourite } = useActions()
  const { favourites } = useAppSelector(state => state.githubReducer)
  const [isFav, setFav] = useState(favourites.includes(repo.html_url))

  function addTooFavourite(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (!isFav) {
      addFavourite(repo.html_url)
      setFav(true)
    } else {
      removeFavourite(repo.html_url)
      setFav(false)
    }
  }

  return (
    <div className={style.parent}>
      <div className={style.content}>
        <div>
          <a href={repo.html_url} target='_blank'>
            <h2>{repo.full_name}</h2>
            <p className={'text-sm'}>
              Forks: <span className={'font-bold my-1'}>{repo.fork}</span>
            </p>
            <p className={'text-sm'}>
              Watchers:{' '}
              <span className={'font-bold my-1'}>{repo.watchers}</span>
            </p>
            <p className={'text-sm font-thin'}>{repo?.description}</p>
          </a>
        </div>
        <div className={'flex-shrink-0'}>
          <a href={repo.owner.html_url} target='_blank'>
            <img className={style.img} src={repo.owner?.avatar_url} alt='' />
          </a>
        </div>
      </div>
      <button className={style.button} onClick={addTooFavourite}>
        {isFav ? <MdFavorite /> : <MdFavoriteBorder />}
      </button>
    </div>
  )
}

export { Card }

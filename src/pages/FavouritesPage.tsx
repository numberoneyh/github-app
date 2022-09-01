import { useAppSelector } from '../hooks/redux'

const FavouritesPage = () => {
  const { favourites } = useAppSelector(state => state.githubReducer)

  if (!favourites.length) {
    return (
      <div className={'container mt-10'}>
        <p className={'text-center font-bold text-[24px] text-yellow-500'}>
          No items...
        </p>
      </div>
    )
  }

  return (
    <div className={'container'}>
      <ul className={'mt-10'}>
        {favourites.map((f, index) => (
          <li
            key={index}
            className={'py-4 px-2 bg-gray-200 my-2 rounded w-1/2'}>
            <a href={f} target='_blank'>
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { FavouritesPage }

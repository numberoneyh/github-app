import { githubApi } from '../store/github/github.api'
import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/debounce'
import { Card } from '../components/RepoCard/Card'

const HomePage = () => {
  const [search, setSearch] = useState('')
  const [dropDown, setDropDown] = useState(false)
  const debounced = useDebounce(search)
  const { isLoading, isError, data } = githubApi.useSearchUsersQuery(
    debounced,
    {
      skip: debounced.length < 3,
      refetchOnFocus: true,
    }
  )

  const [fetchUsers, { isLoading: isRepoLoading, data: repos }] =
    githubApi.useLazyGetUserReposQuery()

  useEffect(() => {
    setDropDown(debounced.length > 3 && data?.length! > 0)
  }, [debounced, data])

  const clickHandler = (username: string) => {
    fetchUsers(username)
    setDropDown(false)
  }

  if (isError) {
    return (
      <p className={'text-center text-red-600 mt-10'}>
        Something went wrong...
      </p>
    )
  }
  return (
    <div className={'container'}>
      <div className={'flex justify-center mt-5'}>
        <div className={'relative w-[560px]'}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            className={
              'border-[2px] rounded-md py-2 px-4 w-full h-[42px] mb-2 outline-none'
            }
            placeholder={'Search Github users...'}
          />
          {dropDown && (
            <ul
              className={
                'absolute top-[100$] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-auto'
              }>
              {isLoading && <p className={'text-center'}>Loading...</p>}
              {data?.map(user => (
                <li
                  className={
                    'py-2 px-5 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
                  }
                  key={user.id}
                  onClick={() => clickHandler(user.login)}>
                  {user.login}
                </li>
              ))}
            </ul>
          )}
          <div className={'container'}>
            {isRepoLoading && (
              <p className={'text-center font-bold text-green-900 text-2xl'}>
                Loading user..
              </p>
            )}
            {repos?.map((repo, index) => (
              <Card {...repo} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { HomePage }

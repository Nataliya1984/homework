import s from './Loader.module.css'

// export const Loader = () => <div className={s.loader}/>

export const Loader = () => {
  return(
      <div className={s.loader}>
          <svg className={s.circularLoader} viewBox="25 25 50 50">
              <circle className={s.loaderPath} cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2"/>
          </svg>
      </div>
  )
}




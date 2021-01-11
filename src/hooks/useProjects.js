import React, { useEffect, useState } from 'react'
import { getProjects } from '../helpers/getProjects'

export const useProjects = () => {
  const [projects, setProjects] = useState({data: [],
                                            loading: true})
  useEffect(() => {
    getProjects()
    .then(data => {
      setProjects({
        data,
        loading: false
      })
    })
    return () => {
      ''
    }

  }, [])
  return projects;
}

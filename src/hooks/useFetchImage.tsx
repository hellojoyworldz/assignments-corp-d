import { useState, useEffect } from 'react'

const API_URL = 'https://api.unsplash.com/photos/random/'
const API_KEY = '4-0M4l1erSHX0zJZInORLLu5YQEAsEwWgQPwWdOZCPs'

const useFetchImage = () => {
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    const savedImage = localStorage.getItem('image')

    const fetchIamge = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch image')
        }

        const data = await response.json()
        setImage(data.urls.regular)
        localStorage.setItem('image', data.urls.regular)
      } catch (error) {
        console.error((error as Error).message)
      }
    }
    // 4.
    // 이미지가 localStorage에 저장되어 있는 경우 랜덤 이미지를 가져오지 않음
    if (savedImage) {
      setImage(savedImage)
    } else {
      fetchIamge()
    }
  }, [])

  return { image }
}

export default useFetchImage

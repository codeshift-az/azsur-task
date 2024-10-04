export type ProjectRes = {
  count: number
  next: any
  previous: any
  results: Project[]
}

export type Project = {
  slug: string
  title: string
  images: Image[]
  service: Service
  description: string
  updated_at: string
  created_at: string
}

export type Image = {
  id: number
  image: string
}

export type Service = {
  slug: string
  title: string
  images: Image[]
  description: string
  updated_at: string
  created_at: string
}

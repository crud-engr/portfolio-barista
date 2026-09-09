import type { IconType } from 'react-icons'

export interface NavLink {
  name: string
  href: string
}

export interface SocialLink {
  icon: IconType
  href: string
  label: string
}

export interface NavigationProps {
  isScrolled: boolean
}

export interface SplashScreenProps {
  onComplete: () => void
}

export interface ContactInfoItem {
  icon: IconType
  title: string
  content: string
  link?: string
}

export interface Project {
  name: string
  description: string
  image: string
  link: string
  tags: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  isCurrent: boolean
}

export interface DescriptionItem {
  title: string
  points: string[]
}

export interface Experience {
  role: string
  company: string
  website?: string
  location?: string
  period: string
  description?: string
  descriptionList?: DescriptionItem[]
}

export interface Skill {
  name: string
  icon: IconType
  color: string
}

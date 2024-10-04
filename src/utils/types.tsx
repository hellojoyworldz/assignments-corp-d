// common
export interface defaultProps {
  style?: React.CSSProperties
  className?: string
}

export interface CommonProps {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export interface commonDesignProps {
  size?: 'lv1' | 'lv2' | 'lv3' | 's' | 'm' | 'l'
  lineHeight?: 's' | 'm' | 'l' | 'normal'
  fontFamily?: 'primary' | 'secondary'
  fontWeight?: 'normal' | 'bold' | 400 | 700
  color?:
    | 'black'
    | 'black-opacity-50'
    | 'black-opacity-80'
    | 'dark-gray'
    | 'gray'
    | 'white'
    | 'white-opacity-60'
    | 'white-opacity-80'
    | 'link'
    | 'success'
    | 'error'
  lineclamp?: number
}

export interface CommonFilterDataProps {
  id: number
  value: string | number
}

// Button
export interface ButtonProps extends CommonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  $shape?: 'circle' | 'capsule'
  range?: number
}

// IconButton
export interface IconButtonProps extends defaultProps {
  disabled?: boolean
  iconType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  iconPath: string
  iconAlt: string
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>
}

// Image
export interface ImageProps extends defaultProps {
  title: string
  imgPath?: string
  imgAlt?: string
  width?: number
  height?: number
}

// Label
export interface LabelProps extends CommonProps, commonDesignProps {
  htmlFor: string
}

// LinkTo
export interface LinkToProps extends CommonProps {
  to: string
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target']
}

// Text
export interface TextProps extends CommonProps, commonDesignProps {
  as?: 'p' | 'span' | 'div' | 'strong' | 'em'
}

// Title
export interface TitleProps extends CommonProps, commonDesignProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

// TextField
export interface TextFieldProps extends IconButtonProps {
  id: string
  type?: 'text' | 'password'
  value: string
  placeholder: string
  errorMessage: string
  isFieldError: boolean
  validate: (value: string) => void
  isFocused: boolean
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

// TabFilter
export interface TabFilterProps extends defaultProps {
  data: CommonFilterDataProps[]
  selectedTab: number
  setSelectedTab?: React.Dispatch<React.SetStateAction<number>>
}

// RangeFilter
export interface RangeFilterDataProps extends CommonFilterDataProps {
  range?: number
}

export interface RangeFilterProps extends defaultProps {
  data: RangeFilterDataProps[]
  selectedRange: number[]
  setSelectedRange?: React.Dispatch<React.SetStateAction<number[]>>
}

// ProfileCardItem
export interface ProfileCardItemProps extends defaultProps {
  id: number
  title: string
  contents?: string
  imgPath?: string
  imgAlt?: string
  link?: string
}

// ProfileCardList
export interface ProfileCardListProps extends defaultProps {
  data: ProfileCardItemProps[]
}

// CityCardItem
export interface CityCardItemProps extends defaultProps {
  id: number
  continentId: number
  year: number
  continent: string
  country: string
  city: string
  contents?: string
  imgPath?: string
  imgAlt?: string
}

// CityCardList
export interface CityCardListProps extends defaultProps {
  data: CityCardItemProps[]
}

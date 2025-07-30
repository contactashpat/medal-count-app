import styles from './FlagIcon.module.css'

// TODO: we can make this dynamic later by fetching country codes and sorting. For this we will have to fetch appropriate sprite as well making it more dynamic but with added complexity
const countryOrder = [
  'AUT',
  'BLR',
  'CAN',
  'CHN',
  'FRA',
  'GER',
  'ITA',
  'NED',
  'NOR',
  'RUS',
  'SUI',
  'SWE',
  'USA',
]

type Props = {
  code: string
}

export default function FlagIcon({ code }: Props) {
  const index = countryOrder.indexOf(code)
  const flagHeight = 17 // px
  const offsetY = index >= 0 ? -index * flagHeight : 0

  return (
    <div
      className="w-[28px] h-[17px] bg-no-repeat bg-[url('/flags.png')] bg-left"
      style={{ backgroundPositionY: `${offsetY}px` }}
    />
  )
}

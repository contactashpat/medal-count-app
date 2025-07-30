export enum MedalType {
  GOLD = 'gold',
  SILVER = 'silver',
  BRONZE = 'bronze',
  TOTAL = 'total',
}

export const MedalLabels: Record<MedalType, string> = {
  [MedalType.GOLD]: '🥇 Gold',
  [MedalType.SILVER]: '🥈 Silver',
  [MedalType.BRONZE]: '🥉 Bronze',
  [MedalType.TOTAL]: '🏅 Total',
}

export const getColor = (bin) => {
  switch(bin) {
    case '1':
      return '#616161'
    case '2':
      return '#ff8a80'
    case '3':
      return '#82b1ff'
    case '4':
      return '#b9f6ca'
    case '5':
      return '#ffff8d'
    case '0':
      return '#f5f5f5'
    default:
      return '#f5f5f5'
  }
}

export default function getTokenIcon(id: string) {
  switch (id) {
    case 'USDC':
      return '/logos/usdc.svg'
    case 'BTC':
      return '/logos/btc.svg'
    case 'ETH':
    default:
      return '/logos/ethereum.svg'
  }
}

import { NextRequest, NextResponse } from 'next/server'
import {
  createWalletClient,
  http,
  type Hex,
  parseUnits,
  erc20Abi,
  Address,
} from 'viem'
import { base } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'

export async function POST(request: NextRequest) {
  const payer = request.headers.get('payer') as Address | null
  if (!payer) {
    return NextResponse.json(
      {
        message: 'payer null',
      },
      { status: 500 }
    )
  }

  let url: string = ''

  try {
    const body = await request.json()
    const type = body.type

    switch (type) {
      case 'love':
        url =
          'https://drive.google.com/file/d/1oRBjLZd0NkHEb_FtQFCVtIQUMS13xhRL/view?usp=drive_link'
        break
      case 'rich':
        url =
          'https://drive.google.com/file/d/1xBzkEuloBR4-3URS91AAZCyUQsvwEieb/view?usp=drive_link'
        break
      case 'health':
        url =
          'https://drive.google.com/file/d/1BpjYuIaofceSzz9eBZFup6YjbKnfGSX1/view?usp=drive_link'
        break
      case 'crypto':
        url =
          'https://drive.google.com/file/d/1m9X0c0eELnrzb3ozKO0_JXOMjgNcHB52/view?usp=drive_link'
        break
      case 'mysteriou':
        url =
          'https://drive.google.com/file/d/16rWqj7R-919BxonGJY8AYm6oQiAp2g80/view?usp=drive_link'
        break
      default:
        return NextResponse.json(
          {
            success: false,
            message:
              'The query value of the "type" field must be one of "love", "rich", "health", "mysteriou" or "crypto".',
          },
          { status: 500 }
        )
    }
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        message: e,
      },
      { status: 500 }
    )
  }

  // 转账5000token
  const serverAccount = privateKeyToAccount(
    process.env.SERVER_WALLET_PRIVATE_KEY as Hex
  )
  const client = createWalletClient({
    account: serverAccount,
    chain: base,
    transport: http(),
  })

  const amount = parseUnits('5000', 18)

  try {
    const hash = await client.writeContract({
      address: '0x130fc88D70E89C9466bC1041AE298b2d7D82Edc4',
      abi: erc20Abi,
      functionName: 'transfer',
      args: [payer, amount],
    })
    return NextResponse.json(
      {
        success: true,
        hash: hash,
        url,
        message: `Congratulations, your purchase has been successful. The address for the book is ${url}, and the token has been sent with the change. The hash is ${hash}.`,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
      },
      { status: 500 }
    )
  }
}

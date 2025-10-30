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

export async function GET(request: NextRequest) {
  const payer = request.headers.get('payer') as Address | null
  if (!payer) {
    return NextResponse.json(
      {
        message: 'payer null',
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
        message: `hash ${hash}`,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 500 }
    )
  }
}

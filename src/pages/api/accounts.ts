import { NextApiRequest, NextApiResponse } from 'next'

import accountsData from '../../data/accounts.json'
import { AccountsData } from '../../interfaces/accounts.model'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AccountsData>
) {
  res.status(200).json(accountsData)
}

import { NextApiResponse } from 'next'
import type { NextApiRequest } from 'next'

import accountsData from '../../data/accounts.json'
import { AccountsData } from '../../interfaces/accounts.model'
import handler from './accounts'

describe('accounts API', () => {
  it('returns the list of accounts', async () => {
    const mockReq = {} as NextApiRequest
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as NextApiResponse<AccountsData>

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(200)
    expect(mockRes.json).toHaveBeenCalledWith(accountsData)
  })
})

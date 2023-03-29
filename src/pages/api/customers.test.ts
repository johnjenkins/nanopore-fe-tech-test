import { NextApiResponse } from 'next'
import type { NextApiRequest } from 'next'

import customersData from '../../data/customers.json'
import { CustomersData } from '../../interfaces/customers.model'
import handler from './customers'

describe('accounts API', () => {
  it('returns the list of accounts', async () => {
    const mockReq = {} as NextApiRequest
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as NextApiResponse<CustomersData>

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(200)
    expect(mockRes.json).toHaveBeenCalledWith(customersData)
  })
})
